import { useEffect, useState } from 'react';
import seat from '../assets/Pilla_esta.jpg';
import hot from '../assets/hot.svg';
import hotTub from '../assets/hot-tub.svg';
import saveMoney from '../assets/save-money.svg';
import co2 from '../assets/co2.svg';
import banner from '../assets/banner.webp';
import '../css/banner.css'


export const BannerPhoto = () => {
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [loading, setLoading] = useState(true);

    const hour = new Date().getHours();

    useEffect(() => {
        let imageSrc;

        if (hour >= 6 && hour < 12) {
            imageSrc = banner;
        } else if (hour >= 12 && hour < 18) {
            imageSrc = banner;
        } else {
            imageSrc = banner;
        }

        setBackgroundImage(imageSrc);
        setLoading(false);
    }, [hour]);

    if (loading) {
        return <div>Loading...</div>; // or return null, or a loading spinner, etc.
    }

    if (!backgroundImage) {
        throw new Error("Background image not found");
    }

    return (
        <div className='banner-photo'>
            <img src={backgroundImage} alt="Banner" loading="lazy" className="banner-image" />
            <h1>¿Eres Friolero?</h1>
            <h1>Descrubre Warme!</h1>
        </div>
    )
}

export const BannerDesc = () => {
    return (
        <div>
            <flex className='banner-desc'>
                <div className='banner-desc-photo'>
                    <img src={seat} atl='Seat' />
                </div>
                <div className='banner-desc-info'>
                    <h2>La solución más <br />eficiente y sostenible,<br />con un mayor confort </h2>
                    <p>
                        Warme es una revolucion para ofrecer un mejor servicio en tu negocio, con nuestra tecnología de bajo voltaje y alimentación externa, diseñada específicamente para el sector hostelero, garantizando una experiencia cálida y acogedora en cualquier situación climática.
                    </p>
                </div>
            </flex>
            <flex className='banner-cartoon'>
                <div className='margin-up-down'>
                    <div className="icon-text">
                        <img src={hot} alt="Icon" />
                        Calor bajo demanda
                    </div>
                    <div className="icon-text">
                        <img src={hotTub} alt="Icon" />
                        Mayor eficiencia y confort
                    </div>
                    <div className="icon-text">
                        <img src={co2} alt="Icon" />
                        Menos emisiones de CO2
                    </div>
                    <div className="icon-text">
                        <img src={saveMoney} alt="Icon" />
                        Ahorro de energía y dinero
                    </div>
                </div>
                <div className='banner-cartoon-photo'>
                    helloworld<br></br>helloworld
                    helloworld<br></br>helloworld
                    helloworld<br></br>helloworld
                    helloworld<br></br>helloworld
                    helloworld<br></br>helloworld
                    helloworld<br></br>helloworld
                    helloworld<br></br>helloworld
                    helloworld<br></br>helloworld
                    helloworld<br></br>helloworld
                    helloworld<br></br>helloworld
                </div>
            </flex>
        </div>
    )
}