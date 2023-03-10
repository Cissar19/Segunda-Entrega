import imgProduct1 from "@/assets/images/image-product-1.jpg"
import imgProduct2 from "@/assets/images/image-product-2.jpg"
import imgProduct3 from "@/assets/images/image-product-3.jpg"
import imgProduct4 from "@/assets/images/image-product-4.jpg"


import imgProductSmall1 from "@/assets/images/image-product-1-thumbnail.jpg"
import imgProductSmall2 from "@/assets/images/image-product-2-thumbnail.jpg"
import imgProductSmall3 from "@/assets/images/image-product-3-thumbnail.jpg"
import imgProductSmall4 from "@/assets/images/image-product-4-thumbnail.jpg"
import PrevIcon from "@/components/icons/PrevIcon"
import NextIcon from "@/components/icons/NextIcon"
import { useState } from "react"

const array_img = [imgProduct1,imgProduct2,imgProduct3,imgProduct4]




const SlideProduct = () => {
    const [index, setIndex] = useState(0)

    const handleClickNext = () =>{
        
        if (index === array_img.length -1) return setIndex(0)
        setIndex(index+1)
    } 
    const handleClickPrev = () =>{
        if (index === 0) return setIndex(array_img.length -1)
        setIndex(index-1)
    } 
    return (
    <section className="grid md:grid-cols-4 md:gap-4">
        <div className="col-span-4 relative">
            <img src={array_img[index ]} alt="" className="aspect-[16/12]" />
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between">
                <button className=" grid place-items-center bg-white h-10 w-10 rounded-full" onClick={handleClickPrev}>
                    <PrevIcon/>
                </button>

                <button className=" grid place-items-center bg-white h-10 w-10 rounded-full "onClick={handleClickNext}>
                    <NextIcon/>
                </button>
            </div>
        </div>

        <img src={imgProductSmall1} alt="" className="hidden md:block" />
        <img src={imgProductSmall2} alt="" className="hidden md:block"/>
        <img src={imgProductSmall3} alt="" className="hidden md:block"/>
        <img src={imgProductSmall4} alt="" className="hidden md:block"/>
    </section>
    )
}


export default SlideProduct 