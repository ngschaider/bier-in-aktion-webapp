import Product from '../models/Product';
import './ProductCard.css';

type ProductCardProps = {
    product: Product;
    onClick: () => void;
}

const ProductCard = (props: ProductCardProps) => {
    const { product } = props;

    return (
        <div className='product-card'>
            <div className='product-card-show-more' onClick={ props.onClick }>
                <button className='show-more-btn'><i className="fa-solid fa-ellipsis-vertical" /></button>
            </div>
            <div className='product-card-side'>
                <div className='product-side-image'>
                    <img src='https://at.cat-ret.assets.lidl/catalog5media/at/article/11070718/gallery/overlay/lg/11070718.jpg' alt={product.brand + " " + product.name} />
                </div>
                <div className='product-side-prices'>
                    <div>
                        <span className='product-card--original-price'>€{ product.originalPrice } » </span>
                        <span className='product-card--discount-price'>€{ product.discountPrice }</span>
                    </div>
                    <p className='product-card--discount-percent' style={{ backgroundColor: product.discountColor }}>-{ product.discountPercentage }%</p>
                </div>
            </div>

            <div className='product-card-body'>
                <div className='body-title'>
                    <span className='product-card--title'>{ product.brand } { product.name }</span>
                </div>
                <div className='body-supermarket'>
                    <p className='product-card--supermarket'>{ product.market.name }</p>
                </div>
                <div className='body-additional'>
                    <p className='product-card--additional'>{ product.additionalInfo }</p>
                </div>
                <div className='body-availability'>
                    <p className='product-card--availability'>{ product.availability }</p>
                </div>
            </div>
        </div>
    );
  }
  
  export default ProductCard;  