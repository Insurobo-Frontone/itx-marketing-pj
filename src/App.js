import { ThemeProvider } from "styled-components";
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import theme from "./components/Theme";
import GlobalStyle from './components/GlobalStyle'

import Home from './pages/Home';
import Summary from './pages/Summary';
import Recruit from './pages/Recruit';
import Partners from "./pages/Partners";
import ScrollToTop from "./components/ScrollToTop";
import ContactTab from "./components/Contact/ContactTab";
import PlatForm from "./pages/PlatForm"
import Invest from "./pages/Invest";
import Apply from "./pages/Apply";


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <BrowserRouter>
          <ScrollToTop />
          <Route exact path="/" component={Home} />
          <Route exact path="/summary" component={Summary}/>
          <Route exact path="/partners" component={Partners} />
          <Route exact path="/recruit" component={Recruit} />
          <Route exact path="/contact" component={ContactTab} />
          <Route exact path="/platform" component={PlatForm} />
          <Route exact path="/platform/:pagename" component={PlatForm} />
          <Route exact path="/invest" component={Invest} />
          <Route exact path="/apply" component={Apply} />
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
