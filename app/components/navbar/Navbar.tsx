import Container from "./Container";
import Logo from "./Logo";
import Search from "./Search";

export default function Navbar() {
  return (
    <div className="w-full bg-white fixed z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
                flex
                flex-row
                intems-center
                justify-between
                gap-3
                md:gap-0
            ">
            <Logo />
            <Search />
          </div>
        </Container>
      </div>
    </div>
  );
}
