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
import Corporation from './pages/Corporation';


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <BrowserRouter>
          <ScrollToTop />
          <Route exact path="/" component={Home} />
          <Route exact path="/intro/summary" component={Summary}/>
          <Route exact path="/intro/partners" component={Partners} />
          <Route exact path="/intro/recruit" component={Recruit} />
          <Route exact path="/intro/contact" component={ContactTab} />
          <Route exact path="/business/platform" component={PlatForm} />
          <Route exact path="/business/platform/:pagename" component={PlatForm} />
          <Route exact path="/business/invest" component={Invest} />
          <Route exact path="/business/apply" component={Apply} />
          <Route exact path="/business/apply?2" component={Apply} />
          <Route exact path="/business/apply?3" component={Apply} />
          <Route exact path="/corporation/apply" component={Apply} />
          <Route exact path="/inherit/apply" component={Apply} />

          <Route exact path="/corporation" component={Corporation} />
          <Route exact path="/corporation/:pagename" component={Corporation} />
          
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
