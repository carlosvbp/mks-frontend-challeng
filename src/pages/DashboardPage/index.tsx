import { useContext } from "react"
import { CartModal } from "../../components/CartModal"
import { Header } from "../../components/Header"
import styles from "./style.module.scss"
import { ProductList } from "../../components/ProductList"
import { ProductContext } from "../../providers/Context"
import { Footer } from "../../components/Footer"

export const DashboardPage = () => {
    const { isOpen } = useContext(ProductContext)
    return (
        <>
            <Header />
            <main className={styles.main}>
                <ProductList />
                {
                    isOpen ? < CartModal /> : null
                }
                <Footer/>
            </main>
        </>
    )
}