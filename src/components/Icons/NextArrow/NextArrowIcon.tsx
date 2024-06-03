import styles from './NextArrowIcon.module.scss'
import { FC } from 'react';
import classNames from "classnames";
export interface INextArrowIconProps {
    className?: string
}
export const NextArrowIcon:FC<INextArrowIconProps> = ({className}) => {
 return (
         <svg className={classNames(styles['next-arrow-icon'], className)} viewBox="0 0 93 40" xmlns="http://www.w3.org/2000/svg">
             <path
                 d="M9.50488 13.8154C9.50488 13.8154 14.1679 27.8986 39.3049 27.5796C64.4419 27.2606 80.1479 13.8154 80.1479 13.8154"
                 stroke="white" strokeWidth="4" strokeLinecap="round"/>
             <path d="M79.0699 26.0272L81.3764 13.2518L68.0225 10.6934" stroke="white" stroke-width="4"
                   strokeLinecap="round" strokeLinejoin="round"/>
         </svg>
 );
};