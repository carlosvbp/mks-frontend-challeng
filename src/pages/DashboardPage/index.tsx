import { Header } from "../../components/Header"
import { ProductList } from "../../components/ProductList"

export const DashboardPage = () => {
    return (
        <>
            <Header />
            <main>
                <ProductList />
            </main>
        </>
    )
}