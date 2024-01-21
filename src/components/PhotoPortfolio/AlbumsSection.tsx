import { useState } from "react";
import { RouterFocusProps } from "../../models/Router";

import albums from "../../utils/Albums";
import { FaCalendar } from "react-icons/fa";
import AlbumCard from "./AlbumCard";

export default function AlbumsSection({ setFocus }: RouterFocusProps) {
  const _years = albums.map((album) => album.getYear());
  const years = [...new Set(_years)];

  const [visibleYears, setVisibleYears] = useState(false);
  const [selectedYear, setSelectedYear] = useState<string>("all");

  const toggleCategories = () => {
    setVisibleYears(!visibleYears);
    setYear("all");
  };

  const setYear = (selectedCategory: string | "all") => {
    setSelectedYear(selectedCategory);
  };

  return (
    <>
      <section className="scroll-mt-8 lg:scroll-mt-0 mb-5">
        <div className="overflow-hidden">
          <div className=" py-12 relative z-0 bg-gh-marketingDark">
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <div className="px-4 sm:px-6 lg:px-8 py-8">
                  <div className="relative">
                    <h2
                      className="text-5xl font-extrabold text-white mb-8 z-10 relative"
                      id="albums"
                    >
                      Mes Albums
                    </h2>
                  </div>

                  {/** @YEARS */}
                  <div className="flex flex-wrap">
                    <button
                      className="mb-4 mr-8 px-4 py-2 text-md items-center font-medium opacity-80 m-1 text-white whitespace-nowrap rounded-full focus:ring-0 focus:outline-none hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10 my-1 transition-all"
                      onClick={toggleCategories}
                    >
                      <FaCalendar className="inline-block mr-2 -mt-[0.4em] opacity-40 text-xl" />
                      Toutes les années
                    </button>

                    <div
                      className={`flex ml-4 flex-wrap transition-all duration-1000 transform origin-left ${
                        visibleYears ? "scale-x-100" : "scale-x-0"
                      }`}
                    >
                      {visibleYears ? (
                        years.map((year) => (
                          <>
                            <button
                              key={year}
                              style={{
                                borderWidth: "1px",
                              }}
                              className={`-ml-4 mb-4 px-4 py-2 text-md flex items-center font-medium opacity-80 m-1 text-white whitespace-nowrap rounded-full focus:ring-0 focus:outline-none hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10 mx-8 my-1 transition-all ease-in-out duration-500`}
                              onClick={() => setYear(year)}
                            >
                              <div className="absolute -inset-20 pointer-events-none"></div>
                              <span>{year}</span>
                            </button>
                          </>
                        ))
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>

                {/** @ALBUMS */}
                <div className="col-span-full">
                  {albums
                    .filter((album) =>
                      selectedYear === "all"
                        ? true
                        : album.getYear() === selectedYear
                    )
                    .map((album, index) => (
                      <AlbumCard
                        key={`${album.getYear()}-${index}`} // Use a unique value related to the album as the key
                        album={album}
                        setFocus={setFocus}
                        index={index}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
