import React from 'react';
import MainContainer from "../templates/mainContainer/mainContainer";
import serviceImg01 from "../commonImgs/ServicesImg01.png"
import serviceImg02 from "../commonImgs/ServicesImg02.png"
import serviceImg03 from "../commonImgs/ServicesImg03.png"
import serviceImg04 from "../commonImgs/ServicesImg04.png"
import serviceImg05 from "../commonImgs/ServicesImg05.png"
import serviceImg06 from "../commonImgs/ServicesImg06.png"
import serviceImg07 from "../commonImgs/ServicesImg07.png"
import serviceImg08 from "../commonImgs/ServicesImg08.png"
import styles from "../styles/servicesPage.module.scss"
import SectionCalculation from "../molecules/sectionCalculation/sectionCalculation";

const Services = () => {
    const services = [
        {
            id:1,
            img:serviceImg01,
            name: "Лазерная резка труб",
        },{
            id:2,
            img:serviceImg02,
            name: "Гибка листового металла",
        },{
            id:3,
            img:serviceImg03,
            name: "Запрессовка / приварка метизов",
        },{
            id:4,
            img:serviceImg04,
            name: "Контактная сварка",
        },{
            id:5,
            img:serviceImg05,
            name: "Лазерная резка металлов и сплавов",
        },{
            id:6,
            img:serviceImg06,
            name: "Производство корпусных изделий",
        },{
            id:7,
            img:serviceImg07,
            name: "Изделия из проволоки",
        },{
            id:8,
            img:serviceImg08,
            name: "Порошковая окраска",
        },
    ]
    return (
        <MainContainer>
            <div className={styles.services}>
                <h2 className={styles.services__title}>Услуги</h2>
                <p className={styles.services__description}>Наша компания также выполняет дополнительные виды услуг.
                <br /> Рассчитываются отдельно после предварительного заказа.</p>
                
                <div className={styles.servicesContainer}>
                    {services.map(item=>
                        <div className={styles.service} key={item.id}>
                            <img className={styles.service__image} src={item.img.src} alt="Фото услуги"/>
                            <h4 className={styles.service__name}>{item.name}</h4>
                        </div>
                    )}
                </div>
            </div>
            <SectionCalculation/>
        </MainContainer>
    );
};

export default Services;