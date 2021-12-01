import Layout from './Layouts/Layout';
import MainBanner from './components/MainBanner';
import { ThemeProvider } from "styled-components";
import theme from "./components/Theme";
import GlobalStyle from './components/GlobalStyle'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <Layout>
        <MainBanner />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
