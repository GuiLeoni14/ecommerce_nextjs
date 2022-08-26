import { useContext } from 'react';
import { CheckoutContext } from '../../context/CheckoutContext';

export const useCheckout = () => {
    const { removeProductCheckout, addProductCheckout, productsCheckout } = useContext(CheckoutContext);
    return { removeProductCheckout, addProductCheckout, productsCheckout };
};
