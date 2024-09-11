import Container from "../layouts/container";
import macbook from "../../assets/macbook-exposed.png";
import { Button } from "./button";

const Hero = () => {
  return (
    <Container className="min-h-[calc(100vh-60px)] place-content-center bg-red-400">
      <div className="flex items-center justify-between p-4 gap-6">
        <div className="w-full">
          <span className="text-[96px] font-bold leading-none">
            <h1 className="text-[#9A9A9A]">Don't worry.</h1>
            <h2 className="text-[#1D1D1F]">We'll fix it.</h2>
          </span>
          <p className="text-xl my-6 max-w-[80%] text-[#4F4F54]">
            Welcome to <span className="text-[#1D1D1F]">iRepair</span>, your
            one-stop place for all kinds of{" "}
            <span className="text-[#1D1D1F]">Macbook repairs</span> and
            diagnostics
          </p>
          <Button>Book a service</Button>
        </div>
        <div className="w-[calc(100%-15%)]">
          <img className="rotate-[-30deg]" src={macbook} alt="macbook" />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
