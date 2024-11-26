import coffeeImg from "/src/assets/more/logo1.png";

const Navbar = () => {
    return (
        <div style={{
            backgroundImage: "url('/src/assets/more/navbarBG.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
            <div className="flex justify-center items-center gap-3 py-5">
                <figure>
                    <img className="w-16 h-16" src={coffeeImg} alt="Image of coffee logo" />
                </figure>

                <h2 className="text-white md:text-5xl text-3xl font-medium font-rancho">Espresso Emporium</h2>
            </div>
        </div>
    );
};

export default Navbar;