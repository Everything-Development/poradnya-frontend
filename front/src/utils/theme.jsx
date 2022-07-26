import { createTheme } from "@mui/material";


const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
      },
    },
    palette: {
      primary: {
        main: "#E6B751",
      },
      info: {
        main: "#ffffff",
        contrastText: "#7f1716",
      },
    },
    shape: {
      borderRadius: 5,
    },
    typography: {
      fontFamily: 'Rubik',
      button: {
        textTransform: 'none'
      },
      h3: {
        fontWeight: 600,
        fontSize: "1.5rem",
        marginBottom: "10",
        "@media (max-width:400px)": {
          fontSize: "1.2rem",
        },
      },
      h2: {
        fontWeight: 600,
        fontSize: "2rem",
        "@media (max-width:500px)": {
          fontSize: "1.5rem",
        },
      },
      h4: {
        fontWeight: 400,
        fontSize: "1.2rem",
        "@media (max-width:400px)": {
          fontSize: "1rem",
        },
      },
      h5: {
        fontWeight: 300,
        fontStyle: "italic",
        fontSize: "1.2rem",
        transition: "all ease-in-out 0.2s",
        "@media (max-width: 500px)": {
          fontSize: "0.8rem",
        },
      },
      body1: {
        fontWeight: 300,
      },
      body2: {
        fontWeight: 300,
        "@media (max-width: 500px)": {
          fontSize: "0.7rem",
        },
      },
    },
  });
  
  export default theme;
  