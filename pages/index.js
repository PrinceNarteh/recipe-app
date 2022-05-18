import axios from "axios";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";

// export default async function getServerSideProps() {
//   const res = await axios.get()
// }

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto pt-20 flex justify-center flex-wrap gap-10">
      <div className="w-80 shadow-md rounded-md">
        <div className="relative h-52">
          <Image src="/waakye.jpg" layout="fill" />
        </div>
        <div className="px-3 py-5 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl text-gray-500 font-semibold italic">
              Waakye
            </h3>
            <HeartIcon className="w-7 right-0 text-red-500 cursor-pointer" />
          </div>
          <div>
            <p className="text-lg text-gray-600">
              <span className="w-20 inline-block font-bold">Type:</span> Local
            </p>
            <p className="text-lg text-gray-600">
              <span className="w-20 inline-block font-bold">Time:</span> Lunch
            </p>
          </div>
          <div>
            <button className="w-full bg-slate-400 text-white rounded-full py-1.5 font-semibold">
              How To Prepare
            </button>
          </div>
        </div>
      </div>
      <div className="w-80 shadow-md rounded-md">
        <div className="relative h-52">
          <Image src="/waakye.jpg" layout="fill" />
        </div>
        <div className="px-3 py-5 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl text-gray-500 font-semibold italic">
              Waakye
            </h3>
            <div className="flex items-center space-x-2">
              <HeartIconSolid className="w-5 right-0 text-red-500 cursor-pointer" />
              <span>250</span>
            </div>
          </div>
          <div>
            <p className="text-lg text-gray-600">
              <span className="w-20 inline-block font-bold">Type:</span> Local
            </p>
            <p className="text-lg text-gray-600">
              <span className="w-20 inline-block font-bold">Time:</span> Lunch
            </p>
          </div>
          <div>
            <button className="w-full bg-slate-400 text-white rounded-full py-1.5 font-semibold">
              How To Prepare
            </button>
          </div>
        </div>
      </div>
      <div className="w-80 shadow-md rounded-md">
        <div className="relative h-52">
          <Image src="/waakye.jpg" layout="fill" />
        </div>
        <div className="px-3 py-5 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl text-gray-500 font-semibold italic">
              Waakye
            </h3>
            <HeartIcon className="w-7 right-0 text-red-500 cursor-pointer" />
          </div>
          <div>
            <p className="text-lg text-gray-600">
              <span className="w-20 inline-block font-bold">Type:</span> Local
            </p>
            <p className="text-lg text-gray-600">
              <span className="w-20 inline-block font-bold">Time:</span> Lunch
            </p>
          </div>
          <div>
            <button className="w-full bg-slate-400 text-white rounded-full py-1.5 font-semibold">
              How To Prepare
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
