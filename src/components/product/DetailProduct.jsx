import CartIcon from "@/components//icons/CartIcon"


const DetailProduct = () => {return (
<section className="container mx-auto px-4 ">
                <p className="text-orange-primary font-bold uppercase tracking-wide">Autos Contreras</p>
                <h2 className="font-bold text-3xl mb-3">Vehiculo</h2>
                <p className="text-dark-grayish-blue mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eos, facilis corporis iste optio explicabo sit nostrum molestias esse perspiciatis consequatur, quod modi iusto eaque. Consectetur suscipit iure magni repudiandae.</p>
                <div className="grid grid-cols-3 font-bold items-center mb-5">
                    <span className="text-2xl">$12.000</span>
                    <span className="bg-pale-orange rounded-md mr-auto px-2 py-1 text-orange-primary">50%</span>
                    <span className="text-right text-grayish-blue text-lg line-through">$24.000</span>
                </div>

                <div className="grid grid-cols-3 font-bold gap-4">
                    <div className="col-span-3 bg-gray-200 flex items-baseline justify-between py-2 px-5 pb-3 rounded-md">
                        <button className="text-2xl text-orange-primary">-</button>
                        <span>0</span>
                        <button className="text-2xl text-orange-primary">+</button>
                    </div>

                        <button className="col-span-3 rounded-md text-white bg-orange-primary py-3 flex justify-center gap-x-3">
                            <CartIcon fill="#ffffff" /> 
                            Add to cart
                        </button>



                </div>
            </section>
)}
export default DetailProduct
