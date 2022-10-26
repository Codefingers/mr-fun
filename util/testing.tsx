import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

export const Providers = ({ children }) => {
  return (
    <ThemeProvider
      theme={theme}
    >
      {children}
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

// override render method
export { customRender as render };
