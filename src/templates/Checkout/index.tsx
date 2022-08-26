import { Header } from '../../components/Header';
import { AddressContent } from './AddressContent';

export function CheckoutTemplate() {
    return (
        <>
            <Header />
            <main className="w-full">
                <div className="container mx-auto flex items-center justify-between w-full">
                    <AddressContent />
                </div>
            </main>
        </>
    );
}
