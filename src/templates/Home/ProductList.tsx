import { useEffect, useState } from 'react';
import { CardProduct } from '../../components/CardProduct';
import { api } from '../../services/api';

type ProductData = {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

export function ProductList() {
    const [products, setProducts] = useState<ProductData[]>([]);
    useEffect(() => {
        api.get<ProductData[]>('/products').then((response) => {
            setProducts(response.data);
        });
    }, []);
    return (
        <div className="w-full container mx-auto pt-8">
            <h2 className="font-baloo text-[32px] font-extrabold">Nossos cafés</h2>
            <div className="flex flex-wrap items-start justify-start gap-8 mt-[54px]">
                {products.map((product) => {
                    return <CardProduct key={product.id} {...product} />;
                })}
            </div>
        </div>
    );
}
