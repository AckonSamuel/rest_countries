import colors from './colors';
import pxToRem from './pxToRem';

const { text } = colors;

const baseProperties = {
    fontFamily: '"Nunito Sans", sans-serif',
    fontWeightLight: 400,
    fontWeightMedium: 600,
    fontWeightBold: 800,
    fontStyle: 'normal',
};

const baseHeadingProperties = {
    fontFamily: baseProperties.fontFamily,
    color: text.main,
    fontWeight: baseProperties.fontWeightBold,
    lineHeight: pxToRem(33),
};

// const lineHeight 

