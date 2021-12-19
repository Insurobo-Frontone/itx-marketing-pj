import { ThemeProvider } from "styled-components";
import { Route } from 'react-router-dom'
import theme from "./components/theme";
import GlobalStyle from './components/GlobalStyle'
import Home from './pages/Home';
import Summary from './pages/Summary';



function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <Route exact path="/" component={Home} />
        <Route exact path="/summary" component={Summary} />
    </ThemeProvider>
  );
}

export default App;
