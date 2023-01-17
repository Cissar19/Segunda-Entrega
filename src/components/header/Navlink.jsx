const NavLink = ({texto, link})  => {
    return(
        
    <a href={link} className="py-8 relative group">
        <span className="group-hover:text-orange-primary">{texto}</span>
        <span className=" absolute bottom-0 block w-full h-1 group-hover:bg-orange-primary scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
        </a>
)}
export default NavLink