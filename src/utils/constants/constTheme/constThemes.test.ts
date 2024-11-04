
import { Themes } from '../themes';
import { backgroundColor, primaryColor, secondaryColor, highlightColor, textColor, errorColor, terciaryColor, color10, color20, color30, color40, color50, color60, color70, colorHeader } from './constThemes';

describe('Theme Color Functions - Light Theme', () => {
  const theme = Themes.light;

  it('should return correct background color', () => {
    expect(backgroundColor({ theme })).toBe('#f9f9f9');
  });

  it('should return correct primary color', () => {
    expect(primaryColor({ theme })).toBe('#0ca5c0');
  });

  it('should return correct secondary color', () => {
    expect(secondaryColor({ theme })).toBe('#333');
  });

  it('should return correct highlight color', () => {
    expect(highlightColor({ theme })).toBe('#0e88a0');
  });

  it('should return correct text color', () => {
    expect(textColor({ theme })).toBe('#555');
  });

  it('should return correct error color', () => {
    expect(errorColor({ theme })).toBe('#ffeded');
  });

  it('should return correct terciary color', () => {
    expect(terciaryColor({ theme })).toBe('#ddd');
  });

  it('should return correct color10', () => {
    expect(color10({ theme })).toBe('#5a5a5a20');
  });

  it('should return correct color20', () => {
    expect(color20({ theme })).toBe('#ddd');
  });

  it('should return correct color30', () => {
    expect(color30({ theme })).toBe('#fff');
  });

  it('should return correct color40', () => {
    expect(color40({ theme })).toBe('#0ca5c0');
  });

  it('should return correct color50', () => {
    expect(color50({ theme })).toBe('#e0f7fa');
  });

  it('should return correct color60', () => {
    expect(color60({ theme })).toBe('#5a5a5a50');
  });

  it('should return correct color70', () => {
    expect(color70({ theme })).toBe('#f9f9f9');
  });

  it('should return correct colorHeader based on background color', () => {
    expect(colorHeader({ theme })).toBe('#0ca5c0');
  });

  it('should return correct colorHeader for non-matching background color', () => {
    const differentBackgroundTheme = { ...theme, backgroundColor: '#000000' };
    expect(colorHeader({ theme: differentBackgroundTheme })).toBe('transparent');
  });
});

describe('Theme Color Functions - Dark Theme', () => {
  const theme = Themes.dark;

  it('should return correct background color', () => {
    expect(backgroundColor({ theme })).toBe('#050413');
  });

  it('should return correct primary color', () => {
    expect(primaryColor({ theme })).toBe('#0ca5c0');
  });

  it('should return correct secondary color', () => {
    expect(secondaryColor({ theme })).toBe('#cccccc');
  });

  it('should return correct highlight color', () => {
    expect(highlightColor({ theme })).toBe('#0e88a0');
  });

  it('should return correct text color', () => {
    expect(textColor({ theme })).toBe('#e0e0e0');
  });

  it('should return correct error color', () => {
    expect(errorColor({ theme })).toBe('#ffbaba');
  });

  it('should return correct terciary color', () => {
    expect(terciaryColor({ theme })).toBe('#0ca5c0');
  });

  it('should return correct color10', () => {
    expect(color10({ theme })).toBe('#036774c3');
  });

  it('should return correct color20', () => {
    expect(color20({ theme })).toBe('#041a35');
  });

  it('should return correct color30', () => {
    expect(color30({ theme })).toBe('transparent');
  });

  it('should return correct color40', () => {
    expect(color40({ theme })).toBe('#e0f7fa');
  });

  it('should return correct color50', () => {
    expect(color50({ theme })).toBe('#0ca5c0');
  });

  it('should return correct color60', () => {
    expect(color60({ theme })).toBe('transparent');
  });

  it('should return correct color70', () => {
    expect(color70({ theme })).toBe('#f9f9f9e9');
  });

  it('should return correct colorHeader based on background color', () => {
    expect(colorHeader({ theme })).toBe('transparent');
  });

  it('should return correct colorHeader for non-matching background color', () => {
    const differentBackgroundTheme = { ...theme, backgroundColor: '#005550' };
    expect(colorHeader({ theme: differentBackgroundTheme })).toBe('transparent');
  });
});
