import type { Metadata } from "next";
import "./globals.css";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, createTheme, mantineHtmlProps } from '@mantine/core';

const colorScheme: [string, string, string, string, string, string, string, string, string, string] = [ 
]

const theme = createTheme({
  colors: {
    colorScheme,
  },
  primaryColor: "colorScheme",
  primaryShade: 7,
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
