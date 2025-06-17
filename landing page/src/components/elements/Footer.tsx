import { Container } from "../shared/Container";
// import logo from "/assets/icon.svg";
import { navItems } from "./Navbar";
import { NavItem } from "../shared/NavItem";

export const Footer = () => {
  return (
    <footer className="relative pt-28 rounded-t-3xl bg-box-bg">
      <Container className="pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <img src="../../../public/assets/Images/logo.png" className="w-40 h-15" alt="Plyronest Logo" />
            {/* <span className="text-lg font-semibold text-heading-1 ">Plyronest</span> */}
          </div>

          <ul className="flex gap-6 text-heading-1">
            {navItems.map((item, key) => (
              <NavItem key={key} href={item.href} text={item.text} />
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
