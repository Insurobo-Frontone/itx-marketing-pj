

const size = {
  Desktop: "1920px",
  Mobile: "700px",
  Tablet: "1261px",
  SmaillMobile: "270px"
};

const light = {
  bgColor: '#FFFFFF',
  color: '#323232',
}

const basic = {
  bgColor: 'transparent',
  color: '#FFFFFF',
}

const Theme = {
  desktop: `(max-width: ${size.Desktop})`,
  mobile: `(max-width: ${size.Mobile})`,
  tablet: `(max-width: ${size.Tablet})`,
  smaillMobile: `(max-width: ${size.SmaillMobile})`,
  basicMode: basic,
  lightMode: light,
};



export default Theme;