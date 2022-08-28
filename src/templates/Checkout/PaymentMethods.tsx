import { PaymentCard } from './PaymentCard';

export function PaymentMethods() {
    return (
        <div className="flex flex-col p-10 bg-neutral-100 rounded">
            <div className="flex items-start gap-2">
                <img src="/img/icons/icon_buy.svg" />
                <span className="font-normal text-[16px] text-gray-500">
                    <strong className="block font-normal text-[16px] text-gray-800">Pagamento</strong>O pagamento é
                    feito na entrega. Escolha a forma que deseja pagar
                </span>
            </div>
            <div className="flex items-center justify-center gap-3 mt-[50px] w-full max-w-[640px]">
                <PaymentCard label="Cartão de crédito" iconUrl="/img/icons/icon_card.svg" />
                <PaymentCard label="Cartão de débito" iconUrl="/img/icons/icon_card.svg" />
                <PaymentCard label="Dinheiro" iconUrl="/img/icons/icon_card.svg" />
            </div>
        </div>
    );
}
