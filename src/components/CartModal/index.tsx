import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss"
import { useContext } from "react";
import { ProductContext } from "../../providers/Context";

export const CartModal = () => {
    const { cartList, setIsOpen } = useContext(ProductContext)

   const total = cartList?.reduce((prevValue, product) => {
      return prevValue + Number(product.price);
   }, 0);

   return (
      <div className={styles.modalOverlay} role="dialog">
         <div className={styles.modalBox}>
            <div className={styles.modalHeader}>
               <h2>Carrinho de compras</h2>
               <button onClick={() => setIsOpen(false)} className={styles.closeButton} aria-label="close" title="Fechar">
                  <MdClose size={25} />
               </button>
            </div>
            <div>
               <ul className={styles.content}>
               {
                  cartList && cartList.length > 0 ?
                     cartList.map((product) => (
                        <CartItemCard key={product.id} product={product} />
                     )) : <p>Nenhum produto adicionado no carrinho.</p>
               }
               </ul>
            </div>
            <div className={styles.values}>
               <div>
                  <span className={styles.total}>Total:</span>
                  <span className={styles.value}>{(total ?? 0).toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button >Finalizar Compra</button>
            </div>
         </div>
      </div>
   );
};