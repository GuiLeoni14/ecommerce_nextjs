import { useMemo } from 'react';
import { CardBuyProduct } from '../../components/CardBuyProduct';
import { useCheckout } from '../../components/hooks/useCheckout';

export function BuyContent() {
    const { productsCheckout } = useCheckout();
    const fretePrice = productsCheckout.length * 2.5;
    const total = useMemo(() => {
        return productsCheckout.reduce((acc, product) => {
            return (acc += product.price);
        }, 0);
    }, [productsCheckout]);

    return (
        <div className="w-full p-10 bg-neutral-100 max-w-[448px] rounded-tr-[20px] rounded-bl-[20px]  rounded-br-[6px]">
            <div>
                {productsCheckout.map((product) => {
                    return (
                        <CardBuyProduct
                            key={product.id}
                            name={product.name}
                            imageUrl={product.image}
                            price={product.price}
                        />
                    );
                })}
            </div>
            <div className="flex flex-col w-full gap-3 mt-6">
                <span className="flex w-full justify-between items-center text-[14px]">
                    Total de itens <span>{productsCheckout.length}</span>
                </span>
                <span className="flex w-full justify-between items-center text-[14px]">
                    Entrega <span>R$ {fretePrice}</span>
                </span>
                <span className="flex w-full justify-between items-center text-[20px] font-extrabold ">
                    Total <span>R$ {total}</span>
                </span>
                <button className="w-full rounded bg-yellow-500 text-white uppercase text-[14px] py-3 font-bold mt-3">
                    Confirmar pedido
                </button>
            </div>
        </div>
    );
}
