/**@jsx jsx */
import { jsx, css } from "@emotion/core"; //babel 기능

type ButtonProps = {
  children: React.ReactNode; //children type
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void; //? :: 생략가능
  theme: "primary" | "secondary" | "tertiary"; //| :: 이 중에 하나여야 한다.
  size: "small" | "medium" | "big";
  disabled?: boolean;
};

const Button = ({ children, onClick, theme, size, disabled }) => {
  return (
    <button
      css={[style, themes[theme], sizes[size]]}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: "primary",
  size: "medium"
};

const style = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0 1rem;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:disabled {
    cursor: not-allowed;
  }
`;

const themes = {
  primary: css`
    background: #20c997;
    color: white;
    &:hover:enabled {
      background: #38d9a9;
    }
    &:active:enabled {
      background: #12b886;
    }
    &:disabled {
      background: #aed9cc;
    }
  `,
  secondary: css`
    background: #e9ecef;
    color: #343a40;
    &:hover:enabled {
      background: #f1f3f5;
    }
    &:active:enabled {
      background: #dee2e6;
    }
    &:disabled {
      color: #c6d3e1;
    }
  `,
  tertiary: css`
    background: none;
    color: #20c997;
    &:hover:enabled {
      background: #e6fcf5;
    }
    &:active:enabled {
      background: #c3fae8;
    }
    &:disabled {
      color: #bcd9d0;
    }
  `
};

const sizes = {
  small: css`
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0 0.875rem;
  `,
  medium: css`
    height: 2.5rem;
    font-size: 1rem;
    padding: 0 1rem;
  `,
  big: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `
};

export default Button;
