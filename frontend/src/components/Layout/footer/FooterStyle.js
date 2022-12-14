import { makeStyles } from "@mui/styles";

const useStyleFooter = makeStyles((theme) => ({
  mainCont: {
    display: "flex",
    flexDirection: "column",
    background: theme.palette.mode === "dark" ? "#fdfdfd" : "#181818",
    padding: "20px 40px",
    [theme.breakpoints.down("md")]: {
      padding: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "5px",
    },
  },

  subCont1: {
    display: "flex",
    background: theme.palette.mode === "dark" ? "#181818" : "",
    justifyContent: "space-between",
    padding: "0px 10px 20px 10px",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      padding: "0px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 10px",
      flexDirection: "column",
      gap: "10px",
      justifyContent: "space-between",
    },
  },

  brandlogofoot: {
    flex: 0.5,
    border: "2px solid",
    borderColor: theme.palette.mode === "dark" ? "black" : "",
    borderStartStartRadius: "110px",
    borderBottomRightRadius: "110px",
    padding: "10px 70px",
    backgroundColor: "white",
  },
  DwnlodStore: {
    display: "flex",
    width: "100%",
    gap: "20px",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  subCont2: {
    borderTop: `1px solid ${
      theme.palette.mode === "dark" ? "black" : "whitesmoke"
    }`,
    borderBottom: `1px solid ${
      theme.palette.mode === "dark" ? "black" : "whitesmoke"
    }`,
    display: "flex",
    justifyContent: "space-evenly",
    gap: "90px",
    alignItems: "flex-start",
    padding: "30px 20px",
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      gap: "12px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "10px 0px",
      padding: " 0px",
      flexDirection: "column",
      gap: "5px",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  footHeadings: {
    color: theme.palette.mode === "dark" ? "#000" : "#fff",
  },
  Links: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "15px",
    alignItems: "center",
    padding: "0 20px",
    [theme.breakpoints.down("md")]: {
      width: "45%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 10px",
      width: "100%",
      height: "10vh",
      gap: "15px",
      padding: "10px",
      height: "auto",
      justifyContent: "space-evenly",
    },
  },
  linkItems: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      flexDirection: "row",
      display: "flex",
      padding: "0 25px",
      gap: "15px",
      flexWrap: "wrap",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      flexDirection: "row",
      display: "flex",
    },
  },
  Items: {
    color: theme.palette.mode === "dark" ? "black" : "whitesmoke",
    textDecoration: "none",
    [theme.breakpoints.down("md")]: {
      padding: "15px 20px",
    },
  },
  aboutus: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "15px",
    [theme.breakpoints.down("md")]: {
      width: "45%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 10px",
      width: "100%",
      height: "10vh",
      gap: "20px",
      padding: "10px",
      height: "auto",
      justifyContent: "space-evenly",
    },
  },

  aboutItems: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.palette.mode === "dark" ? "black" : "whitesmoke",
    gap: "20px",
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
    },
  },
  contactus: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "15px",
    [theme.breakpoints.down("md")]: {
      width: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 10px",
      width: "100%",
      height: "10vh",
      gap: "20px",
      padding: "10px",
      height: "auto",
      justifyContent: "space-evenly",
    },
  },

  contactItems: {
    display: "flex",
    color: theme.palette.mode === "dark" ? "black" : "whitesmoke",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },

  socialicons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "5px",
    [theme.breakpoints.down("md")]: {
      width: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 10px",
      width: "100%",
      height: "10vh",
      gap: "20px",
      padding: "10px",
      height: "auto",
      justifyContent: "space-evenly",
    },
  },
  socialItems: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    color: "whitesmoke",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {},
  },
  SItems: {
    [theme.breakpoints.down("md")]: {
      margin: "0 15px",
    },
  },
  subCont3: {
    padding: "10px 0px 10px 0",
    color: "white",
    background: theme.palette.mode === "dark" ? "#181818" : "",
    textAlign: "center",
  },
}));

export default useStyleFooter;
