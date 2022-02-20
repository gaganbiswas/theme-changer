import React from 'react';

type Props = {
  btnText: string;
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
          className={props.darkBtnClass}
          style={props.darkBtnStyles}
          onClick={() => props.setTheme('light')}
        >
          {(props.btnText && props.btnText) || 'Change to Light'}
        </button>
      ) : (
        <button
          className={props.lightBtnClass}
          style={props.lightBtnStyles}
          onClick={() => props.setTheme('dark')}
        >
          {(props.btnText && props.btnText) || 'Change to Dark'}
        </button>
      )}
    </>
  );
}
