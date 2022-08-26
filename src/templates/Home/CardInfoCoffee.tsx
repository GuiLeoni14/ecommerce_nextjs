import { ElementType } from 'react';

interface CardInfoCoffeeProps {
    iconUrl: string;
    name: string;
}

export function CardInfoCoffee({ iconUrl, name }: CardInfoCoffeeProps) {
    return (
        <div className="flex items-center justify-center gap-3">
            <img src={iconUrl} />
            <span className="text-gray-700 text-base font-normal">{name}</span>
        </div>
    );
}
