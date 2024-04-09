import { useContext } from "react"
import { CartModal } from "../../components/CartModal"
import { Header } from "../../components/Header"
import { ProductList } from "../../components/ProductList"
import { ProductContext } from "../../providers/Context"

export const DashboardPage = () => {
    const { isOpen } = useContext(ProductContext)
    return (
        <>
            <Header />
            <main>
                <ProductList />
                {
                    isOpen ? < CartModal /> : null
                }
            </main>
        </>
    )
}