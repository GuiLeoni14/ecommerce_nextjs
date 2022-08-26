import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';

type ProductsCheckoutProps = {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
    quant: number;
};
type CheckoutContextData = {
    productsCheckout: ProductsCheckoutProps[];
    addProductCheckout: (product: ProductsCheckoutProps) => void;
    removeProductCheckout: (id: number) => void;
};

export const CheckoutContext = createContext({} as CheckoutContextData);

export function CheckoutProvider({ children }: { children: ReactNode }) {
    const [productsCheckout, setProductsCheckout] = useState([] as ProductsCheckoutProps[]);

    const addProductCheckout = useCallback(
        (product: ProductsCheckoutProps) => {
            const afterProducts = productsCheckout.filter((productCheckout) => productCheckout.id !== product.id);
            const newsProduct = [...afterProducts, product];
            setProductsCheckout(newsProduct);
        },
        [productsCheckout],
    );

    const removeProductCheckout = useCallback(
        (id: number) => {
            const newsProduct = productsCheckout.filter((productCheckout) => productCheckout.id !== id);
            setProductsCheckout(newsProduct);
        },
        [productsCheckout],
    );

    useEffect(() => {
        console.log(productsCheckout);
    }, [productsCheckout]);
    return (
        <CheckoutContext.Provider value={{ productsCheckout, addProductCheckout, removeProductCheckout }}>
            {children}
        </CheckoutContext.Provider>
    );
}
