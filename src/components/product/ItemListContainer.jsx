import CardProduct from "./CardProduct"
import Product from "./product"


function ItemListContainer () { 
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Product.map((Product)=> (
        <CardProduct

        title={Product.detail}
        price={Product.price} 
        detail={Product.title}
        imgurl={Product.imgurl}
        />
        )
        )}
        </div>
        </>
        


        )
}



export default ItemListContainer