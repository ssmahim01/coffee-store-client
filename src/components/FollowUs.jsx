import CoffeesImgContainer from "./coffeesImgContainer";

const FollowUs = () => {
  return (
    <div>
        <h5 className="md:text-xl text-[#1B1A1A] text-center pb-2 font-serif">Follow Us Now</h5>
      <h3 className="md:text-5xl text-4xl text-[#331A15] text-center font-bold font-rancho">
        Follow On Instagram
      </h3>

      <section className="md:w-4/5 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 py-14">
       <CoffeesImgContainer></CoffeesImgContainer>
      </section>
    </div>
  );
};

export default FollowUs;
