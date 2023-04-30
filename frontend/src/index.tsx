import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import GlobalStyled from './styles/global';
import AppRoutes from './navigation/routes/AppRoutes';
import Colors from './styles/theme';

const root = createRoot(
  document.querySelector("#root") as HTMLElement
);
root.render(
  <React.StrictMode>
      <ThemeProvider theme={Colors}>
        <GlobalStyled/>
        <AppRoutes />        
      </ThemeProvider>
  </React.StrictMode>
);

