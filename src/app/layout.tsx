import type { Metadata } from "next";
import "./globals.css";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, createTheme, mantineHtmlProps } from '@mantine/core';

const theme = createTheme({
  autoContrast: true,
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
        <ColorSchemeScript defaultColorScheme="dark"/>
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
