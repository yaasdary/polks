import {FC} from 'react';
import styles from "./colorChoose.module.scss"
import {IColor} from "../../../server/types/types";
import {Color} from "../../atoms/Color/Color";

interface IColorChooseProps {
    className?: string
    colors: IColor[];
}

export const ColorChoose:FC<IColorChooseProps> = ({className, colors}) => {
    console.log(colors)
    return (
        <div className={styles.ColorChoose}>
            {colors.map((item)=>
                <Color key={item.id} color={item}/>
            )}
        </div>
    );
};
