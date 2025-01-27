import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const toggleResume = () => {
    const resumeUrl = 'https://rimurutempestdiablo.github.io/vincent-portfolio/Resume.pdf';
    window.open(resumeUrl);
  };

  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

  const renderNavLinks = (isSecondary) => (
    <ul className={`list-none ${isSecondary ? 'flex sm:hidden' : 'hidden sm:flex'} flex-row gap-6`}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? 'text-sky-500 font-extrabold' : isSecondary ? 'text-secondary' : 'text-white'
          } hover:text-sky-500 hover:border-b hover:border-sky-500 text-[20px] font-medium cursor-pointer`}
          onClick={() => {
            setActive(link.title);
            if (isSecondary) {
              setToggle(false);
            }
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
      <li
        className={`text-${
          isSecondary ? 'secondary' : 'text-sky-500'
        } hover:text-sky-500 hover:border-b hover:border-sky-500 text-[20px] font-medium cursor-pointer`}
      >
        <button onClick={toggleResume}>Resume</button>
      </li>
    </ul>
  );

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-10">
        <nav
          className="m-2 md:m-5 flex h-16 items-center rounded-lg bg-sky-900/50 px-4 backdrop-blur-sm"
        >
          <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => {
                setActive('');
                window.scrollTo(0, 0);
              }}
            >
              <p className="text-white text-[20px] font-bold cursor-pointer flex">
                VINCENT&nbsp;
                <span className="sm:block hidden">FLORES</span>
              </p>
            </Link>
            {renderNavLinks(false)}
            <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[18px] object-contain cursor-pointer"
                onClick={() => setToggle(!toggle)}
              />
              <div
                className={`p-4 black-gradient absolute top-14 right-0 mx-2 my-2 min-w-[120px] z-10 rounded-xl foggy-glass ${
                  toggle ? 'flex' : 'hidden'
                }`}
              >
                {renderNavLinks(true)}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
