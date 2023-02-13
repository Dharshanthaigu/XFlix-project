const dialogElements = [
    {
      component: "TextField",
      props: {
        placeholder: "Video Link",
        label: "Video Link",
        helperText: "This link will be used to derive the video",
        type: "text",
        name: 'videoLink'
      },
    },
    {
      component: "TextField",
      props: {
        placeholder: "Thumbnail Image Link",
        label: "Thumbnail Image Link",
        helperText: "This link will be used to peview the thumbnail image",
        type: "text",
        name: 'previewImage'
      },
    },
    {
      component: "TextField",
      props: {
        placeholder: "Title",
        label: "Title",
        helperText: "This link will be representative text for video",
        type: "text",
        name: 'title'
      },
    },
    {
      component: "Select",
      props: {
        label: "Genre",
        helperText: "Genre will help in categorizing your video",
        select: true,
        name: 'genre'
      },
      menuItems: [
        { value: "education", text: "Education" },
        { value: "sports", text: "Sports" },
        { value: "comedy", text: "Comedy" },
        { value: "lifeStyle", text: "LifeStyle" },
      ],
    },
    {
      component: "Select",
      props: {
        label: "Suitalbe age group for the clip",
        helperText:
          "This will be used to filter video based on age group visibility",
        select: true,
        name: 'contentRating'
      },
      menuItems: [
        { value: "7+", text: "7+" },
        { value: "12+", text: "12+" },
        { value: "16+", text: "16+" },
        { value: "18+", text: "18+" },
      ],
    },
    {
      component: "TextField",
      props: {
        label: "Release Date",
        helperText: "This will be used to sort videos",
        type: "date",
        name: "releaseDate",
        placeholder: 'Realease Date'
      },
    },
  ];

  export default dialogElements;