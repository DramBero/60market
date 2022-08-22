import React from 'react';
import { Header, Footer, ScrollToTop } from './components';
import { Home, ProductPage } from './pages';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Container, createTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import Cart from './pages/Cart';
import products from "./db"

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    React.useEffect(() => {
        document.title = "60 Market"
     }, []);

     const theme = React.useMemo(
        () =>
          createTheme({
            palette: {
              mode: prefersDarkMode ? 'dark' : 'light',
            },
          }),
        [prefersDarkMode],
      );

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
    <div className="App">
        <Container maxWidth="sl">
            <Header />
            <ScrollToTop>
                <Switch>
                    <Route path="/" render={() => <Home products={products} />} exact />
                    <Route path="/product/:id" render={() => <ProductPage products={products} />} exact />
                    <Route path="/cart" render={() => <Cart products={products}/>} exact/>
                </Switch>
            </ScrollToTop>
            <div className="bottom">
            <Footer />
            </div>
        </Container>
    </div>
    </ThemeProvider>
  );
}

export default App;
