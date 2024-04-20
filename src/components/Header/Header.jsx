import Slider from "react-slick";
import InputMovie from "../InputMovie/InputMovie";
import "./Header.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <header className="header-container">
      <div className="slider-area">
        <Slider {...settings}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="img-slider"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1572188863110-46d457c9234d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="img-slider"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="img-slider"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1460881680858-30d872d5b530?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="img-slider"
            />
          </div>
        </Slider>
      </div>

      <div className="header">
        <h1>Movie Verse</h1>
        <h2>Descubra o universo do cinema</h2>
        <InputMovie pageState={"Home"} />
      </div>
    </header>
  );
};

export default Header;
