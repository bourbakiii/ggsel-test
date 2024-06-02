import styles from './Button.module.scss'
import {FC, ReactNode} from 'react';
import classNames from "classnames";

export interface IButtonProps {
    children: ReactNode
}

export const Button: FC<IButtonProps> = ({children}) => {
    return (
        <button className={classNames(styles['button'], 'roboto-regular')}>
            {children}
        </button>
    );
};