import Container from "../layouts/container";

const Service = () => {
  return (
    <Container className="min-h-screen place-content-start">
      <span className="text-center">
        <h1 className="text-[60px] font-semibold">
          <span className="text-blue">Services</span> that we provide.
        </h1>
        <p className="text-lg my-6">
          We provide various computer repair services and solutions for our new
          and regular customers. <br /> Feel free to find out more below.
        </p>
      </span>
    </Container>
  );
};

export default Service;
