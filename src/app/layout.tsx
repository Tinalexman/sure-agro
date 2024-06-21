import type { Metadata } from "next";
import { Corben } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";

import {
  MantineProvider,
  createTheme,
  MantineColorsTuple,
  ColorSchemeScript,
} from "@mantine/core";

const myColor: MantineColorsTuple = [
  "#e5ffea",
  "#d2fad9",
  "#a7f3b4",
  "#78ea8d",
  "#51e46c",
  "#37e057",
  "#26de4b",
  "#16c43b",
  "#03af32",
  "#009726",
];

const corben = Corben({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sure Agro",
    template: "%s - Sure Agro",
  },
  description: "Your one-stop shop for agriculture",
};

const theme = createTheme({
  colors: {
    myColor,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className={corben.className}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
