import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div style={{
            backgroundImage: "url('/src/assets/more/coffee-cup-bg.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            <div className="lg:w-2/5 w-11/12 lg:mr-40 mx-auto flex flex-col  justify-center lg:items-start items-center py-40 space-y-7 text-white lg:text-left text-center">
                <h2 className="md:text-5xl text-3xl font-medium font-rancho">Would you like a Cup of Delicious Coffee?</h2>

                <p className="text-sm">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>

                <Link to="/"><button className="btn bg-[#E3B577] font-rancho rounded-none border-none text-xl font-medium">Learn More</button></Link>
            </div>
        </div>
    );
};

export default Banner;