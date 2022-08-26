import { CardProduct } from '../../components/CardProduct';

export function ProductList() {
    return (
        <div className="w-full container mx-auto pt-8">
            <h2 className="font-baloo text-[32px] font-extrabold">Nossos cafés</h2>
            <div className="flex flex-wrap items-start justify-start gap-8 mt-[54px]">
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>
        </div>
    );
}
