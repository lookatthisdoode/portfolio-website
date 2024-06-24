import { Palanquin, Roboto, Roboto_Mono, Overpass } from "next/font/google";

export const palanquin = Palanquin({ subsets: ["latin"], weight: ["700"] });
export const roboto = Roboto({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "300"],
});
export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ["700", '200', "400"],
})
