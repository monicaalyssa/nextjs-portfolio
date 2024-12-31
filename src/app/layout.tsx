import type { Metadata } from "next";
import "./globals.css";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, createTheme, mantineHtmlProps } from '@mantine/core';

const colorScheme: [string, string, string, string, string, string, string, string, string, string] = [ 
    "#f5f5f5",
    "#e7e7e7",
    "#cdcdcd",
    "#b2b2b2",
    "#9a9a9a",
    "#8b8b8b",
    "#848484",
    "#717171",
    "#656565",
    "#575757"
]

const theme = createTheme({
  colors: {
    colorScheme,
  },
  primaryColor: "colorScheme",
  primaryShade: 5,
});

export const metadata: Metadata = {
  title: "Monica Williams",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
