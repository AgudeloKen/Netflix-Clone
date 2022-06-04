import logo from "../assets/netflix-logo.png";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsSearch, BsBell } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [nav, setNav] = useState(false);
  const { data, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "unauthenticated") {
    router.push("/");
    return;
  }

  const { user } = data;

  const changeColor = () => {
    if (window.scrollY > 20) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={
        nav
          ? "w-full p-4 px-12 bg-nav fixed transition-all ease-in duration-500 z-50"
          : "w-full p-4 px-12 fixed transition-all ease-in duration-500 z-50"
      }
    >
      <nav className="flex items-center justify-between w-full">
        <div className="flex w-full space-x-6 items-center">
          <Image src={logo} alt="netflix" width={80} height={20} />
          <ul className="flex space-x-4 text-white">
            <li>
              <Link href="/home">
                <a>Home</a>
              </Link>
            </li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <div className="group relative">
            <BsSearch
              className="text-2xl text-white font-bold cursor-pointer"
              onClick={() => setSearch(!search)}
            />
            {search ? (
              <form
                onSubmit={(e) => e.preventDefault()}
                className={
                  search
                    ? "flex items-center justify-center absolute border-2 border-white bg-bop w-40 h-10 z-10 p-4 top-9 -right-2"
                    : "hidden"
                }
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-transparent focus:outline-none caret-white py-2 text-white text-sm"
                />

                <AiFillCaretDown className="text-base rotate-180 absolute -top-3 right-3 text-white" />
              </form>
            ) : (
              ""
            )}
          </div>
          <div className="group relative">
            <BsBell className="text-2xl text-white cursor-pointer" />
            <div className="hidden absolute border-2  border-white bg-bop w-72 h-56 z-10 p-4 -right-2 top-9 group-hover:flex flex-col items-center  text-white space-y-3">
              <AiFillCaretDown className="text-base rotate-180 absolute -top-3 right-3" />
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
                et?
              </p>
              <hr className="w-11/12 mx-auto" />
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
                et?
              </p>
              <hr className="w-11/12 mx-auto" />
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
                et?
              </p>
            </div>
          </div>
          <div className="group relative ">
            <div className="flex items-center space-x-1">
              <Image
                src={user.image}
                width={48}
                height={48}
                alt=""
                className="rounded-md cursor-pointer"
              />
              <AiFillCaretDown className="text-lg text-white group-hover:rotate-180 transition-all ease duration-300 cursor-pointer" />
            </div>
            <div className="hidden absolute border-2 border-inse border-white bg-bop w-32 h-20 z-10 right-2 top-12 group-hover:flex flex-col items-center justify-center text-white">
              <AiFillCaretDown className="text-base rotate-180 absolute -top-3 right-5 group-hover:flex" />
              <Link href="/account">
                <a className="flex items-center py-1">Account</a>
              </Link>
              <button
                className="flex items-center py-1"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
