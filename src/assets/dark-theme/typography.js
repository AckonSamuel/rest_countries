import colors from './colors';
import pxToRem from './pxToRem';

const { text } = colors;

const baseProperties = {
  fontFamily: '"Nunito Sans", sans-serif',
  fontWeightLighter: 300,
  fontWeightLight: 400,
  fontWeightMedium: 600,
  fontWeightBold: 800,
  fontStyle: 'normal',
  color: text.main,
};

const baseHeadingProperties = {
  fontFamily: baseProperties.fontFamily,
  fontWeight: baseProperties.fontWeightBold,
  lineHeight: pxToRem(33),
  color: baseProperties.color,
};

const typography = {
  fontFamily: baseProperties.fontFamily,
  fontWeightLight: baseProperties.fontWeightLight,
  fontWeightMedium: baseProperties.fontWeightMedium,
  fontWeightBold: baseProperties.fontWeightBold,

  logo: {
    fontSize: pxToRem(24),
    ...baseHeadingProperties,
  },

  cardTitle: {
    fontSize: pxToRem(18),
    lineHeight: pxToRem(26),
    ...baseHeadingProperties,
  },

  detailsTitle: {
    fontSize: pxToRem(32),
    lineHeight: pxToRem(44),
    ...baseHeadingProperties,
  },

  cardContent: {
    fontSize: pxToRem(14),
    lineHeight: pxToRem(24),
    fontWeight: baseProperties.fontWeightLight,
    fontFamily: baseProperties.fontFamily,
    fontStyle: baseProperties.fontStyle,
    color: baseProperties.color,
  },

  detailsContent: {
    fontSize: pxToRem(16),
    lineHeight: pxToRem(32),
    fontWeight: baseProperties.fontWeightLight,
    fontFamily: baseProperties.fontFamily,
    fontStyle: baseProperties.fontStyle,
    color: baseProperties.color,
  },

  borderCountries: {
    fontSize: pxToRem(14),
    lineHeight: pxToRem(19),
    fontWeight: baseProperties.fontWeightLighter,
    fontFamily: baseProperties.fontFamily,
    fontStyle: baseProperties.fontStyle,
    color: baseProperties.color,
  },

  returnHome: {
    fontSize: pxToRem(16),
    lineHeight: pxToRem(20),
    fontWeight: baseProperties.fontWeightLight,
    fontFamily: baseProperties.fontFamily,
    fontStyle: baseProperties.fontStyle,
    color: baseProperties.color,
  },

  darkMode: {
    fontSize: pxToRem(16),
    lineHeight: pxToRem(22),
    fontWeight: baseProperties.fontWeightMedium,
    fontFamily: baseProperties.fontFamily,
    fontStyle: baseProperties.fontStyle,
    color: baseProperties.color,
  },

  h1: {
    fontSize: pxToRem(48),
    lineHeight: 1.25,
    ...baseHeadingProperties,
  },

  h2: {
    fontSize: pxToRem(36),
    lineHeight: 1.3,
    ...baseHeadingProperties,
  },

  h3: {
    fontSize: pxToRem(30),
    lineHeight: 1.375,
    ...baseHeadingProperties,
  },

  h4: {
    fontSize: pxToRem(24),
    lineHeight: 1.375,
    ...baseHeadingProperties,
  },

  h5: {
    fontSize: pxToRem(20),
    lineHeight: 1.375,
    ...baseHeadingProperties,
  },

  h6: {
    fontSize: pxToRem(16),
    lineHeight: 1.625,
    ...baseHeadingProperties,
  },

  body1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.625,
  },

  body2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.6,
  },

  lineHeight: {
    sm: 1.25,
    md: 1.5,
    lg: 2,
  },
};

export default typography;
