// Set up a standardized nomenclature for padding,
// with control over base size and units
const getThemePadding = (base = 1, units = "rem") => {
  let padding = {};
  let sizes = [
    // add any additional names and values below
    { size: "single", value: 1 * base },
    { size: "double", value: 2 * base },
    { size: "triple", value: 3 * base },
    { size: "x4", value: 4 * base },
    { size: "half", value: 0.5 * base },
    { size: "quarter", value: 0.25 * base },
    { size: "eighth", value: 0.125 * base },
    { size: "third", value: (1 / 3) * base },
    { size: "twoThirds", value: (2 / 3) * base },
    { size: "threeQuarters", value: (3 / 4) * base },
    { size: "oneAndHalf", value: 1.5 * base },
    { size: "theeFifths", value: (3 / 5) * base },
    { size: "fourFifths", value: (4 / 5) * base },
  ];
  // this assigns sizes to the padding object
  sizes.forEach((sz) => {
    padding[sz.size] = sz.value;
  });
  return { sizes: padding, base, units };
};

// const themePad = getThemePadding()

// const themeFontName = `Helvetica, Arial, sans-serif`

class ThemeOptions {
  constructor(settings) {
    this.color = settings.color ? settings.color : {};
    this.transform = settings.transform ? settings.transform : {};
    this.font = settings.font ? settings.font : {};
    this.paths = settings.paths ? settings.paths : {};
    this.padding = settings.padding ? settings.padding : getThemePadding();
    this.baseUnit = settings.baseUnit ? settings.baseUnit : "rem";
    this.break = settings.break ? settings.break : {};
  }
  pad(size, string = true) {
    return string
      ? `${this.padding.sizes[size] * this.padding.base}${this.padding.units}`
      : `${this.padding.sizes[size] * this.padding.base}`;
  }
  hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }
  hex(color) {
    return this.color[color].hex;
  }
  rgb(color, string = true) {
    const rgb =
      this.color[color] && this.color[color].rgb
        ? this.color[color].rgb
        : this.hexToRgb(this.color[color].hex);
    return string ? `rgb(${rgb.r},${rgb.g},${rgb.b})` : rgb;
  }
  alpha(color, alpha = 1, string = true) {
    const rgb = this.color[color] ? this.rgb(color, false) : null;
    const rgba = rgb ? rgb : null;
    if (rgba) {
      rgba["a"] = alpha;
    }
    return string && rgb
      ? `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a})`
      : rgba;
  }
  lightenDarkenColor(hex, amt) {
    let usePound = false;

    if (hex[0] === "#") {
      hex = hex.slice(1);
      usePound = true;
    }

    const num = parseInt(hex, 16);

    let r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    let b = ((num >> 8) & 0x00ff) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    let g = (num & 0x0000ff) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
  }
  lighter(color, amt = 10) {
    return this.color[color]
      ? this.lightenDarkenColor(this.hex(color), amt)
      : null;
  }
  darker(color, amt = 10) {
    return this.color[color]
      ? this.lightenDarkenColor(this.hex(color), amt * -1)
      : null;
  }
}

// SET INITIAL THEME OPTIONS HERE

const colorsNTMWD = {
  // colors must be hexadecimal thus far
  white: {
    hex: "#fefefe",
  },
  text: {
    hex: "#575757"
  },
  blue: {
    hex: "#055DB8"
  },
  cobalt: {
    hex: "#1374b4"
  },
  orange: {
    hex: "#D04A01"
  },
  cyan: {
    hex: "#1F99E8"
  },
  teal: {
    hex: "#2F8379"
  },
  darkgray: {
    hex: "#999999"
  },
  gray: {
    hex: "#D2D2D2"
  },
  lightgray: {
    hex: "#F1F1F1"
  },
  platinum: {
    hex: "#F8F8F8"
  },
  black: {
    hex: "#0a0a0a"
  },
  green: {
    hex: "#79bd69"
  }
};

const Theme = new ThemeOptions({
  color: colorsNTMWD,
  paths: {
    blog: `/blog/`,
    home: `/home/`,
    tags: `/blog/tag/`,
    baseUrl: "https://www.ntmwd.com",
    protocol: "https",
    contact: "/contact/",
    faq: "/faq/",
  },
  break: {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
  },
});

export default Theme;
