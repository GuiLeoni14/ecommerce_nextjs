import classNames from 'classnames';
import { ChangeEvent } from 'react';

interface InputProps {
    width?: 'sm' | 'md' | 'lg' | 'xlg';
    name: string;
    placeholder: string;
}
export function Input({ width = 'md', name, placeholder }: InputProps) {
    return (
        <>
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                className={classNames(
                    'bg-neutral-200 h-[42px] text-gray-400 rounded border border-neutral-300 outline-none p-3',
                    {
                        'max-w-[60px]': width === 'sm',
                        'max-w-[200px]': width === 'md',
                        'max-w-[348px] w-full': width === 'lg',
                        'max-w-full w-full block': width === 'xlg',
                    },
                )}
            />
        </>
    );
}
