import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section class="bg-white h-screen select-none">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 h-full">
        <div class="flex flex-col items-center justify-center h-full mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-600 ">
            404
          </h1>
          <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            Something's missing.
          </p>
          <p class="mb-4 text-lg font-light text-gray-500">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <Link
            to="/"
            class=" text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900 my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
