import styles from './Card.module.scss'
import {FC} from 'react';
import classNames from "classnames";
import {NextArrowIcon} from "@/components/Icons/NextArrow/NextArrowIcon.tsx";

export interface ICardProps {
    variant?: 'blue' | 'purple' | 'green';
    number: number;
    text: string;
    image: string;
    withArrow?: boolean;
}

export const Card: FC<ICardProps> = ({
                                         number,
                                         variant = 'blue',
                                         text,
                                         image,
                                         withArrow = false
                                     }) => {
    return (
        <div className={classNames(styles[`card`], styles[`card--${variant}`], 'roboto-bold')}>
            <div className={classNames(styles['card-header'])}>
                <div className={styles['card-number']}>{number}</div>
                <span className={classNames(styles['card-text'], 'roboto-bold')}
                      dangerouslySetInnerHTML={{__html: text}}/>
            </div>
            <img className={classNames(styles['card-image'])} src={image} alt={`Step ${number}`}/>
            {withArrow && <NextArrowIcon className={classNames(styles['card-arrow'])}/>}
        </div>
    );
};