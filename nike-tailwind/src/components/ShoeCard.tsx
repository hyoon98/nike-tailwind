type Props={
    imgURL:{thumbnail:string,bigShoe:string},
    changeBigShoeImage:(shoe:string)=>void,
    bigShoeImg:string
}

const ShoeCard = ({imgURL,changeBigShoeImage,bigShoeImg}:Props) => {
    const handleClick=()=>{
        if(bigShoeImg!==imgURL.bigShoe)
        changeBigShoeImage(imgURL.bigShoe)
    }
  return (
    <div
        onClick={handleClick}
        className={`border-2 rounded-xl ${bigShoeImg===imgURL.bigShoe?'border-coral-red':'border-transparent'} cursor-pointer max-sm:flex-1`}
    >
        <div className="flex jusitfy-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src={imgURL.thumbnail}
                width={127}
                height={103}
                alt="shoe collection"
                className="object-contain"/>
        </div>
    </div>
  )
}

export default ShoeCard