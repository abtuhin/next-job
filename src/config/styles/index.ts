interface Theme {
  colors: {
    primary: string;
    primary75: string;
    secondary: string;
    dark: string;
    gray: string;
    grayAccent: string;
    gray75: string;
    gray200: string;
    white: string;
    darkest: string;
  };
  fontWeights: {
    bold: string;
    medium: string;
    normal: string;
    f500: number;
  };
  fontSizes: {
    f14: string;
    f16: string;
    f18: string;
    f48: string;
  };
  padding: number;
}

export const theme: Theme = {
  colors: {
    primary: "#1AAEB7",
    primary75: "#D6F8FB",
    secondary: "#004B44",
    dark: "#004B44",
    gray: "#6E6E6E",
    grayAccent: "#C3C3C3",
    gray75: "#FAFAFA",
    gray200: "#EAEAEA",
    white: "#FFFFFF",
    darkest: "#292929"
  },
  fontWeights: {
    normal: "normal",
    bold: "bold",
    medium: "medium",
    f500: 500
  },
  fontSizes: {
    f14: "14px",
    f16: "16px",
    f18: "18px",
    f48: "48px"
  },
  padding: 8
};
