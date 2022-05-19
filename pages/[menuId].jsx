import Image from "next/image";
import React from "react";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";

const MenuDetails = () => {
  return (
    <div className="max-w-4xl mx-auto shadow-lg">
      <div className="relative h-96">
        <Image src="/waakye.jpg" layout="fill" />
      </div>
      <div className="p-4 mb-5">
        <div className="flex justify-between">
          <h2 className="text-3xl font-semibold italic">
            Waakye With Spaghetti
          </h2>
          <div className="flex items-center space-x-2">
            <HeartIconSolid className="w-10 right-0 text-red-500 cursor-pointer" />
            <span className="text-2xl">250</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-3xl mb-5 bg-slate-600 w-40 text-white p-2 rounded-r-full">
          Recipe:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mb-10">
            <h4 className="text-2xl font-bold italic underline">Ingredients</h4>
            <ul className="ml-10 text-2xl list-disc">
              <li>Rice</li>
              <li>Spaghetti</li>
              <li>Beans</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-bold italic underline">Step</h4>
            <ul className="ml-10 text-2xl list-disc">
              <li>Put your beans on fire and wait for it to be well cooked</li>
              <li>Add your waakye leaves to the beans</li>
              <li>Wash your rice and add it to the beans</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDetails;
