export function CardProduct() {
    return (
        <div className="flex flex-col items-center w-full max-w-[256px] bg-neutral-100 rounded-tl-[6px] rounded-tr-[20px] rounded-bl-[20px]  rounded-br-[6px] pb-5">
            <img src="/img/coffees/coffee_one.png" className="mt-[-20px]" />
            <div className="flex flex-wrap gap-1 mt-3">
                <span className="inline-block px-2 text-yellow-600 bg-yellow-200 leading-[21px] rounded-full uppercase text-[10px] font-bold">
                    Tradicional
                </span>
            </div>
            <strong className="block text-gray-700 text-[20px] mt-5 mb-2 font-baloo">Expresso Tradicional</strong>
            <span className="block text-center text-gray-400 text-[14px] w-full max-w-[216px]">
                O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="flex justify-center items-center gap-9 mt-[33px]">
                <span className="text-[14px]">
                    R$ <strong className="text-[24px] font-extrabold font-baloo">9,90</strong>
                </span>
                <div className="flex items-center  gap-2">
                    <input
                        type="number"
                        className="max-w-[72px] text-gray-600 h-[38px] bg-stone-200 outline-none text-center rounded-md font-bold"
                    />
                    <img src="/img/icons/icon_cart_purple.svg" />
                </div>
            </div>
        </div>
    );
}
