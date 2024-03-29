import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

const SteelfishFont = localFont({
  display: "block",
  fallback: ["system-ui", "Arial"],
  variable: "--font-family-accent",
  src: [
    {
      path: "./files/SteelfishRg-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./files/SteelfishRg-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

const MontserratFont = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "600"],
  display: "swap",
  fallback: ["system-ui", "Arial"],
});

export { SteelfishFont, MontserratFont };
