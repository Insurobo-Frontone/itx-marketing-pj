import { createContext } from 'react';
import whitelogo from '../img/common/whitelogo.svg';
import blacklogo from '../img/common/blacklogo.svg';
import togglebtn from '../img/common/toggle_btn.svg';
import togglebtnblack from '../img/common/toggle_btn_black.svg';
import closebtn from '../img/common/closebtn.svg';



export const themeConfig = {
  light: {
    headerBg: '#FFFFFF',
    fontColor: '#323232',
    logo: blacklogo,
    menubtn: togglebtnblack,
    menuClose: closebtn
  },
  dark: {
    headerBg: 'transparent',
    fontColor: '#FFFFFF',
    logo: whitelogo,
    menubtn: togglebtn,
    menuClose: closebtn
  }
};


const ThemeContext = createContext(themeConfig.light);
export default ThemeContext;


