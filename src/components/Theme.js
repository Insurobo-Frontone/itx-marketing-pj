const size = {
  desktop: "1920px",
  mobile: "700px",
  Tablet: "1261px",
  SmaillMobile: "270px"
};

const Theme = {
  desktop: `(max-width: ${size.desktop})`,
  mobile: `(max-width: ${size.mobile})`,
  Tablet: `(max-width: ${size.Tablet})`,
  SmaillMobile: `(max-width: ${size.desktop})`,
};



export default Theme;