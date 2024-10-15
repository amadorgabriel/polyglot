import React, { createContext, ReactNode, useContext, useState } from 'react';

import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../../constants/themeConfig';
import { CremaGlobalStyle } from '../../theme/CremaGlobalStyle';

export interface ThemeData {
  theme: any;
}

export const ThemeContext = createContext<ThemeData>({} as ThemeData);

export const useThemeContext = () => useContext(ThemeContext);

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<any>(defaultTheme.theme);
  
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider>
        {children}
        <CremaGlobalStyle theme={theme} />
      </ConfigProvider>
    </ThemeProvider>
  );
};
