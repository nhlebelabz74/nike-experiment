import { star } from "../assets/icons";

const PopularProductCard = ({ imgUrl, name, price, rating }) => {
    return (
        <div className="flex flex-col w-full max-sm:w-full">
            <img 
                className="w-[280px] h-[280px]"
                src={imgUrl}
                alt={name}
            />
            <div className="mt-8 flex justify-start gap-2.5">
                <img 
                    src={star}
                    alt="rating"
                    width={24}
                    height={24}
                />
                <p className="font-montserrat text-slate-gray text-xl leading-none">
                    {rating}
                </p>
            </div>
            <h3 className="font-semibold mt-2 text-2xl leading-normal font-palanquin">{name}</h3>
            <p className="font-semibold mt-2 text-2xl text-coral-red leading-normal font-montserrat">{price}</p>
        </div>
    );
}

export default PopularProductCard;