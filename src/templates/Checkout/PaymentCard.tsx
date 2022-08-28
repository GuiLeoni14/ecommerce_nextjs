import { ElementType, FC } from 'react';

interface PaymentCardProps {
    label: string;
    iconUrl: string;
}
export function PaymentCard({ label, iconUrl }: PaymentCardProps) {
    return (
        <div className="flex items-center justify-start gap-3 w-full max-w-[178.67px] bg-neutral-200 p-4 rounded">
            <img src={iconUrl} />
            <span className="uppercase text-gray-500 text-[12px]">{label}</span>
        </div>
    );
}
