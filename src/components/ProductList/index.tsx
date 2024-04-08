import { useContext } from "react";
import styles from "./style.module.scss"
import { ProductContext } from "../../providers/Context";
import { Product } from "../../interfaces/products.interface";

export const ProductList = () => {
    const { addCart, productsFilter } = useContext(ProductContext)
   return (
      <ul className={styles.content}>
         {productsFilter.map((product: Product) => (
            <ProductCard key={product.id} product={product} 
            addCart={addCart}/>
         ))}
      </ul>
   );
};