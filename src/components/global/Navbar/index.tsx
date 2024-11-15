import React from "react";
import "./navbar.css";
import CrossIcon from "../../icons/CrossIcon";

function Navbar() {
  const [isSticky, setIsSticky] = React.useState(false);
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={isSticky ? "sticky_navbar" : ""}>
      <nav id="navbar" className={`navbar ${isSticky ? "sticky" : ""}`}>
        <a href="/">
          <img src={"i2c_logo.svg"} className="i2c_logo" alt="i2c logo" />
        </a>

        <button className="menu_icon" onClick={toggleCollapse}>
          {isCollapsed ? (
            <span>&#9776;</span>
          ) : (
            <span className="cross_icon">
              <CrossIcon />
            </span>
          )}
        </button>

        <div className={`navbar_links_container ${isCollapsed ? "collapsed" : "expanded"}`}>
          <a
            className={window.location.pathname === "/about-us" ? "active_link" : ""}
            href="/about-us"
          >
            About us
          </a>

          <a
            className={window.location.pathname === "/registration" ? "active_link" : ""}
            href="/registration"
          >
            Registration
          </a>

          <a
            className={window.location.pathname === "/careers" ? "active_link" : ""}
            href="/careers"
          >
            Careers
          </a>

          <a
            className={window.location.pathname === "/contact-us" ? "active_link" : ""}
            href="/contact-us"
          >
            Contact us
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
