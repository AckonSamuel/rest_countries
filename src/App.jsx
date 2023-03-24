// react-router components
import { Routes, Route } from "react-router-dom";

// @mui material components
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "./createEmotionCache";

import routes from "./routes";


const App = () => {

  const cache = createEmotionCache();
  const theme = createTheme();

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <CacheProvider value={cache}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>{getRoutes(routes)}</Routes>
    </ThemeProvider>
    </CacheProvider>
  );
}

export default App;