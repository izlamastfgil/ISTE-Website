import React, { useEffect } from "react";
import svg from "../assets/isteLogo.svg";

function Navbar() {
  const handleHomeBtn = () => {};
  const handleEventBtn = () => {};
  const handleTeamBtn = () => {};
  const handleContactUsBtn = () => {}

  useEffect(() => {
    const target = document.getElementById('frontPage');
    const nav = document.getElementById('nav');

    const options = {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      root: null,
      rootMargin: '0px',
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio < 0.25) {
        nav.classList.remove('bg-[#C7D4E9]');
        nav.classList.add('bg-[#C7D4E9]/85');
      } else {
        nav.classList.add('bg-[#C7D4E9]');
        nav.classList.remove('bg-[#C7D4E9]/85');
      }
    }, options)


    observer.observe(target);

  }, [])

  return (
    <>
      <div id={"nav"} className="bg-[#C7D4E9] w-full flex flex-shrink justify-between items-center max-h-[4.5rem] py-5 px-[4rem] fixed z-10">
        <div className="flex flex-shrink justify-center items-center gap-x-8 font-['Roboto'] font-normal text-base">
          <button className="max-w-[2.875rem] " onClick={handleHomeBtn}>
            Home
          </button>
          <button className="max-w-[2.875rem] " onClick={handleEventBtn}>
            Event
          </button>
          <button className="max-w-[2.875rem] " onClick={handleTeamBtn}>
            Team
          </button>
        </div>
        <img className="max-w-[7.5rem]" src={svg}></img>
        <button className="max-w-30 border border-black py-2 px-5 bg-black text-white font-normal text-base font-['Roboto']" onClick={handleContactUsBtn}>
          Contact Us
        </button>
      </div>
    </>
  );
}

export default Navbar;
