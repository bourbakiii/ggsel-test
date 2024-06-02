import styles from './Button.module.scss'
import {FC, ReactNode} from 'react';
import classNames from "classnames";

export interface IButtonProps {
    children: ReactNode,
    className?: string
}

export const Button: FC<IButtonProps> = ({children, className = ''}) => {
    return (
        <button className={classNames(styles['button'], 'roboto-regular', className)}>
            {children}
        </button>
    );
};