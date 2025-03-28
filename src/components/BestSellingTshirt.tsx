
interface CardTshirt {
  imageSrc: string;
  imageAlt: string;
  title: string;
  price: string;
  installmentPrice: string;

}
const BestSellingTshirt = ({ imageSrc, imageAlt, title, price, installmentPrice }: CardTshirt) => {
  return (
    <article className="flex flex-col items-center">
      <figure>
        <img src={imageSrc} alt={imageAlt} />
        <figcaption className="text-zinc-800 text-center">
          {title}
        </figcaption>
      </figure>

      <section className="text-center pt-3.5">
        <p className="text-zinc-800 font-bold">{price} no pix</p>
        <p className="text-zinc-600">
          {installmentPrice} <strong>2x</strong>
        </p>
        <p className="text-zinc-600">sem juros</p>
      </section>
    </article>
  );
};

export default BestSellingTshirt;


