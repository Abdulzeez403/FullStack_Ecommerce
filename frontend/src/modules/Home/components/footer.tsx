import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="">
      <div className="  bg-black p-10 px-[10rem] block  md:flex md:justify-between  lg:flex lg:justify-between ">
        <div className="w-[25%]" >
          <h4 className="text-white font-bold text-[1.5rem] py-3">
            CityStore
          </h4>
          <div>
            <p className="text-white text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident esse aspernatur eaque
              veniam delectus iusto quidem. Minima illo incidunt laborum, assumenda maxime ut odit nemo
              voluptatem amet aut iusto fugiat.</p>
          </div>
        </div>

        <div>
          <nav className=" ">
            <h4 className="text-white font-bold text-[1rem]">
              Resources
            </h4>
            <ul className="my-2 ">
              <li>
                <Link href="/">
                  <h4 className="text-white my-1">Affilate Marekting</h4>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <h4 className="text-white my-1">Jobs</h4>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <h4 className="text-white  my-1">Staff</h4>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <h4 className="text-white  my-1">Getting a Job</h4>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <h4 className="text-white my-1">Location</h4>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <h4 className="text-white my-1 ">Interviewing</h4>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <nav className="">
            <h4 className="text-white font-bold text-[1rem]">
              Need Help?
            </h4>
            <ul className="my-2">
              <li>
                <Link href="/">
                  <h4 className="text-white ">Help Center</h4>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <h4 className="text-white ">About Us</h4>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <h4 className="text-white">Contact Us</h4>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <h4 className="text-white">Contributor</h4>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <h4 className="text-white">Sitemap</h4>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="text-center ">
          <h4 className="text-white font-bold text-[1rem]">
            Stay Connected
          </h4>
          <div className="flex justify-center gap-x-4">
            <BsInstagram color="white" size={25} />
            <BsTwitter color="white" size={25} />
            <BsLinkedin color="white" size={25} />
            <BsFacebook color="white" size={25} />
          </div>
          <div></div>
        </div>
      </div>

      <div className="text-center text-gray-300  bg-black  w-[80%] mx-auto py-4 border-2 border-gray-300">
        <h4>
          <span className="font-extrabold">Copyright @</span> Sodiq All Right Reserved
        </h4>
      </div>
    </div>
  );
};
