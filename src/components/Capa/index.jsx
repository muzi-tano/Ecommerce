import './Capa.css';
import banner from '../../assets/banner.png';
import bannerMobile from '../../assets/banner_mobile.jpg';

export default function Capa() {
    return(
        <section className='secao_capa'
            style={{ backgroundImage: `url(${banner})`
         }}>
         <div className='texto'>
            <h2>ROBUX PRÁTICAMENTE DE GRAÇA!</h2>
            <h1>COMPRE JÁ!</h1>
             <button className='btn'>Comprar</button>
         </div>

            </section>
    )
}