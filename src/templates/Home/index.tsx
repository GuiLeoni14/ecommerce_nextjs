import Image from 'next/image';
import { Header } from '../../components/Header';
import { CardInfoCoffee } from './CardInfoCoffee';
import { ProductList } from './ProductList';

export function TemplateHome() {
    return (
        <>
            <Header />
            <main className="h-full w-full">
                <div className="container w-full flex items-center justify-between mx-auto h-[calc(100vh - 100px)]">
                    <div className="max-w-[588px]">
                        <h1 className="block text-5xl text-gray-700 leading-[130%] font-extrabold font-baloo">
                            Encontre o café perfeito para qualquer hora do dia
                        </h1>
                        <p className="text-[20px] leading-[130%] text-gray-500 mt-4">
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </p>
                        <div className="flex justify-start items-center flex-wrap gap-x-10 gap-y-5 mt-16">
                            <CardInfoCoffee iconUrl="/img/icons/icon_cart_coffee.svg" name="Compra simples e segura" />
                            <CardInfoCoffee iconUrl="/img/icons/icon_time.svg" name="Entrega rápida e rastreada" />
                            <CardInfoCoffee iconUrl="/img/icons/icon_cart_coffee.svg" name="Compra simples e segura" />
                            <CardInfoCoffee iconUrl="/img/icons/icon_time.svg" name="Entrega rápida e rastreada" />
                        </div>
                    </div>
                    <Image src="/img/banners/banner_home.png" width="476px" height="360px" />
                </div>
                <ProductList />
            </main>
        </>
    );
}
