import DetailProduct from "@/components/product/DetailProduct"
import SlideProduct from "@/components/product/SlideProduct"


const MainProduct = () => {
    return(
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8 md:min-h-[calc(100vh-92px)]">
            <SlideProduct/>
            <DetailProduct/>
        </main>
    )
}

export default MainProduct