import camisetaPersonalizada from "../assets/images/categories/camiseta-personalizada.webp"

const Categories = () => {
  return (
    <div className="w-full lg:max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3  py-10 px-4 gap-2">

      <div className="">
        <img src={camisetaPersonalizada} alt="Imagem de uma camiseta para personalizar" />
      </div>

      <div className="">
        <img src={camisetaPersonalizada} alt="Imagem de uma camiseta para personalizar" />
      </div>

      <div className="">
        <img src={camisetaPersonalizada} alt="Imagem de uma camiseta para personalizar" />
      </div>

      <div className="">
        <img src={camisetaPersonalizada} alt="Imagem de uma camiseta para personalizar" />
      </div>

      <div className="">
        <img src={camisetaPersonalizada} alt="Imagem de uma camiseta para personalizar" />
      </div>

      <div className="">
        <img src={camisetaPersonalizada} alt="Imagem de uma camiseta para personalizar" />
      </div>

    </div>
  )
}

export default Categories