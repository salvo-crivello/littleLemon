import IconMenu from "../icon/IconMenu";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [headerShow, setHeaderShow] = useState(true);
  const [yCurrent, setYCurrent] = useState(window.scrollY);
  const [yOld, setYOld] = useState(window.scrollY);
  const [menuSlide, setMenuSlide] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handlesHeaderShow = () => {
      if (menuSlide) return;

      setYCurrent(window.scrollY);
      const scrollQty = Math.abs(yCurrent - yOld);
      const scrollWay = yCurrent > yOld ? "down" : "up";

      let headerVisible = headerShow;

      if (scrollQty > 50 && scrollWay === "down") {
        headerVisible = false;
      }
      if (scrollQty > 30 && scrollWay === "up") {
        headerVisible = true;
      }

      setYOld(scrollQty > 50 ? yCurrent : yOld);

      setHeaderShow(headerVisible);
    };

    window.addEventListener("scroll", handlesHeaderShow);

    return () => {
      window.removeEventListener("scroll", handlesHeaderShow);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [yCurrent]);

  const showMenu = () => {
    setMenuSlide(!menuSlide);
  };

  const handleClick = () => {
    setMenuSlide(menuSlide ? !menuSlide : menuSlide);
  };

  const urlActive = (path) => location.pathname === path;

  return (
    <header
      className={`${headerShow ? "" : "header-hide"} ${
        menuSlide ? "header-menu-open" : ""
      }`}
    >
      <div className="">
        <div>
          <img src="/photo/logo-01.png" alt="logo" />
          <span className="menu-button" onClick={showMenu}>
            <IconMenu open={menuSlide} />
          </span>
        </div>
        <nav className="navbar">
          <ul className="menu">
            <li>
              <Link
                to="/"
                aria-label="navigate to home"
                className={urlActive("/") ? "page-selected" : "page-unselected"}
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                aria-label="navigate to about"
                className={
                  urlActive("/about") ? "page-selected" : "page-unselected"
                }
                onClick={handleClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/reservation"
                aria-label="navigate to reservation"
                className={
                  urlActive("/reservation")
                    ? "page-selected"
                    : "page-unselected"
                }
                onClick={handleClick}
              >
                Reservation
              </Link>
            </li>
            <li>
              <Link
                to="/onlineMenu"
                aria-label="navigate to menu"
                className={
                  urlActive("/onlineMenu") ? "page-selected" : "page-unselected"
                }
                onClick={handleClick}
              >
                Order Online
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                aria-label="navigate to login"
                className={
                  urlActive("/login") ? "page-selected" : "page-unselected"
                }
                onClick={handleClick}
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
