import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Card() {
  let [datas, setdatas] = useState([]);
  let URL =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=152e1c61c8db4af297e4c5e3ccb960eb";
  //   let URL =
  //     "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=152e1c61c8db4af297e4c5e3ccb960eb";

  let response = async () => {
    let res = await axios.get(URL);
    setdatas(res.data.articles);
    console.log(res.data.articles);
  };

  useEffect(() => {
    response();
  }, []);

  return (
    <>
    <div className=" flex items-center bg-[#f7f7f7] mt-16">
      <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {datas.map((info) => (
          <li key={info.publishedAt}>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                class=" w-full"
                src={info.urlToImage}
                alt="Sunset in the mountain"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{info.title}</div>
                <p class="text-gray-700 text-base">{info.description}</p>
              </div>

              <a
                href="#"
                class="flex items-center ml-6 pb-4 text-blue-800"
                >
                <a href={info.content}>View More</a>
                <svg
                  class="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  >
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
        </>
  );
}

export default Card;
