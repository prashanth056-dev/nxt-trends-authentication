import './index.css'

import Header from '../Header'

const Home = () => (
  <div className="main-bg">
    <Header />
    <div className="container">
      <div className="">
        <h1>Clothes That Get YOU Noticed</h1>
        <p>
          Fashion is part of the daily air ashsdiughu9gh iuew eit iutwe te tu9
          e9yq9q9 fq89e eytew98 eq98 9y8t
        </p>
        <button className="btn" type="submit">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="main-img"
      />
    </div>
  </div>
)

export default Home
