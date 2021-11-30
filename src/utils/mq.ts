const size = {
  mobile: "20em",
  tablet: "48em",
  laptop: "64em",
  desktop: "120em",
};

export const mq = {
  mobile: `only screen and (min-width: ${size.mobile})`,
  tablet: `only screen and (min-width: ${size.tablet})`,
  laptop: `only screen and (min-width: ${size.laptop})`,
  desktop: `only screen and (min-width: ${size.desktop})`,
};
