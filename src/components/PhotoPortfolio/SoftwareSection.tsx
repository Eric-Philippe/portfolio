import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SoftwareSection.css";

const SoftwareSection: React.FC = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",

    arrows: false,
    swipe: true,
  };

  return (
    <section className="scroll-mt-8 lg:scroll-mt-0 mb-8">
      <div className="px-0 lg:px-4 overflow-hidden">
        <div className="lg:rounded-2xl py-12 lg:py-18 relative z-0 bg-gh-marketingDark">
          <div className="project-container">
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-10 lg:col-start-2">
                <div className="relative">
                  <h2
                    className="text-5xl font-extrabold text-white mb-12 z-10 relative"
                    id="logiciels"
                  >
                    Logiciels
                  </h2>
                </div>

                <div className="softwares">
                  <Slider {...settings}>
                    <div className="container">
                      <img
                        src="https://skillicons.dev/icons?i=ai"
                        alt="Adobe Illustrator"
                      />
                    </div>
                    <div className="container">
                      <img
                        src="https://skillicons.dev/icons?i=ps"
                        alt="Photoshop"
                      />
                    </div>
                    <div className="container">
                      <img
                        src="https://skillicons.dev/icons?i=ae"
                        alt="After Effects"
                      />
                    </div>
                    <div className="container">
                      <img
                        src="https://skillicons.dev/icons?i=figma"
                        alt="Figma"
                      />
                    </div>
                    <div className="container">
                      <img
                        src="https://static-00.iconduck.com/assets.00/adobe-lightroom-icon-512x512-r5i43yti.png"
                        alt="Lightroom"
                      />
                    </div>

                    {/* Duplicate the images */}
                    <div className="container">
                      <img
                        src="https://skillicons.dev/icons?i=ai"
                        alt="Adobe Illustrator"
                      />
                    </div>
                    <div className="container">
                      <img
                        src="https://skillicons.dev/icons?i=ps"
                        alt="Photoshop"
                      />
                    </div>
                    <div className="container">
                      <img
                        src="https://skillicons.dev/icons?i=ae"
                        alt="After Effects"
                      />
                    </div>
                    <div className="container">
                      <img
                        src="https://skillicons.dev/icons?i=figma"
                        alt="Figma"
                      />
                    </div>
                    <div className="container">
                      <img
                        src="https://static-00.iconduck.com/assets.00/adobe-lightroom-icon-512x512-r5i43yti.png"
                        alt="Lightroom"
                      />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
