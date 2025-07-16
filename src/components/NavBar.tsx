const NavBar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 z-50 md:p-9 p-3">
      <img
        src="/images/nav-logo.svg"
        alt="nav-logo"
        className="md:w-24 w-20 cursor-pointer"
        onClick={scrollToTop}
      />
    </nav>
  );
};

export default NavBar;
