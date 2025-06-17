import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="bg-white-300 py-5 flex justify-around items-center gap-20">
            <h1 className="text-3xl font-bold">Pastry Hamiide</h1>

            <div className="flex justify-center items-center gap-20 text-xl">
                <Link to="/">
                    Home
                </Link>
                <Link to="/">
                    recipe Page
                </Link>

                <Link to="/">
                    pages
                </Link>
                  <Link to="/">
                    elementes
                </Link>
                  <Link to="/">
                    buy 
                </Link>
            </div>

            <button className=" border-2 rounded-full py-1 px-3 text-xl">img</button>
        </nav>
    )
}

export default NavBar;