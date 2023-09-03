import React from "react";
import Marquee from "react-fast-marquee";
import './Carouselicons.css'

function ScrollApp() {

  const row1 = [
    "https://res.cloudinary.com/dfuwiecz0/image/upload/v1692872153/Godspeed/Black%20logos/32-black_oldtf2.png",
    "https://res.cloudinary.com/dfuwiecz0/image/upload/v1692871425/Godspeed/Black%20logos/33-black_ke34o3.png",
    "https://res.cloudinary.com/digrwsp4s/image/upload/v1692743630/download_16_likphk.png",
    "https://res.cloudinary.com/digrwsp4s/image/upload/v1692743630/download_12_vcuewj.png",
    "https://res.cloudinary.com/digrwsp4s/image/upload/v1692743630/download_5_plzywl.png",
    "https://res.cloudinary.com/digrwsp4s/image/upload/v1692743630/download_2_c7o6nj.png",
    "https://res.cloudinary.com/digrwsp4s/image/upload/v1692743630/download_4_dqzocy.png",
    "https://res.cloudinary.com/digrwsp4s/image/upload/v1692743629/download_1_hvjhjc.png",
    "https://res.cloudinary.com/digrwsp4s/image/upload/v1692743629/download_9_laaxgl.png",
    "https://res.cloudinary.com/digrwsp4s/image/upload/v1692743629/download_6_kd2ppr.png",
    "https://res.cloudinary.com/digrwsp4s/image/upload/v1692743629/download_8_dlxgnr.png",
    "https://res.cloudinary.com/digrwsp4s/image/upload/v1692743629/download_10_yubgbt.png",
    "https://res.cloudinary.com/digrwsp4s/image/upload/v1692743629/download_7_dblqv0.png",
    "https://res.cloudinary.com/digrwsp4s/image/upload/v1692743629/images_dnvyud.png",
    "https://res.cloudinary.com/digrwsp4s/image/upload/v1692743629/download_3_xnfohs.png",
    "https://res.cloudinary.com/digrwsp4s/image/upload/v1692743629/download_1_wuubm3.jpg",
    "https://res.cloudinary.com/digrwsp4s/image/upload/v1692743628/download_ytyzr6.png",
    "https://res.cloudinary.com/digrwsp4s/image/upload/v1692743628/0rBI-minio.logo__alelsu.png",
    "https://res.cloudinary.com/digrwsp4s/image/upload/v1692743628/download_ysgk6s.jpg",
    "https://res.cloudinary.com/digrwsp4s/image/upload/v1692743628/download_14_qz1cpj.png",
    "https://res.cloudinary.com/digrwsp4s/image/upload/v1692743628/download_11_tpirgp.png",
    "https://res.cloudinary.com/digrwsp4s/image/upload/v1692743628/images_1_nkhzp1.png",
    "https://res.cloudinary.com/digrwsp4s/image/upload/v1692743628/download_13_syqzhx.png",
    "https://res.cloudinary.com/digrwsp4s/image/upload/v1692743628/images_2_myet17.png",
    "https://res.cloudinary.com/digrwsp4s/image/upload/v1692743627/download_15_xm1ocb.png",
  ];

  // const row1 = [
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707569/graphql_ppe7vt.png",
  //   // "https://res.cloudinary.com/dfuwiecz0/image/upload/v1692719024/Godspeed/Tech%20logos/redisnet_hfzmtw.webp",
  //   // "https://res.cloudinary.com/dfuwiecz0/image/upload/v1692719205/Godspeed/Tech%20logos/swaggernet_efczjq.png",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707570/passport_assbnc.png",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707570/vue_pbl3m9.jpg",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707570/tailwind_zurwyp.png",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707570/react_g4ioxv.png",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707570/prisma_fnmbzb.png",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707569/eslint_t88b01.png",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707569/graphql_ppe7vt.png",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707570/passport_assbnc.png",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707570/vue_pbl3m9.jpg",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707570/tailwind_zurwyp.png",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707570/react_g4ioxv.png",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707570/prisma_fnmbzb.png",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707569/eslint_t88b01.png",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707569/graphql_ppe7vt.png",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707570/passport_assbnc.png",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707570/vue_pbl3m9.jpg",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707570/tailwind_zurwyp.png",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707570/react_g4ioxv.png",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707570/prisma_fnmbzb.png",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707569/eslint_t88b01.png",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707569/graphql_ppe7vt.png",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707570/passport_assbnc.png",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707570/vue_pbl3m9.jpg",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707570/tailwind_zurwyp.png",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707570/react_g4ioxv.png",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707570/prisma_fnmbzb.png",
  //   "https://res.cloudinary.com/digrwsp4s/image/upload/v1692707569/eslint_t88b01.png",
  // ];

  return (
    <div className="AppContainer">
      <div className="Wrapper">
        <div className="Scroll">
          <Marquee speed={20}>
            <div className="Container">
              {row1.map((element) => (
                <img src={element} className="Image"/>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default ScrollApp;