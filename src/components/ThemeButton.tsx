import React from 'react';

type Props = {
  lightBtnText?: string | JSX.Element;
  darkBtnText?: string | JSX.Element;
  lightBtnClass?: string;
  darkBtnClass?: string;
  lightBtnStyles?: object;
  darkBtnStyles?: object;
  colorTheme: string;
  setTheme: (props: string) => void;
};

export function ThemeButton({
  lightBtnText,
  darkBtnText,
  lightBtnClass,
  darkBtnClass,
  lightBtnStyles = { color: '#000' },
  darkBtnStyles = { color: '#fff' },
  colorTheme,
  setTheme,
}: Props) {
  return (
    <>
      {colorTheme === 'light' ? (
        <button
          className={darkBtnClass}
          style={darkBtnStyles}
          onClick={() => setTheme('light')}
        >
          {(lightBtnText && lightBtnText) || 'Change to Light'}
        </button>
      ) : (
        <button
          className={lightBtnClass}
          style={lightBtnStyles}
          onClick={() => setTheme('dark')}
        >
          {(darkBtnText && darkBtnText) || 'Change to Dark'}
        </button>
      )}
    </>
  );
}
