import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss"
import { useContext } from "react";
import { ProductContext } from "../../providers/Context";

export const Header = () => {
   const { setIsOpen, cartList, setSearch } = useContext(ProductContext)
   const handleSearch = (event: any) => {
      setSearch(event.target.value)
   }
   console.log(cartList )
   return (
      <header className={styles.header}>
         <div>
            <div className={styles.title}>
               <h1>MKS <span>Sistemas</span></h1>
               <div className={styles.cart}>
                  <button onClick={() => setIsOpen(true)}>
                     <MdShoppingCart size={28} />
                     <span>{cartList?.length}</span>
                  </button>
               </div>
            </div>
            <form>
               <input
                  onChange={(event) => handleSearch(event)}
                  type="text"
                  placeholder=" Digitar Pesquisa"
               />
               <button type="submit">
                  <MdSearch size={21} color="black"/>
               </button>
            </form>
         </div>
      </header>
   );
};