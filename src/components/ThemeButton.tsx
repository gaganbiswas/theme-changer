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

export function ThemeButton(props: Props) {
  return (
    <>
      {props.colorTheme === 'light' ? (
        <button
          className={props.darkBtnClass}
          style={props.darkBtnStyles}
          onClick={() => props.setTheme('light')}
        >
          {(props.lightBtnText && props.lightBtnText) || 'Change to Light'}
        </button>
      ) : (
        <button
          className={props.lightBtnClass}
          style={props.lightBtnStyles}
          onClick={() => props.setTheme('dark')}
        >
          {(props.darkBtnText && props.darkBtnText) || 'Change to Dark'}
        </button>
      )}
    </>
  );
}
