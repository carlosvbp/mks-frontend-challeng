import { MdClose } from "react-icons/md";
import styles from "./style.module.scss"
import { Product } from "../../../interfaces/products.interface";
import { ProductContext } from "../../../providers/Context";
import { useContext } from "react";

interface ProductCardProps {
    product: Product;
}

export const CartItemCard = ( {product}: ProductCardProps ) => {
    const { removeCart } = useContext(ProductContext)

   return (
      <li className={styles.card}>
         <div className={styles.product}>
            <div className={styles.divImg}>
               <img src={product.photo} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <h3>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</h3>
         </div>
         <button onClick={() => removeCart(product.id)} aria-label="delete" title="Remover item">
               <MdClose size={15} />
            </button>
      </li>
   );
};