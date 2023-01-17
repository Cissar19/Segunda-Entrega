import Contacto from "@/assets/images/us.jpg"

const Us = ()  => {
        return(
            <>
            <main className="grid grid-cols-1 md:grid-cols-2 gap-8 md:min-h-[calc(100vh-92px)]">
            <section>
                <img src= {Contacto} alt="" />
            </section>
                <section className="container mx-auto px-4 ">
                    <p className="text-orange-primary font-bold uppercase tracking-wide">Tienda de Autos Contreras</p>
                    <h2 className="font-bold text-3xl mb-3">Nuestra Historia</h2>
                    <p className="text-dark-grayish-blue mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius labore ratione excepturi. Tempore quisquam fugit debitis alias possimus fuga nulla porro tempora recusandae! Eveniet, quisquam nisi. Architecto at molestiae sint.</p>
    
    
                </section>
        </main>
        </>
)}
export default Us