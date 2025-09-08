import Logo from "./Logo";
import NavMenu from "./NavMenu";
import AuthMenu from "./AuthMenu";
import ToggleTheme from "./ToggleTheme";
import CartButton from "./CartButton";

const Header = () => {
  return (
    <header className="shadow sticky top-0 bg-white dark:bg-slate-900 dark:text-white z-50">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <Logo />

          <NavMenu />

          <div className="flex items-center gap-4">
            <ToggleTheme />
            <CartButton />
            <AuthMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
