import React, { createContext, ReactNode, useContext, useState } from 'react';

import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../../constants/config';
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

  function getAntTheme(theme: any) {
    return {
      colorPrimary: theme.palette.primary.main,
      // colorTextBase: theme.palette.text.primary,
      // fontFamilyBase: theme.font.family,
      // fontSizeBase: theme.font.size.base,
      // borderRadius: theme.cardRadius,
      // colorBgBase: theme.palette.background.paper,
      // colorText:  theme.palette.text.primary,
      // boxShadow:  theme.cardShadow,
      // sizeStep:4
    };
  }

  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider
      // theme={{
      //   token: getAntTheme(defaultTheme.theme),
      // }}
      >
        {children}
        <CremaGlobalStyle theme={theme} />
      </ConfigProvider>
    </ThemeProvider>
  );
};
