import {FC} from 'react';
import styles from "./Color.module.scss"
import {IColor} from "../../../server/types/types";

interface IColorProps {
    color: IColor
}

export const Color:FC<IColorProps> = ({color}) => {
    return (
        <div className={styles.Color} style={{backgroundColor: `${color.color} `}}>

        </div>
    );
};
