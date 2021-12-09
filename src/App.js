import { ThemeProvider } from "styled-components";
import theme from "./components/Theme";
import GlobalStyle from './components/GlobalStyle'
import { Route } from 'react-router-dom'

import Home from './pages/Home';
import Summary from './pages/Summary';
// import Partners from './pages/Partners';
// import Summary from './pages/Summary';
// import Summary from './pages/Summary';
// import Summary from './pages/Summary';
// import Summary from './pages/Summary';
function App() {
  return (
    <ThemeProvider theme={theme}>
    
    {/* <Route exact path="/partners" component={Partners} />
    <Route exact path="/summary" component={Summary} />
    <Route exact path="/summary" component={Summary} />
    <Route exact path="/summary" component={Summary} /> */}
    <GlobalStyle />
      <Route exact path="/" component={Home} />
      <Route exact path="/summary" component={Summary} />
    </ThemeProvider>
  );
}

export default App;
