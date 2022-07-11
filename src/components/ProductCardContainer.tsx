import { useState } from 'react';
import ProductModal from './ProductModal';
import ProductCard from './ProductCard';

function ProductCardContainer(props: any) {
    const { product } = props;
    const [showDetailed, setShowDetailed] = useState(false); 

    function handleClick() {
        setShowDetailed(!showDetailed);
    }

    return (
        <>
            {
                showDetailed && (
                    <ProductModal
                        product={ product }
                        onClick={ handleClick }
                    />
                )
            }
            
            <ProductCard
                product={ product }
                onClick={ handleClick }
            />
        </>
    )
}

export default ProductCardContainer;