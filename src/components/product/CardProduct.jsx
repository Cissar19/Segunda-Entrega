import { Link } from "react-router-dom"
  const CardProduct = ({imgurl, detail, title, price}) => { 
    return(
      <>
      <section className="containermx-auto px-4 ">
        <div className=""> 
                <img src={imgurl} alt="" />
                <p className="text-orange-primary font-bold uppercase tracking-wide">{title}</p>
                <h2 className="font-bold text-3xl mb-3">{detail}</h2>
                <p className="text-dark-grayish-blue mb-2">Lorem ipsum dolor sit amet s corporis iste optio explicabo sit nostrum molestias esse perspiciatis consequatur, quod modi iusto eaque. Consectetur suscipit iure magni repudiandae.</p>
                <span className="text-1xl mb-3">{price} CLP</span>
                
                  <Link to = "/MainProduct">
                  <button className="col-span-3 rounded-md text-white bg-orange-primary py-3 flex justify-center gap-x-5">
                  Ver detalle
                  </button>
                    
                  </Link> 
                
        </div>

                    

       </section>

      </>
    )
}



export default CardProduct