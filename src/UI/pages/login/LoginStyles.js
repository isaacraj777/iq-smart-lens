import smartLens from "../../../assets/smartLens.png";
import arrows from "../../../assets/arrows.png";
import rectangles from "../../../assets/rectangles.png";
import theme from '../../Theme';

const loginStyles = {
  leftPane: {
    backgroundRepeat: "no-repeat",
    backgroundColor: theme.palette.primary.main,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    overflow: "hidden",
    padding: "1%",
  },
  rightPane: {
    my: 20,
    mx: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  leftPaneTopImg: {
    // backgroundImage: `url(${rectangles})`,
    backgroundRepeat: "no-repeat",
    minHeight: "150px",
  },
  leftPaneBg: {
    backgroundImage: `url(${smartLens})`,
    backgroundRepeat: "no-repeat",
    minHeight: "84px",
  },
  leftPaneText: {
    fontWeight: "normal",
    fontSize: "36px",
    color: "#FFFFFF",
  },
  leftPaneSubText: {
    fontWeight: "normal",
    fontSize: "18px",
    color: "#FFFFFF",
    marginBottom: "10%",
  },
  leftPaneBottomImg: {
    backgroundImage: `url(${arrows})`,
    backgroundRepeat: "no-repeat",
    marginTop: "10%",
    minHeight: "200px",
  },
  loginButton: {
    textTransform: "none",
    fontWeight: 600,
    marginTop: "5%",
    backgroundColor: "#2B2E7D",
    color: "white",
    "&hover": {
      borderColor: "pink",
    },
  },
  resetPassword: { float: "right", textTransform: "none", fontWeight: 600 },
};

export default loginStyles;
