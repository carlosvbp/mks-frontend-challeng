import { useContext } from "react"
import { ProductContext } from "../../../providers/Context"
import styles from "./style.module.scss"
import { Product } from "../../../interfaces/products.interface"

interface ProductCardProps {
    product: Product;
}

export const ProductCard = ({product}: ProductCardProps) => {
    const { addCart } = useContext(ProductContext)
    return (
        <li className={styles.card}>
            <div className={styles.divImg}>
                <img src={product.photo} alt={product.name} />
            </div>
            <div>
                <div className={styles.subTitle}>
                    <h3>{product.name}</h3>
                    <span className={styles.price}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                </div>
                <span className={styles.category}>{product.description}</span>
            </div>
            <button onClick={() => addCart(product)}>Comprar</button>
        </li>
    )
}