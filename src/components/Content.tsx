import './Content.css';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../GraphQL';
import ProductCardContainer from './ProductCardContainer';
import Product from '../models/Product';


function Content() {
    const { loading, data } = useQuery(GET_PRODUCTS);
    if(loading) return (<div />);
    const products = data.getProducts;

    return (
        <section id="products-section">
            {
                products.map((product: any) => (
                    <ProductCardContainer
                        key={ product.id }
                        product={ new Product(product) }
                    />
                ))
            }
        </section>
    );
  }
  
  export default Content;  