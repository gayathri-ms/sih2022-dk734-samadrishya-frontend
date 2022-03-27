import React from "react";
import { MdUpload } from "react-icons/md";

const Home = () => {
  return (
    <div className="text-center main">
      <div id="home" className="h-screen snap-center home mix-blend-overlay">
        <div class="upload-btn-wrapper ">
          <button class="btn flex">
            <span className="mt-1">
              <MdUpload />
            </span>
            <span className="ml-2">Upload a PDF file</span>
          </button>
          <input type="file" name="myfile" />
        </div>
        <div className="relative top-1/2">
          <button className="btn hover:bg-gray-200">
            Check For Plagiarism
          </button>
        </div>
      </div>
      <div id="about" className="h-screen snap-start">
        <div className="relative top-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#7eb4bd"
              fill-opacity="1"
              d="M0,96L48,106.7C96,117,192,139,288,133.3C384,128,480,96,576,85.3C672,75,768,85,864,101.3C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div id="features" className="h-screen snap-start">
        <img
          src="/undraw_features_overview_re_2w78.svg"
          className="invisible md:visible relative top-1/4"
        />
      </div>
      <div
        id="team"
        className="h-screen -mt-20 md:mt-16 grid text-center items-center"
      >
        <div className="md:flex flex-row justify-center text-center md:space-x-36">
          <div class="lg:w-1/4 sm:w-1/2 p-4">
            <div class="flex relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block w-8 relative left-1/2 z-50 h-8 text-gray-400 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>

              <div class="px-8 py-10 mt-3 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  qwerty
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  seheh
                </h1>
                <p class="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/4 sm:w-1/2 p-4">
            <div class="flex relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block w-8 relative left-1/2 z-50 h-8 text-gray-400 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>

              <div class="px-8 py-10 mt-3 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  qwerty
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  seheh
                </h1>
                <p class="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/4 sm:w-1/2 p-4">
            <div class="flex relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block w-8 relative left-1/2 z-50 h-8 text-gray-400 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>

              <div class="px-8 py-10 mt-3 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  qwerty
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  seheh
                </h1>
                <p class="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex flex-row justify-center items-center md:space-x-36">
          <div class="lg:w-1/4 sm:w-1/2 p-4">
            <div class="flex relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block w-8 relative left-1/2 z-50 h-8 text-gray-400 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>

              <div class="px-8 py-10 mt-3 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  qwerty
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  seheh
                </h1>
                <p class="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/4 sm:w-1/2 p-4">
            <div class="flex relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block w-8 relative left-1/2 z-50 h-8 text-gray-400 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>

              <div class="px-8 py-10 mt-3 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  qwerty
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  seheh
                </h1>
                <p class="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/4 sm:w-1/2 p-4">
            <div class="flex relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block w-8 relative left-1/2 z-50 h-8 text-gray-400 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>

              <div class="px-8 py-10 mt-3 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  qwerty
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  seheh
                </h1>
                <p class="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
