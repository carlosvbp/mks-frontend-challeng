import { useContext } from "react";
import styles from "./style.module.scss"
import { ProductContext } from "../../providers/Context";
import { Product } from "../../interfaces/products.interface";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
    const { productsFilter, addCart } = useContext(ProductContext)
    
    return (
        <ul className={styles.content}>
            {productsFilter.length > 0 ? (
                productsFilter.map((product: Product) => (
                    <ProductCard key={product.id} product={product}
                    addCart={addCart} />
                ))
            ) : null}
        </ul>
    );
};