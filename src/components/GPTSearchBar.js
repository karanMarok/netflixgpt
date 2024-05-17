import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {

    const language = useSelector((store) => store.config.lang)

  return (
    <>
      <div className="pt-[10%] flex justify-center">
        <form className="bg-black w-1/2 grid grid-cols-12">
          <input
            type="text"
            className="p-4 m-4 col-span-9"
            placeholder={lang[language].gptSearchPlaceholder}
          />
          <button className="bg-red-500 text-white rounded-lg py-2 px-4 col-span-3 m-4">
            {lang[language].search}
          </button>
        </form>
      </div>
    </>
  );
};

export default GPTSearchBar;
