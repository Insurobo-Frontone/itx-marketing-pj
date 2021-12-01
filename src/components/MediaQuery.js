import { useMediaQuery } from "react-responsive";

const Desktop = ({children}) => {
  const isDesktop = useMediaQuery({ maxWidth: 1920 });
  return isDesktop ? children : null
}
const Mobile = ({children}) => {
  const isMobile = useMediaQuery({ maxWidth: 375 });
  return isMobile ? children : null
}
const SmaillMobile = ({children}) => {
  const isSmaillMobile = useMediaQuery({ maxWidth: 270 });
  return isSmaillMobile ? children : null
}
const Default = ({children}) => {
  const isDesktop = useMediaQuery({ maxWidth: 1920 });
  return isDesktop ? children : null
}

export {Desktop, Mobile, SmaillMobile, Default};