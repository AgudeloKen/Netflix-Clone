import { signIn, getSession } from "next-auth/react";
import Image from "next/image";
import logo from "../assets/netflixlogo.png";
import bg from "../assets/netflixbg.jpeg";
import { BsFacebook, BsGithub } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-gradient-to-b from-bop to-transprent">
      <Image
        src={bg}
        alt=""
        layout="fill"
        className="bg-cover overflow-hidden filter brightness-50 absolute"
      />
      <div className=" hidden  sm:block absolute top-0 left-4">
        <Link href="/">
          <a>
            <Image src={logo} alt="netflix" width={200} height={120} />
          </a>
        </Link>
      </div>
      <section className="flex flex-col justify-center space-y-2 z-10 bg-bop w-96 h-96 text-white p-8">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-center">Sign In</h1>
          <Image src={logo} alt="netflix" width={200} height={120} />
        </div>

        <div className="w-full">
          <button
            onClick={() => signIn("github")}
            className="w-4/5 mx-auto bg-github p-2 rounded-lg mt-6 flex space-x-2"
          >
            <BsGithub className="text-2xl mx-4" /> Sign in with Github
          </button>
          <button
            onClick={() => signIn("facebook")}
            className="w-4/5 mx-auto bg-facebook p-2 rounded-lg my-4 flex space-x-2"
          >
            <BsFacebook className="text-2xl mx-4" /> Sign in with Facebook
          </button>
        </div>
      </section>
    </div>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
