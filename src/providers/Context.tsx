import { ReactNode, createContext, useEffect, useState } from "react";
import { productApi } from "../services/api";
import { toast } from "react-toastify";
import { Product } from "../interfaces/products.interface";

interface ProductProviderProps {
    children: ReactNode
}

export interface ProductContextValues {
    cartList: Product[] | null
    setSearch: React.Dispatch<React.SetStateAction<string>>
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    productsFilter: Product[]
    addCart: (addingcart: Product) => void
    removeCart: (cartId: number) => void
    isOpen: boolean
}

export const ProductContext = createContext<ProductContextValues>({} as ProductContextValues)

export const ProductProvider = ({children}: ProductProviderProps) => {
    const localStorageCartList = localStorage.getItem("@CARTLIST")

    const [productList, setProductList] = useState([]);
    const [cartList, setCartList] = useState(
        localStorageCartList ? JSON.parse(localStorageCartList) : []);
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("")

    useEffect(() => {
        const timeOut = setTimeout(() => {
            const getProduct = async () => {
                try {
                    const { data } = await productApi.get("/products?page=1&rows=15&sortBy=id&orderBy=DESC");
                    setProductList(data.products)
                    console.log(data)
                } catch (error) {
                    console.log(error)
                }
            }
            getProduct()
        })
        return () => {
            clearTimeout(timeOut)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("@CARTLIST", JSON.stringify(cartList))
    }, [cartList])

    const addCart = (addingcart: Product) => {
        if (!cartList.some((cart: Product) => cart.id !== addingcart.id)) {
            setCartList([...cartList, addingcart]);
            toast.success("Produto adicionado no carrinho com sucesso!");
        } else {
            toast.warning("Ops, produto já foi adicionado no carrinho!");
        }
    }

    const removeCart = (cartId: number) => {
        const newCartList = cartList.filter((cart: Product) => cart.id !== cartId);
        setCartList(newCartList);
        toast.success("Produto removido do carrinho com sucesso!");
    }

    const productsFilter = productList.filter((product: Product) => product.name.toUpperCase().includes(search.toUpperCase()))


    return (
        <>
            <ProductContext.Provider value={
                {
                    cartList,
                    setSearch,
                    setIsOpen,
                    productsFilter,
                    addCart,
                    removeCart,
                    isOpen
                }
            }>
                {children}
            </ProductContext.Provider>
        </>
    )
}