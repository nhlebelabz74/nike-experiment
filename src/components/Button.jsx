const Button = ({ label, iconUrl, bgColour, textColour, borderColour, fullWidth }) => {
  return (
    <button 
      className={`${fullWidth ?? 'w-full'} flex justify-center items-center leading-none gap-2 px-7 py-4 border text-lg font-montserrat rounded-full 
        ${ 
          bgColour ? `${bgColour}` : 'bg-coral-red'
        }
        ${
          textColour ? `${textColour}` : 'text-white'
        }  
        ${
          borderColour ? `${borderColour}` : 'border-coral-red'
        }`
      }
    >
        {label}
        {
            iconUrl && 
                <img 
                    src={iconUrl} 
                    alt="arrow-right" 
                    className="ml-2 rounded-full w-5 h-5"
                />
        }
    </button>
  );
}

export default Button;