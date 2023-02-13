import {
  Dialog,
  DialogTitle,
  IconButton,
  Typography,

} from "@mui/material";
import DialogBoxElements from "./DialogBoxElements";
import CloseIcon from "@mui/icons-material/Close";

const DialogBox = ({ open, onClose }) => {
 
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{fontSize: '1.6rem'}}>
        Upload Video
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogBoxElements onClose={onClose}  />
    </Dialog>
  );
};

export default DialogBox;
