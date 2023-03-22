import { FC, PropsWithChildren } from 'react';
import classes from './Button.module.scss';

interface Props {
  className?: string | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={`${classes.button} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
