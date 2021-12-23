import { ThemeProvider } from "styled-components";
import { Route } from 'react-router-dom'
import theme from "./components/Theme";
import GlobalStyle from './components/GlobalStyle'
import Home from './pages/Home';
import Summary from './pages/Summary';
import Partners from "./pages/Partners";
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <BrowserRouter>
          <ScrollToTop />
          <Route exact path="/" component={Home} />
          <Route exact path="/summary" component={Summary} />
          <Route exact path="/partners" component={Partners} />
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
