// Imagens
import freteGratis from '../assets/icons/icone-frete-gratis.webp';
import cashBack from '../assets/icons/icone-cashback.webp';
import desconto from '../assets/icons/icone-desconto.webp'
import cartaoCredito from '../assets/icons/cartao-de-credito-icone.webp'
import tamanho from '../assets/icons/icone-tamanho.webp'
import trocaGratis from '../assets/icons/icone-troca.webp'

const Beneficios = () => {
  return (
    <div className="max-w-7xl flex justify-between mx-auto py-10">
      <div className="flex flex-col items-center">
        <img src={freteGratis} alt="Imagem de frete grátis" className="w-10" />
        <div className="flex flex-col items-center">
          <span className="text-primary">FRETE GRÁTIS</span>
          <span className="text-zinc-500 flex flex-col items-center">
            <span className="block">Consulte as</span>
            <span className="block">condições</span>
          </span>

        </div>
      </div>

      <div className="flex flex-col items-center">
        <img src={cashBack} alt="Imagem de frete grátis" className="w-10" />
        <div className="flex flex-col items-center">
          <span className="text-primary">CASHBACK</span>

          <span className="text-zinc-500 flex flex-col items-center">
            <span className="block">Compre e</span>
            <span className="block">ganhe</span>
          </span>

        </div>
      </div>

      <div className="flex flex-col items-center">
        <img src={desconto} alt="Imagem de frete grátis" className="w-10" />
        <div className="flex flex-col items-center">
          <span className="text-primary">DESCONTO Á VISTA</span>
          <span className="text-zinc-500 flex flex-col items-center">
            <span className="block">3% off no Pix ou</span>
            <span className="block">Boleto</span>
          </span>

        </div>
      </div>

      <div className="flex flex-col items-center">
        <img src={cartaoCredito} alt="Imagem de frete grátis" className="w-10" />
        <div className="flex flex-col items-center">
          <span className="text-primary">PARCELE NO CARTÃO</span>
          <span className="text-zinc-500">
            <span className="block">Em até 5x </span>
            <span className="block">sem juros</span>
          </span>

        </div>
      </div>

      <div className="flex flex-col items-center">
        <img src={tamanho} alt="Imagem de frete grátis" className="w-10" />
        <div className="flex flex-col items-center">
          <span className="text-primary">TAMANHOS GRANDES</span>
          <span className="text-zinc-500 flex flex-col items-center">
            <span className="block">Para você</span>
            <span className="block">até o 4g</span>
          </span>

        </div>
      </div>

      <div className="flex flex-col items-center">
        <img src={trocaGratis} alt="Imagem de frete grátis" className="w-10" />
        <div className="flex flex-col items-center">
          <span className="text-primary">1º TROCA GRÁTIS </span>
          <span className="text-zinc-500 flex flex-col items-center">
            <span className="block">Solicite dentro</span>
            <span className="block">de 7 dias</span>
          </span>

        </div>
      </div>

    </div>
  )
}


export default Beneficios