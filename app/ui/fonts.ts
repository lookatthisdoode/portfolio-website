import { Palanquin, Roboto } from "next/font/google";

export const palanquin = Palanquin({ subsets: ["latin"], weight: ["700"] });
export const roboto = Roboto({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "300"],
});
