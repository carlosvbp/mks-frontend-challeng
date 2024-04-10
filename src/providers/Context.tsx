import { ReactNode, createContext, useEffect, useState } from "react";
import { productApi } from "../services/api";
import { Product } from "../interfaces/products.interface";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

interface ProductProviderProps {
    children: ReactNode
}

export interface ProductContextValues {
    cartList: Product[] | null
    setSearch: React.Dispatch<React.SetStateAction<string>>
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    productsFilter: Product[]
    addCart: (product: Product) => void
    decreaseCart: (product: Product) => void
    removeCart: (cartId: number) => void
    isOpen: boolean
}

export const ProductContext = createContext<ProductContextValues>({} as ProductContextValues)

export const ProductProvider = ({ children }: ProductProviderProps) => {
    const localStorageCartList = localStorage.getItem("@CARTLIST")

    const { data: productList, isLoading } = useQuery({
        queryKey: ["products"], queryFn: async () => {
            const { data } = await productApi.get("/products?page=1&rows=15&sortBy=id&orderBy=DESC");
            return data;
        }
    })
    console.log(productList)

    const [cartList, setCartList] = useState(
        localStorageCartList ? JSON.parse(localStorageCartList) : []);
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("")

    useEffect(() => {
        localStorage.setItem("@CARTLIST", JSON.stringify(cartList))
    }, [cartList])


    const addCart = (product: Product) => {
        const exist: Product | undefined = cartList.find(
            (element: Product) => element.id === product.id
        )
        toast.success("Produto adicionado no carrinho!")
        if (exist) {
            setCartList(
                cartList.map((element: Product) =>
                    element.id === product.id
                        ? { ...exist, count: exist.count + 1 }
                        : element)
            )
        }
        else {
            setCartList([...cartList, { ...product, count: 1 }])
        }
    }

    const decreaseCart = (product: Product) => {
        const exist = cartList.find(
            (element: Product) => element.id === product.id
        ) as Product
        if (exist.count === 1) {
            setCartList(
                cartList.filter((element: Product) => element.id !== product.id
                )
            )
        } else {
            setCartList(
                cartList.map((element: Product) =>
                    element.id === product.id
                        ? { ...exist, count: exist.count - 1 }
                        : element
                )
            )
        }
    }

    const removeCart = (cartId: number) => {
        const newCartList = cartList.filter((cart: Product) => cart.id !== cartId);
        setCartList(newCartList);
    }
    
    const productsFilter = productList?.products?.filter((product: Product) => product.name.toUpperCase().includes(search.toUpperCase()))


    return (
        <>
            {
                isLoading ?
                    <div>Carregando...</div> :
                    (
                        <ProductContext.Provider value={
                            {
                                cartList,
                                setSearch,
                                setIsOpen,
                                productsFilter,
                                addCart,
                                decreaseCart,
                                removeCart,
                                isOpen
                            }
                        }>
                            {children}
                        </ProductContext.Provider>
                    )
            }
        </>
    )
}