//* JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3- )Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap v.b harici kutuphaneler kullanilabilir.


import "./content.css";
// ? Dahili bir resim eklemek icin import yapmak gereklidir.
import img2 from "../img/Props.jpg";

const Content = () => {
  const imgStyle = {
    diplay: "block",
    width: "300px",
    margin: "1rem auto",
  };
  return (
    <div>
      <h2 style={{ color: "red" }}>React JS</h2>
      <p style={{ backgroundColor: "lightgreen" }}>
        React, Kullanici arabirimi tasarlamak icin kullanilan bir JS
        kütüphanesidir.
      </p>
      <img
        src="https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692__340.jpg"
        alt="pictures"
      />
      <img style={imgStyle} src={img2} alt="images-2" />
      <p className="par-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A cupiditate
        impedit dolorem, quas consequatur quam officiis tempore dicta. Maxime
        magnam nihil sint corrupti fugit nostrum voluptatem deleniti blanditiis
        quisquam rem?
      </p>
    </div>
  );
};

export default Content;
