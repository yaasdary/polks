import React from 'react';
import {IStand} from "../../types/types";

import {NextPage} from "next";
import StandCard from "../../molecules/StandCard/StandCard";
import styles from "../../styles/standBlock.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

interface IStandsBlockProps {
    title:string;
    stands: IStand[];
}


const StandsBlock:NextPage<IStandsBlockProps> = ({title, stands}) => {


    return (
        <div className={styles.standsBlock}>
            <h3 className={styles.standsBlock__title}>{title}</h3>
            {/* начало копирования */}
            <Swiper style={{ width: '100%', height: '100%' }}
                spaceBetween={50}
                slidesPerView={4}
                
                breakpoints={{
                    1024: { slidesPerView: 4, spaceBetween: 7 },
                    768: { slidesPerView: 3, spaceBetween: 7 },
                    560: { slidesPerView: 3, spaceBetween: 5 },
                    375: { slidesPerView: 1, spaceBetween: 5 },
                    200: { slidesPerView: 1, spaceBetween: 4 },
                    1: { slidesPerView: 1, spaceBetween: 4 },
                  }}
                >
                    {/* подставить что отобразить, 10:27 - смотреть запись */}
                { [...stands ].map(item=> (
                    <SwiperSlide key={item.id}>
                        <StandCard stand={item}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* конец копирования */}
        </div>
    );
};

export default StandsBlock;