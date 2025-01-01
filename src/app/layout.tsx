import type { Metadata } from "next";
import "./globals.css";
import '@mantine/core/styles.css';
import { ColorSchemeScript, Container, MantineProvider, createTheme, mantineHtmlProps } from '@mantine/core';

const theme = createTheme({
  autoContrast: true,
  headings: {
    fontFamily: "Sentient, serif;",
    fontWeight: "800",
  }
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
        <link href="https://api.fontshare.com/v2/css?f[]=sentient@400,500,501,700,701&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, "/>
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          <Container>
            {children}
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
