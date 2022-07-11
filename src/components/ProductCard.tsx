import './ProductCard.css';
import Product from '../models/Product';

type ProductCardProps = {
    product: Product;
    onClick: () => void;
}

const ProductCard = (props: ProductCardProps) => {
    const { product } = props;

    return (
        <div className='product-card py-5 relative rounded-lg flex flex-row hover:scale-105'>
            <div className='product-card-show-more absolute top-6 right-6 hover:scale-120' onClick={ props.onClick }>
                <button className='show-more-btn bg-transparent'><i className="fa-solid fa-ellipsis-vertical" /></button>
            </div>
            <div className='product-card-side flex flex-col justify-center items-center'>
                <div className='product-side-image'>
                    <img className='max-h-full max-w-full' src='https://at.cat-ret.assets.lidl/catalog5media/at/article/11070718/gallery/overlay/lg/11070718.jpg' alt={product.brand + " " + product.name} />
                </div>
                <div className='product-side-prices flex flex-col justify-center items-center overflow-auto justify-center items-center overflow-auto'>
                    <div className='pb-1'>
                        <span className='product-card--original-price'>€{ product.originalPrice } » </span>
                        <span className='product-card--discount-price font-bold'>€{ product.discountPrice }</span>
                    </div>
                    <p className='product-card--discount-percent rounded-lg py-0.5 px-2' style={{ backgroundColor: product.discountColor }}>-{ product.discountPercentage }%</p>
                </div>
            </div>

            <div className='product-card-body pl-3 flex flex-col justify-between'>
                <div className='body-title font-bold whitespace-nowrap text-ellipsis overflow-hidden'>
                    <span className='product-card--title'>{ product.brand } { product.name }</span>
                </div>
                <div className='body-supermarket'>
                    <p className='product-card--supermarket'>{ product.market.name }</p>
                </div>
                <div className='body-additional whitespace-nowrap text-ellipsis overflow-hidden'>
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