import { Button } from "../ui/button";
import Container from "./container";

const Navbar = () => {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">
          i<span className="text-green-600">Repair</span>
        </h1>
        <ul className="flex items-center gap-5 text-xl">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>
            <Button>Login</Button>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Navbar;
