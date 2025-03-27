import CamisetaQueen from "../assets/images/BestSellingTshirt/camiseta-queen-of-the-stones-age-aberta_495x495+fill_ffffff+crop_center.jpg"

const BestSellingTshirt = () => {
  return (
    <article className="flex flex-col items-center">
      <figure>
        <img src={CamisetaQueen} alt="Camiseta Queens Of The Stone Age" />
        <figcaption className="text-zinc-800">
          Camiseta Queens Of The Stone Age
        </figcaption>
      </figure>

      <section className="text-center pt-3.5">
        <p className="text-zinc-800 font-bold">R$ 90,80 no pix</p>
        <p className="text-zinc-600">
          R$ 80,00 em até <strong>2x</strong> de <strong>R$ 40,00</strong>
        </p>
        <p className="text-zinc-600">sem juros</p>
      </section>
    </article>
  );
};

export default BestSellingTshirt;


