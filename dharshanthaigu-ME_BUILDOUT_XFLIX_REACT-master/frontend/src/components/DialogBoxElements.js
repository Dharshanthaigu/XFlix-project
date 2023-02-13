import {
  DialogContent,
  TextField,
  MenuItem,
  DialogActions,
  Button,
} from "@mui/material";
import dialogElements from "../utils/DialogElements";
import { useReducer, useState } from "react";
import { initialState, dialogBoxReducer } from "../reducers/DialogBoxReducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config";
import Loader from "./Loader";
import {useSnackbar} from 'notistack';

const DialogBoxElements = ({ onClose }) => {
  const [state, dispatch] = useReducer(dialogBoxReducer, initialState);
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();

  const handleOnSubmit = async () => {
    setIsUploading(true);
    const date = new Date(state.releaseDate);
    const [month, day, year] = date.toString().split(" ").slice(1, 4);
    const formattedDate = [day, month, year].join(" ");

    const updatedState = {
      ...state,
      releaseDate: formattedDate,
    };
    try {
      const uploadResponse = await axios.post(BASE_URL, updatedState);
      console.log(uploadResponse);
      if (uploadResponse.status === 201) {
        navigate("/");
        onClose();
        enqueueSnackbar('Video uploaded succesfully', {variant: 'success'});
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleOnCancel = () => {
    navigate("/");
    onClose();
  };

  const handleOnChange = (event) => {
    dispatch({
      type: "UPDATE_FIELD",
      payload: { name: event.target.name, value: event.target.value },
    });
  };

  return (
    <>
      <Loader isLoading={isUploading} />
      <DialogContent
        sx={{
          display: "flex",
          gap: 3,
          flexDirection: "column",
          paddingTop: "10px !important",
        }}
      >
        {dialogElements.map((dialogElement, index) => {
          const props = dialogElement.props;
          const inputLabelProps =
            dialogElement.props.type === "date"
              ? { InputLabelProps: { shrink: true } }
              : null;

          if (dialogElement.component === "TextField") {
            return (
              <TextField
                key={index}
                onChange={handleOnChange}
                {...props}
                {...inputLabelProps}
                value={state[dialogElement.props.name]}
              />
            );
          }
          return (
            <TextField
              onChange={handleOnChange}
              {...props}
              key={index}
              value={state[dialogElement.props.name]}
            >
              {dialogElement.menuItems.map((menuItem, index) => (
                <MenuItem
                  key={index}
                  onChange={handleOnChange}
                  value={menuItem.value}
                >
                  {menuItem.text}
                </MenuItem>
              ))}
            </TextField>
          );
        })}
      </DialogContent>

      <DialogActions>
        <Button
          onClick={handleOnSubmit}
          variant="contained"
          disabled={isUploading ? true : false}
        >
          {isUploading ? "Uploading..." : "Upload Video"}
        </Button>
        <Button onClick={handleOnCancel} variant="outlined">
          Cancel
        </Button>
      </DialogActions>
    </>
  );
};

export default DialogBoxElements;
