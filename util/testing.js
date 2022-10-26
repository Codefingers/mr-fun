import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

const Providers = ({ children }) => {
  return (
    <ThemeProvider
      theme={{
        colors: {
          body: '#838fa6',
          heading: '#ebedf2',
          accent: '#BA99FF',
          button: '#FFF',
        },
      }}
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
