import { Input } from './Input';

export function AddressContent() {
    return (
        <div className="w-full max-w-[640px] ">
            <h4 className="font-baloo text-[18px] font-bold">Complete seu pedido</h4>
            <div className="w-full p-10 bg-neutral-100 mt-[15px]">
                <div className="flex items-start justify-start gap-2">
                    <img src="/img/icons/icon_locale_orange.svg" />
                    <span className="text-gray-500">
                        <strong className="block font-normal text-[16px] text-gray-800">Endereço de Entrega</strong>
                        Informe o endereço onde deseja receber seu pedido
                    </span>
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-4">
                    <Input name="cep" placeholder="CEP" />
                    <Input name="rua" placeholder="Rua" width="sm" />
                    <Input name="numero" placeholder="Número" width="xlg" />
                    <Input name="complemento" placeholder="Complemento" width="md" />
                    <Input name="Bairro" placeholder="bairro" width="lg" />
                    <Input name="Cidade" placeholder="cidade" width="md" />
                    <Input name="uf" placeholder="UF" width="lg" />
                </div>
            </div>
        </div>
    );
}
