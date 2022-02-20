import React from 'react';

type Props = {
  lightBtnClass: string;
  darkBtnClass: string;
  lightBtnStyles: object;
  darkBtnStyles: object;
  colorTheme: string;
  setTheme: (props: string) => void;
};

export function ThemeButton(props: Props) {
  return (
    <>
      {props.colorTheme === 'light' ? (
        <button
          className={props.lightBtnClass}
          style={props.lightBtnStyles}
          onClick={() => props.setTheme('light')}
        >
          Change to Dark
        </button>
      ) : (
        <button
          className={props.darkBtnClass}
          style={props.darkBtnStyles}
          onClick={() => props.setTheme('dark')}
        >
          Change to Light
        </button>
      )}
    </>
  );
}
