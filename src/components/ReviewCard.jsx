import { star } from "../assets/icons";

const ReviewCard = ({ imgUrl, customerName, rating, feedback }) => {
    return (
        <div className="flex flex-col justify-center items-center w-full border border-coral-red rounded-lg px-5 py-5 shadow-3xl">
            <img 
                src={imgUrl} 
                alt={customerName} 
                className="rounded-full w-20 h-20"
            />
            <div className="mt-8 flex justify-start gap-2.5">
                <img 
                    src={star}
                    alt="rating"
                    width={24}
                    height={24}
                />
                <p className="font-montserrat text-slate-gray text-xl leading-none">
                    ({rating})
                </p>
            </div>
            <p className="mt-4 text-slate-gray">
                <span className="font-semibold text-coral-red text-lg">{customerName}</span> - "{feedback}"
            </p>
        </div>
    );
}

export default ReviewCard