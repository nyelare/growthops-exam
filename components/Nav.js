import React, { useState } from "react";
import Image from "next/image";
import { managersData } from "../pages/api/hello";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  const [select, setSelect] = useState();
  const [date, setDate] = useState("");
  const handleClick = () => {
    console.log(date);
    alert(date);
  };
  const countMe = () => {
    console.log("Hello");

    for (var i = 1; i <= 100; i++) {
      if (i % 3 == 0) {
        console.log("Foo");
      } else if (i % 5 == 0) {
        console.log("Bar");
      } else {
        console.log(i);
      }
    }
  };

  return (
    <div className="w-full h-20 bg-rose-700">
      <div className="flex items-center justify-start p-4">
        <div className="">
          <Image
            src="/assets/logo.png"
            width={75}
            height={50}
            className="cursor-pointer "
          />
        </div>

        <ul className="items-center justify-between hidden gap-16 pl-32 text-sm font-semibold text-white cursor-pointer md:flex ">
          <li>OUR PRODUCTS</li>
          <li>ABOUT US</li>
          <li>LIVE BETTER</li>
          <li>CLAIMS & SUPPORT</li>
          <li>MY ACCOUNT</li>
        </ul>
        <div>
          <GiHamburgerMenu
            size={30}
            color="white"
            className="flex ml-20 md:hidden"
          />
        </div>
      </div>

      <div className="p-4 text-4xl font-bold text-center text-amber-800">
        DISTRICT MANAGER
      </div>
      <div className="p-4 mx-auto max-w-7xl place-items-center">
        <div className="font-semibold">Filter By Age</div>
        <select
          className="border-2 border-black"
          value={select}
          onChange={(e) => setSelect(e.target.value)}
        >
          <option defaultValue="All">All</option>
          <option value={20}>20 and below</option>
          <option>21 to 39</option>
          <option>40 and above</option>
        </select>
      </div>
      <hr className="pt-4" />
      <div className="p-4 mx-auto max-w-7xl place-items-center gap-11">
        <div className="p-4">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {managersData.map((data, key) => {
              return (
                <div
                  className="flex p-2 duration-300 ease-in-out bg-white shadow-md hover:scale-110"
                  key={data.id}
                >
                  <div>
                    <Image
                      className="object-contain"
                      src="/assets/userphoto.png"
                      width={100}
                      height={75}
                    />
                  </div>
                  <div className="">
                    <p className="text-3xl font-bold">{data.name}</p>
                    <p className="pt-2 text-md">
                      Email: <span className="font-bold">{data.email}</span>
                    </p>
                    <p className="pt-2 text-md">
                      Mobile: <span className="font-bold">{data.phone}</span>
                    </p>
                    <p className="pt-2 text-md">
                      Comapany:{" "}
                      <span className="font-bold">{data.company}</span>
                    </p>
                    <p className="pt-2 text-md">
                      Address:{" "}
                      <span className="font-bold">{data.address.street}</span>
                    </p>
                    <p className="pt-2 text-md">
                      Website: <span className="font-bold">{data.website}</span>
                    </p>
                    <p className="pt-2 text-md">
                      Age: <span className="font-bold">{data.age}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <hr className="pt-4" />
      <div className="p-4 pb-[200px] mx-auto max-w-7xl place-items-center">
        <div className="font-semibold">Date</div>
        <div className="flex items-center justify-start space-x-4">
          <div className="flex">
            <input
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="border-2 border-black"
            ></input>
          </div>
          <div
            onClick={(e) => handleClick(e)}
            className="w-20 p-1 text-center rounded-lg cursor-pointer bg-rose-500"
          >
            Convert
          </div>
          <div
            onClick={countMe}
            className="w-20 p-1 text-center rounded-lg cursor-pointer bg-rose-500"
          >
            Count Me
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
