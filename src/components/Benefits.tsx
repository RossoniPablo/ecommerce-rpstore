// Imagens
import freteGratis from '../assets/icons/icone-frete-gratis.webp';
import cashBack from '../assets/icons/icone-cashback.webp';
import desconto from '../assets/icons/icone-desconto.webp'
import cartaoCredito from '../assets/icons/cartao-de-credito-icone.webp'
import tamanho from '../assets/icons/icone-tamanho.webp'
import trocaGratis from '../assets/icons/icone-troca.webp'

const Benefits = () => {
  return (
    // <div className="max-w-7xl flex justify-between mx-auto py-10">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 py-10 px-5">

      <section className="flex flex-col items-center">
        <img src={freteGratis} alt="Imagem de frete grátis" className="w-10" />
        <h3 className="text-primary text-sm md:text-lg">FRETE GRÁTIS</h3>
        <p className="text-zinc-500 text-center">
          Consulte as <br /> condições
        </p>
      </section>


      <section className="flex flex-col items-center">
        <img src={cashBack} alt="Imagem de frete grátis" className="w-10" />
        <h3 className="text-primary text-sm md:text-lg">CASHBACK</h3>
        <p className="text-zinc-500 text-center">
          Compre e <br /> ganhe
        </p>
      </section>

      <section className="flex flex-col items-center">
        <img src={desconto} alt="Imagem de frete grátis" className="w-10" />
        <h3 className="text-primary text-center text-sm md:text-lg">DESCONTO Á VISTA</h3>
        <p className="text-zinc-500 text-center">
          4 % off no Pix ou <br /> Boleto
        </p>
      </section>

      <section className="flex flex-col items-center">
        <img src={cartaoCredito} alt="Imagem de frete grátis" className="w-10" />
        <h3 className="text-primary text-center text-sm md:text-lg">PARCELE NO CARTÃO</h3>
        <p className="text-zinc-500 text-center">
          Em até 5x <br /> sem juros
        </p>
      </section>

      <section className="flex flex-col items-center">
        <img src={tamanho} alt="Imagem de frete grátis" className="w-10" />
        <h3 className="text-primary text-center text-sm md:text-lg">TAMANHOS GRANDES</h3>
        <p className="text-zinc-500 text-center">
          Para você <br /> até o 4g
        </p>
      </section>

      <section className="flex flex-col items-center">
        <img src={trocaGratis} alt="Imagem de frete grátis" className="w-10" />
        <h3 className="text-primary text-center text-sm md:text-lg">1º TROCA GRÁTIS</h3>
        <p className="text-zinc-500 text-center">
          Solicite dentro <br /> de 7 dias
        </p>
      </section>


    </div>
  )
}


export default Benefits