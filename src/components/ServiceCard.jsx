const ServiceCard = ({ imgUrl, label, subtext }) => {
    return (
        <div className="flex-1 w-full rounded-[20px] shadow-3xl px-10 py-16 border border-coral-red">
            <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
                <img 
                    src={imgUrl} 
                    alt={label} 
                    width={24} 
                    height={24} 
                />	
            </div>
            <h3 className="mt-5 font-palanquin text-3xl font-bold leading-normal">
                {label}
            </h3>
            <p className="mt-3 break-words font-montserrat leading-normal text-lg text-slate-gray">
                {subtext}
            </p>
        </div>
    );
}

export default ServiceCard;