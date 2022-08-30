interface CardBuyProductProps {
    name: string;
    imageUrl: string;
    price: number;
}
export function CardBuyProduct({ name, imageUrl, price }: CardBuyProductProps) {
    return (
        <div className="flex w-full justify-between">
            <img src={imageUrl} className="max-w-[64px]" />
            <div className="flex flex-col mt-5">
                <span>{name}</span>
                <div className="flex gap-2">
                    <input className="max-w-[72px] text-gray-600 h-[38px] bg-stone-200 outline-none text-center rounded-md font-bold" />
                    <span>remover</span>
                </div>
            </div>
            <strong>R$ {price}</strong>
        </div>
    );
}
