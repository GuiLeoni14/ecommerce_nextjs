import { ChangeEvent, useEffect, useState } from 'react';
import { useCheckout } from '../hooks/useCheckout';

type CardProductProps = {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

export function CardProduct(props: CardProductProps) {
    const [inputQuantity, setInputQuantity] = useState(0);
    const { addProductCheckout } = useCheckout();
    const handleClickBuyProduct = () => {
        if (inputQuantity < 1) return;
        const buyProduct = {
            ...props,
            quant: Number(inputQuantity),
        };
        addProductCheckout(buyProduct);
    };

    return (
        <div className="flex flex-col items-center w-full max-w-[256px] bg-neutral-100 rounded-tl-[6px] rounded-tr-[20px] rounded-bl-[20px]  rounded-br-[6px] pb-5">
            <div className="max-w-[220px] w-full h-40 max-h-40 mt-[-20px] overflow-hidden ">
                <img src={props.image} className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-wrap gap-1 mt-3">
                <span className="inline-block px-2 text-yellow-600 bg-yellow-200 leading-[21px] rounded-full uppercase text-[10px] font-bold">
                    {props.category}
                </span>
            </div>
            <strong className="block text-gray-700 text-[20px] mt-5 mb-2 font-baloo">{props.name}</strong>
            <span className="block text-center text-gray-400 text-[14px] w-full max-w-[216px] max-h-[36px] text-ellipsis overflow-hidden">
                {props.description}
            </span>
            <div className="flex justify-center items-center gap-9 mt-[33px]">
                <span className="text-[14px]">
                    R$ <strong className="text-[24px] font-extrabold font-baloo">{props.price}</strong>
                </span>
                <div className="flex items-center  gap-2">
                    <input
                        type="number"
                        defaultValue={0}
                        min="1"
                        className="max-w-[72px] text-gray-600 h-[38px] bg-stone-200 outline-none text-center rounded-md font-bold"
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            setInputQuantity(Number(event.target.value))
                        }
                    />
                    <img src="/img/icons/icon_cart_purple.svg" onClick={handleClickBuyProduct} />
                </div>
            </div>
        </div>
    );
}
