import Slider from "react-slick";
import "./SliderGalery.css";

const SliderGalery = ({ images }) => {
  const settings = {
    infinite: true,
    speed: 1100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const imgPath = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="slider-galery">
      <Slider {...settings}>
        {images.map((e, index) => (
          <div key={index} className="img-area">
            <img
              src={imgPath + e.file_path}
              className="img-slider"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderGalery;
