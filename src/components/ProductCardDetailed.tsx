import React from 'react';
import './ProductCardDetailed.css';

function ProductCardDetailed(props: any) {
    const { product } = props;

    return (
        <div className='fullscreen-container'>
            <div className='product-card-detailed-container'>
                <div className='product-card-detailed'>
                    <div className='product-card-detailed-close' onClick={ props.onClick }>
                        <button className='card-detailed-close-btn'><i className="fa-solid fa-xmark"></i></button>
                    </div>

                    <div className='product-card-detailed-side'>
                        <div className='p-detailed-side-img'>
                            <img src='https://at.cat-ret.assets.lidl/catalog5media/at/article/11070718/gallery/overlay/lg/11070718.jpg' />
                        </div>
                        <div className='p-detailed-side-description'>
                            <h3>Produktbeschreibung:</h3>
                            <p className='p-detailed-card--description'>{ product.description }</p>
                        </div>
                    </div>

                    <div className='product-card-detailed-body'>
                        <div className='p-detailed-body-title'>
                            <img src="https://www.vinyl-music.at/wp-content/uploads/2017/06/Stiegl_Logo_Wappen_4cneu.jpg" />
                            <div>
                                <h1 className='p-detailed-card--brand'>{ product.brand }</h1>
                                <h2 className='p-detailed-card--name'>{ product.name }</h2>
                            </div>
                        </div>
                        <div className='p-detailed-body-content'>
                            
                        </div>
                        <div className='p-detailed-body-footer'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductCardDetailed;