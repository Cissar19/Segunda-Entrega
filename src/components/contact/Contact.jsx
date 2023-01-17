import Contacto from "@/assets/images/contacto.jpg"

const Contact = ()  => {
    return(
        <>
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8 md:min-h-[calc(100vh-92px)]">
        <section>
            <img src= {Contacto} alt="" />
        </section>
            <section className="container mx-auto px-4 ">
                <p className="text-orange-primary font-bold uppercase tracking-wide">Tienda de Autos Contreras</p>
                <h2 className="font-bold text-3xl mb-3">Contacto</h2>
                <p className="text-dark-grayish-blue mb-5">Eres muy importante para nosotros es por eso que si tienes dudas de nuestros productos puedes contactarnos al mail dudas@gmail.com</p>


            </section>
    </main>
    </>
)}
export default Contact