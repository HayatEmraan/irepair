import macbook from "../../assets/macbook.jpg";

const About = () => {
  return (
    <div className="flex justify-start items-center min-h-screen">
      <div className="w-[40%]">
        <img src={macbook} alt="" />
      </div>
      <div className="w-full max-w-xl">
        <h1 className="text-black text-[60px] font-semibold">Who we are</h1>
        <p className="text-gray my-4">
          At <span className="text-black">iRepair</span>, we love MacBooks as
          much as you do. That’s why we offer fast, reliable, and affordable
          repair services for all kinds of MacBooks. Whether you need a screen
          replacement, a battery upgrade, or a software fix, we have the skills
          and experience to get your MacBook back to its best. We serve both
          individuals and businesses in
          <span className="text-black"> Bangladesh</span>, and we guarantee your
          satisfaction. Don’t let a broken MacBook ruin your day. Contact
          iRepair today and let us take care of it.
        </p>
        <div className="flex justify-between">
          <span className="relative">
            <h1 className="text-blue text-[120px]">98%</h1>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-nowrap">
              Successful repairs
            </p>
          </span>
          <span className="relative">
            <h1 className="text-blue text-[120px]">2K+</h1>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-nowrap">
              Successful repairs
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
