import React, { useState } from "react";
import "./PhotoGallery.css";
import { MdClose } from "react-icons/md";
import img1 from "./images/photo_gallery/pg1.jpg";
import img2 from "./images/photo_gallery/pg2.jpg";
import img3 from "./images/photo_gallery/pg3.jpg";
import img4 from "./images/photo_gallery/pg4.jpg";
import img5 from "./images/photo_gallery/pg5.jpg";
import img6 from "./images/photo_gallery/pg6.jpg";
import img7 from "./images/photo_gallery/pg7.jpg";
import img8 from "./images/photo_gallery/pg8.jpg";
import img9 from "./images/photo_gallery/pg9.jpg";
import img10 from "./images/photo_gallery/pg10.jpg";
import img11 from "./images/photo_gallery/pg11.jpg";
import img12 from "./images/photo_gallery/pg12.jpg";
import img13 from "./images/photo_gallery/pg13.jpg";
import img14 from "./images/photo_gallery/pg14.jpg";
import img16 from "./images/photo_gallery/pg16.jpg";
import img17 from "./images/photo_gallery/pg17.jpg";
import img18 from "./images/photo_gallery/pg18.jpg";
import img19 from "./images/photo_gallery/pg19.jpg";
import img20 from "./images/photo_gallery/pg20.jpg";
import img22 from "./images/photo_gallery/pg21.jpg";
import img23 from "./images/photo_gallery/pg22.jpg";
import img24 from "./images/photo_gallery/pg23.jpg";
import img25 from "./images/photo_gallery/pg24.jpg";
import img26 from "./images/photo_gallery/pg25.jpg";
import img27 from "./images/photo_gallery/tihan.jpeg";
import img28 from "./images/photo_gallery/28.jpeg";
import img29 from "./images/photo_gallery/29.jpeg";
import img30 from "./images/photo_gallery/mh.jpeg";
import img31 from "./images/photo_gallery/acada.jpeg";
import img32 from "./images/photo_gallery/n1.jpg";
import img33 from "./images/photo_gallery/n2.jpg";
import img34 from "./images/photo_gallery/n3.jpg";
// import img35 from "./images/photo_gallery/is.jpg";
import img36 from "./images/photo_gallery/20210519_122904.jpg";
// import img37 from "./images/photo_gallery/mg.jpg";
import img38 from "./images/photo_gallery/WhatsApp Image 2022-12-04 at 7.29.50 PM.jpeg";

function PhotoGallery() {
  let data = [
    {
      id: 1,
      imgSrc: img3,
    },
    {
      id: 2,
      imgSrc: img30,
    },
    {
      id: 3,
      imgSrc: img32,
    },
    {
      id: 4,
      imgSrc: img33,
    },
    {
      id: 5,
      imgSrc: img17,
    },
    {
      id: 6,
      imgSrc: img34,
    },
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    },
    {
      id: 10,
      imgSrc: img10,
    },
    {
      id: 12,
      imgSrc: img12,
    },
    {
      id: 13,
      imgSrc: img13,
    },
    {
      id: 14,
      imgSrc: img29,
    },
    {
      id: 15,
      imgSrc: img4,
    },
    {
      id: 16,
      imgSrc: img5,
    },
    {
      id: 17,
      imgSrc: img6,
    },
    {
      id: 18,
      imgSrc: img14,
    },
    {
      id: 19,
      imgSrc: img16,
    },
    {
      id: 20,
      imgSrc: img18,
    },
    {
      id: 21,
      imgSrc: img19,
    },
    {
      id: 22,
      imgSrc: img20,
    },
    {
      id: 23,
      imgSrc: img22,
    },
    {
      id: 24,
      imgSrc: img23,
    },
    {
      id: 25,
      imgSrc: img24,
    },
    {
      id: 26,
      imgSrc: img25,
    },
    {
      id: 27,
      imgSrc: img26,
    },
    {
      id: 28,
      imgSrc: img27,
    },
    {
      id: 29,
      imgSrc: img28,
    },
    {
      id: 30,
      imgSrc: img31,
    },
    // {
    //   id: 31,
    //   imgSrc: img35,
    // },
    {
      id: 32,
      imgSrc: img36,
    },
    // {
    //   id: 33,
    //   imgSrc: img37,
    // },
    {
      id: 34,
      imgSrc: img38,
    },
    {
      id: 35,
      imgSrc: img1,
    },
    {
      id: 36,
      imgSrc: img2,
    },
    {
      id: 37,
      imgSrc: img11,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <MdClose onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
              data-aos="zoom-in"
            >
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
      <hr />
    </>
  );
}

export default PhotoGallery;
