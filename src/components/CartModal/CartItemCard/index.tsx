import { MdClose } from "react-icons/md";
import styles from "./style.module.scss"
import { Product } from "../../../interfaces/products.interface";
import { ProductContext } from "../../../providers/Context";
import { useContext } from "react";

interface ProductCardProps {
   product: Product;
}

export const CartItemCard = ({ product }: ProductCardProps) => {
   const { removeCart } = useContext(ProductContext)

   /* const addProduct = () => {
      const existingProductIndex = cartList.findIndex((item) => item.id === product.id);

      if (existingProductIndex !== -1) {

         const updatedCartList = [...cartList];
         updatedCartList[existingProductIndex].count++; 

         setCartList(updatedCartList);
      } else {
         addCart(product);
      }
   }; */

   return (
      <li className={styles.card}>
         <div className={styles.product}>
            <div className={styles.divImg}>
               <img src={product.photo} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <div>
               <span>Qt:</span>
               {/* <div>
                  <button> - </button>
                  <h3>{product.count}</h3>
                  <button> + </button>
               </div> */}
            </div>
            <h3>{Number(product.price).toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</h3>
         </div>
         <button onClick={() => removeCart(product.id)} aria-label="delete" title="Remover item">
            <MdClose size={15} />
         </button>
      </li>
   );
};