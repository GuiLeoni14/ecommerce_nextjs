import { Header } from '../../components/Header';
import { AddressContent } from './AddressContent';
import { BuyContent } from './BuyContent';
import { PaymentMethods } from './PaymentMethods';

export function CheckoutTemplate() {
    return (
        <>
            <Header />
            <main className="w-full">
                <div className="container mx-auto flex items-center justify-between w-full">
                    <div className="flex flex-col gap-3">
                        <AddressContent />
                        <PaymentMethods />
                    </div>
                    <BuyContent />
                </div>
            </main>
        </>
    );
}
