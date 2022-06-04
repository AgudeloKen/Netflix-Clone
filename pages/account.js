import { getSession } from "next-auth/react";
import Image from "next/image";
import Layout from "../components/Layout";
import visa from "../assets/visa-v3.svg";

const Account = ({ session }) => {
  const { user } = session;
  console.log(user);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-end h-96 w-full text-white">
        <h1 className="text-3xl">Account</h1>
        <hr className="w-full md:w-4/5 mx-auto" />
        <div className="flex w-full md:w-4/5 mx-auto">
          <div className="w-11/12 md:w-4/5 mx-auto flex flex-col space-y-2 my-2">
            <div className="w-full flex justify-between">
              <p>{user.name}</p>
              <p className="text-zinc-500">Change account name</p>
            </div>
            <div className="w-full flex justify-between">
              <p>{user.email}</p>
              <p className="text-zinc-500">Change account email</p>
            </div>
            <div className="w-full flex justify-between">
              <p>Password: *******</p>
              <p className="text-zinc-500">Change password</p>
            </div>
            <div className="w-full flex justify-between">
              <p>Phone: 301 3414212</p>
              <p className="text-zinc-500">Change phone number</p>
            </div>
            <hr className="w-full" />
            <div className="w-full flex justify-between">
              <span className="flex space-x-2">
                <Image src={visa} alt="" width={30} height={20} />
                <p>**** **** **** 3191</p>
              </span>
              <p className="text-zinc-500">Manage payment info</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permantent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
