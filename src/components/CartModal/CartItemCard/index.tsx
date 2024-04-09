import { MdClose } from "react-icons/md";
import styles from "./style.module.scss"
import { Product } from "../../../interfaces/products.interface";
import { ProductContext } from "../../../providers/Context";
import { useContext } from "react";

interface ProductCardProps {
   product: Product;
}

export const CartItemCard = ({ product }: ProductCardProps) => {
   const { removeCart, addCart, decreaseCart } = useContext(ProductContext)

   console.log(typeof(product.count))
   return (
      <li className={styles.card}>
         <div className={styles.product}>
            <div className={styles.divImg}>
               <img src={product.photo} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <div className={styles.count}>
               <span>Qt:</span>
               <div className={styles.buttons}>
                  <button className={styles.button} onClick={() => decreaseCart(product)}> - </button>
                  <button className={styles.button}>{product.count}</button>
                  <button className={styles.button} onClick={() => addCart(product)}> + </button>
               </div>
            </div>
            <h3>{Number(product.count * product.price).toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</h3>
         </div>
         <button className={styles.buttonRemove} onClick={() => removeCart(product.id)} aria-label="delete" title="Remover item">
            <MdClose size={15} />
         </button>
      </li>
   );
};