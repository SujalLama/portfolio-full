import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-screen h-screen justify-center flex flex-col items-center dark:bg-primary">
        <div className="text-secondary font-bold text-7xl dark:text-white">
            404
        </div>

        <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-4 dark:text-white text-center">
            This page does not exist
        </div>

        <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8 text-center">
            The page you are looking for could not be found.
        </div>
        <Link to="/" className="mt-16 text-white bg-secondary hover:scale-105 transition focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2
                 md:px-5 md:py-2.5 mr-1 md:mr-2 focus:outline-none dark:focus:ring-blue-800">
                    Go to Homepage
        </Link>
    </div>
  )
}
