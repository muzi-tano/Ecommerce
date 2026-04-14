import "./Produtos.css";
import bolsa from '../../assets/bolsa.png'
import banner from '../../assets/banner_mobile.jpg'
import sandalia1 from '../../assets/sandalia1.png'
import sandalia2 from '../../assets/sandalia2.png'
import tamanco from '../../assets/tamanco.png'
import tenis from '../../assets/tenis.png'

export default function Produtos() {
    return (
        <section className='produtos'>
            <div className='titulos'>
                <h2>Produtos</h2>
                <p>
                    Conheça nossos robux e compre roupinhas, gamepass, robux e muito mais! 
                    Temos os melhores preços do mercado, não perca essa oportunidade de comprar robux barato e com segurança.
                </p>
            </div>

            <div className='produtos_grid'>

                <div className='card'>
                    <div className='card-image'>
                        <img src={sandalia1} alt='Skin 1'/>
                        <span className='badge-venda'>Mais vendidos</span>
                    </div>
                    <div className='card-info'>
                        <h3>Skin AURA!!!!</h3>
                        <p className='preco'>R$ 255,99</p>
                        <button className='btn'>Comprar agora</button>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-image'>
                        <img src={sandalia2} alt='Skin 2'/>
                        <span className='badge-venda'>Destaque</span>
                    </div>
                    <div className='card-info'>
                        <h3>Skin Feminina</h3>
                        <p className='preco'>R$ 350,00</p>
                        <button className='btn'>Comprar agora</button>
                    </div>
                </div>

                                <div className='card'>
                    <div className='card-image'>
                        <img src={tamanco} alt='Skin 2'/>
                        <span className='badge-venda'>Destaque</span>
                    </div>
                    <div className='card-info'>
                        <h3>1000 Robux Baratinho</h3>
                        <p className='preco'>R$ 57,50</p>
                        <button className='btn'>Comprar agora</button>
                    </div>

                    
                </div>
            </div> 
        </section>
    );
}