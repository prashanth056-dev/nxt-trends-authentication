import './index.css'

const Header = () => (
  <nav className="nav-cont">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="logo"
    />
    <ul className="nav-items">
      <li>Home</li>
      <li>Products</li>
      <li>Cart</li>
      <div>
        <button className="btn" type="button">
          Logout
        </button>
      </div>
    </ul>
  </nav>
)
export default Header
