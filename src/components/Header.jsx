import logo from "../assets/logo.svg";

import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-primary-700 text-neutral">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="py-5 flex items-center gap-4">
          <div className="basis-36 shrink-0">
            <a href="#">
              <img src={logo} alt="Blogger Logo" />
            </a>
          </div>
          <nav className="basis-full flex justify-center">
            <ul className="no-underline flex gap-4">
              <li>
                <a
                  href="#"
                  className="bg-white/12 py-2.5 px-6 rounded-[14px] text-sm/relaxed font-semibold transition hover:bg-white/12 focus:outline-white/40 focus:outline-2 focus:outline-offset-4"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2.5 px-6 rounded-[14px] text-sm/relaxed font-semibold transition hover:bg-white/12 focus:outline-white/40 focus:outline-2 focus:outline-offset-4"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2.5 px-6 rounded-[14px] text-sm/relaxed font-semibold transition hover:bg-white/12 focus:outline-white/40 focus:outline-2 focus:outline-offset-4"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2.5 px-6 rounded-[14px] text-sm/relaxed font-semibold transition hover:bg-white/12 focus:outline-white/40 focus:outline-2 focus:outline-offset-4"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <ul className="no-underline flex gap-5">
            <li>
              <a href="#">
                <FaFacebook className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutube className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
