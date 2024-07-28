import { Urbanist, Inter, Archivo_Black } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
export const urbanist = Urbanist({ subsets: ["latin"] });
// export const inter = Inter({ subsets: ["latin"] });
export const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
});
