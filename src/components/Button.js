import React from 'react';
import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

function Button({ children, variant = 'primary' }) {
  return (
    <button
      className={getClasses([
        styles.button,
        // eslint-disable-next-line no-template-curly-in-string
        styles[`button--${buttonTypes[variant]}`],
      ])}
      type="button"
    >
      {children}
    </button>
  );
}
function SelectButton({ children, ...rest }) {
  return (
    <select
      className={getClasses([styles.button, styles.button__select])}
      {...rest}
    >
      {children}
    </select>
  );
}

export { SelectButton };
export default Button;
