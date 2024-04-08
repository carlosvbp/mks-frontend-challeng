import { useContext } from "react";
import styles from "./style.module.scss"
import { ProductContext } from "../../providers/Context";

export const ProductList = () => {
    const { addCart, productsFilter } = useContext(ProductContext)
   return (
      <ul className={styles.content}>
         {productsFilter.map((product) => (
            <ProductCard key={product.id} product={product} 
            addCart={addCart}/>
         ))}
      </ul>
   );
};