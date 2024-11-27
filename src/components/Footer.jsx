import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import coffeeImg from "/src/assets/more/logo1.png";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: "url('/src/assets/more/footer-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="md:w-4/5 w-11/12 mx-auto flex justify-between items-center p-14 gap-5">
        <div className="md:w-1/2 pt-12">
          <div className="flex flex-col gap-5">
            <figure>
              <img
                className="w-16 h-16"
                src={coffeeImg}
                alt="Image of coffee logo"
              />
            </figure>

            <h2 className="md:text-4xl text-3xl text-[#331A15] font-bold font-rancho">
              Espresso Emporium
            </h2>

            <p className="md:text-base text-sm">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>

            <div className="flex gap-4 items-center *:text-[#331A15] *:w-10 *:h-10 *:cursor-pointer">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>

            <h2 className="md:text-4xl text-3xl text-[#331A15] font-bold font-rancho">
              Get in Touch
            </h2>

            <div className="flex gap-3 items-center *:text-lg font-serif font-medium">
              <IoMdCall /> <span>+88 01533 333 333</span>
            </div>

            <div className="flex gap-3 items-center *:text-lg font-serif font-medium">
              <MdEmail /> <span>espresso@gmail.com</span>
            </div>

            <div className="flex gap-3 items-center *:text-lg font-serif font-medium">
              <FaLocationDot /> <span>72, Wall street, King Road, Dhaka</span>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 pt-14">
          <h2 className="md:text-4xl text-3xl text-[#331A15] font-bold font-rancho pb-10">
            Connect with Us
          </h2>

          <form className="space-y-5">
            <div className="form-control">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full pl-4"
                required
              />
            </div>

            <div className="form-control">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full pl-4"
                required
              />
            </div>

            <div className="form-control">
              <input
                placeholder="Message"
                className="input input-bordered w-full h-32 pb-20 pl-4"
              ></input>
            </div>

            <button className="form-control btn btn-outline border-2 border-[#331A15] text-[#331A15] text-xl font-rancho font-semibold px-4 rounded-full">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="h-12" style={{
        backgroundImage: "url('/src/assets/more/coffee-seeds.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
        <p className="text-xl text-white font-medium font-rancho text-center pt-2">Copyright Espresso Emporium ! All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;