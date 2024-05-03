export enum Fonts {
  LIGHT = '300',
  REGULAR = '400',
  MEDIUM = '500',
  BOLD = '600',
  EXTRA_BOLD = '600',
}

export const textLight = {
  primary: 'rgb(17, 24, 39)',
  secondary: 'rgb(107, 114, 128)',
  disabled: 'rgb(149, 156, 169)',
  hint: 'rgb(174, 175, 184)',
};

export const appThemeFont = {
  family: ['Be Vietnam', 'sans-serif'].join(','),
  weight: {
    light: Fonts.LIGHT,
    regular: Fonts.REGULAR,
    medium: Fonts.MEDIUM,
    bold: Fonts.BOLD,
    extraBold: Fonts.EXTRA_BOLD,
  },
  size: {
    base: '14px',
    lg: '16px',
    sm: '12px',
  },
};

export const defaultTheme = {
  theme: {
    spacing: 4,
    cardRadius: '16px',
    cardRadius30: '30px',
    cardShadow: '0 0 5px 5px rgba(0,0,0,0.03)',
    direction: 'ltr',
    palette: {
      mode: 'light',
      borderColor: '#0000001f',
      dividerColor: 'rgba(0, 0, 0, 0.06)',
      tooltipBg: 'rgba(0, 0, 0, 0.75)',
      background: '#F4F7FE',
      primary: {
        main: process.env.NX_PRIMARY_COLOR,
        contrastText: '#fff',
      },
      secondary: {
        main: process.env.NX_SECONDARY_COLOR,
      },
      success: {
        main: '#52c41a', //'#11C15B',
        light: '#D9F5E5',
      },
      warning: {
        main: '#FF5252',
        light: '#FFECDC',
      },
      gray: {
        50: '#fafafa',
        100: '#F5F5F5', //#F5F6FA,
        200: '#eeeeee', //#edf2f7',
        300: '#E0E0E0',
        400: '#bdbdbd', //#c5c6cb,
        500: '#9e9e9e', //#A8A8A8',
        600: '#757575', //#666666',
        700: '#616161', //'#4a5568',
        800: '#201e21',
        900: '#212121', //'#1a202c',
        A100: '#d5d5d5',
        A200: '#aaaaaa',
        A400: '#303030',
        A700: '#616161',
      },
      black: '#000',
      white: '#FFFFFF',
      orange: {
        5: '#ffa940',
        6: '#fa8c16',
      },
      cyan: {
        7: '#08979c',
      },
      red: {
        6: '#f5222d',
      },
      green: {
        3: '#b7eb8f',
        5: '#73d13d',
        6: '#52c41a',
        7: '#389e0d',
      },
      blue: {
        5: '#40a9ff',
        7: '#096dd9',
      },
      text: textLight,
    },
    status: {
      danger: 'orange',
    },
    divider: 'rgba(224, 224, 224, 1)',
    font: appThemeFont,
    // sidebar: {
    //   light: LightSidebar,
    //   dark: DarkSidebar,
    // },
    breakpoints: {
      xs: 480,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1600,
    },
    sizes: {
      line: {
        base: 1.35,
      },
      borderRadius: {
        base: '4px',
        circle: '50%',
      },
      framed: {
        base: '20px',
      },
    },
  },
};
