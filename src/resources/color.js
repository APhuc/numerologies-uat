const color = {
  primary: '#D39A4B',
  white: '#FFFFFF',

  textColor: '#666666',
  textColor2: '#434343',
  textColor5: '#A0A0A0',
  labelColor: '#888888',
  currentStepColor: '#CDEAFF',
};
export const Colors = {
  primary: color.primary,
  textColor: color.textColor,
  blue: '#00A3FF',
  white: '#FFF',
  green: '#38C43B',
  orange: '#FC7C00',
  lightYellow: "#f3f6c8",
  red: '#FF0000',
  black: '#000000',
  grey: '#86899B',

  homeCrmBackground: 'rgba(255, 198, 0, 0.1)',
};
export const shadow = (x, y, radius, color, shadowOpacity) => ({
  shadowColor: color,
  shadowOffset: {
    width: x,
    height: y,
  },
  shadowRadius: radius,
  shadowOpacity,
  elevation: 10,
});
