import { ColorPalette, Gradient } from "wmk-color-palette";

export const colors = new ColorPalette([
  {
    value: "#048CB9",
    group: "blue",
    tertiary: true,
  },
  {
    value: "#ebe72a",
    group: "yellow",
    accent: true,
  },
  {
    value: "#B9D800",
    group: "green",
  },
  { value: "#fefefe", group: "white" },
  {
    value: "#E48C2B",
    group: "orange",
    primary: true,
  },
  {
    value: "#696969",
    group: "black",
    text: true,
  },
  {
    value: "#0a0a0a",
    group: "black",
    black: true,
  },
  {
    value: "#F15A24",
    group: "red",
    secondary: true,
  },
  {
    value: "#cccccc",
    group: "gray",
  },
  {
    value: "#ffd500",
    group: "yellow",
    coaccent: true,
  },
  {
    value: "#464646",
    group: "gray",
  },
  { value: "#fefefe", group: "white", reverse: true },
]);

export const WMKGradient = new Gradient(
  [[colors.hex("primary")], [colors.hex("secondary")]],
  false,
  -90
);

export const ButtonFlashGradient = new Gradient(
  [
    [colors.rgba("primary", 0), 50],
    [colors.rgba("primary"), 50],
  ],
  false,
  0
);
