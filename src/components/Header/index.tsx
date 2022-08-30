import Image from 'next/image';
import Link from 'next/link';
import { useCheckout } from '../hooks/useCheckout';

export function Header() {
    const { productsCheckout } = useCheckout();
    const numberForAllProductCheckout = productsCheckout.length;
    return (
        <header className="h-[104px] flex items-center justify-center">
            <div className="container flex justify-between items-center w-full mx-auto">
                <Image src="/logo.svg" width="84px" height="40px" />
                <div className="flex justify-center gap-5">
                    <div className="flex items-center py-2 bg-purple-200 px-2 rounded">
                        <img src="/img/icons/icon_locale.svg" />
                        <span className="ml-1">Porto Alegre, RS</span>
                    </div>
                    <div className="relative">
                        <Link href="/checkout">
                            <a>
                                <img src="/img/icons/icon_cart.svg" />
                                <span className="absolute top-[-10px] right-[-5px] w-5 h-5 flex tex-[12px] items-center justify-center bg-yellow-600 rounded-full text-white font-bold">
                                    {numberForAllProductCheckout}
                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
