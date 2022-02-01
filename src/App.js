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
          <Route exact path="/platform?personal" component={PlatForm} />
          <Route exact path="/platform?insuplus" component={PlatForm} />
          <Route exact path="/platform?market" component={PlatForm} />
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
