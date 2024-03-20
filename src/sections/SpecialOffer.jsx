import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse
    gap-10 max-container">

      <div className="flex-1">
        <img src={offer} width={773} height={687}  className="object-contain w-full"/>
      </div>

      <div className="flex flex-1 flex-col">

        <h2 className=" font-palanquin text-4xl 
        capitalize  font-bold lg:max-w-lg">
         <span className="text-coral-red inline-block mt-3">Special</span> Offer </h2>

          <p className="mt-4 lg:max-w-lg info-text"> 
          Your personal Nike co-creation starts here. Make something they've 
          never seen before by creating your own iconic sneakers with Nike. All authentic Nike shoes have a tag sewn into them with their size, barcode and model number on it. 
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
          Be just who you are by putting more youness in your
          shoeness with Nike By You, Nike's co-creation service for Members.
          </p>

          <div className="mt-11 flex flex-wrap gap-4">
            <Button label="Shop now" iconURL={arrowRight} />
            <Button label="Learn more" 
            backgroundColor="bg-white"
            borderColor = "border-slate-gray"
            textColot="text-slate-gray" />
          </div>
          
      </div>
    </section>
  )
}

export default SpecialOffer