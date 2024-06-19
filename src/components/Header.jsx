import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header({}) {
  const bagItem = useSelector((store) => store.bag);
  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="https://www.myntra.com/shop/men">Men</a>
          <a href="https://www.myntra.com/shop/women">Women</a>
          <a href="https://www.myntra.com/shop/kids">Kids</a>
          <a href="https://www.myntra.com/shop/home-living">Home & Living</a>
          <a href="https://www.myntra.com/shop/beauty">Beauty</a>
          <a  href="https://www.myntra.com/studio/home">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <span className="material-symbols-outlined action_icon">
              person
            </span>
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <span className="material-symbols-outlined action_icon">
              favorite
            </span>
            <span className="action_name">Wishlist</span>
          </div>

          <Link className="action_container" to="/bag">
            <span className="material-symbols-outlined action_icon">
              shopping_bag
            </span>
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bagItem.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
