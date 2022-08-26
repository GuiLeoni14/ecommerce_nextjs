import Image from 'next/image';
import Link from 'next/link';

export function Header() {
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
                        <Link href="/checkout/session/">
                            <a>
                                <img src="/img/icons/icon_cart.svg" />
                                <span className="absolute top-0 right-0 text-indigo-700 font-bold">0</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
