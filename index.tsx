import React from 'react';
import styles from './styles.css';
import { SliderLayout } from 'vtex.slider-layout';
interface SliderCorporativoItem{
    title: string,
    href: string,
    img: string
}

interface SliderCorporativoProps{
    itens: SliderCorporativoItem[],
    sliderConfig: any
}

const SliderCorporativo = ({
    itens,
    sliderConfig
}: SliderCorporativoProps) => {
    const arrays = [] 
    for (let i = 0; i < itens.length; i += 4)
        arrays.push(itens.slice(i, i + 4));

    return (
        <div className={styles.SliderCorporativoWrapper}>
        
            <SliderLayout {...sliderConfig}>
                {arrays.map((cluster, index) => {
                    
                    return(
                        <div key={index} className={styles.SliderCorporativoItemContainer}>
                            {
                                cluster.map((item: SliderCorporativoItem, index) => {
                                    return(
                                        <a key={index} href={item.href} className={styles.SliderCorporativoItem}>
                                            <img src={item.img} className={styles.SliderCorporativoItemImg} />
                                            <h1 className={styles.SliderCorporativoItemTitle}>{item.title}</h1>
                                        </a>
                                    )
                                })
                            }
                            </div>
                    )

                })}
            </SliderLayout>
        
        </div>
    );
}

export default SliderCorporativo;