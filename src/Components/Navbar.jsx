"use client";

import Link from "next/link";
import Logo from "@/assets/Wanderlast.png";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { authClient, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const user = session?.user;

  const handleSubmit = async () => {
    await authClient.signOut();
  };

  return (
    <div className="container mx-auto flex items-center justify-between p-5">
      <ul className="flex items-center gap-5 font-medium">
        <li className="hover:text-blue-400 hover:underline">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:text-blue-400 hover:underline">
          <Link href={"/destinations"}>Destinations</Link>
        </li>
        <li className="hover:text-blue-400 hover:underline">
          <Link href={"/add-destination"}>Add Destination</Link>
        </li>
        <li className="hover:text-blue-400 hover:underline">
          <Link href={"/my-bookings"}>My Bookings</Link>
        </li>
      </ul>
      <div>
        <Image src={Logo} alt="Wanderlast" height={200} width={200} />
      </div>
      <div className="flex gap-5 items-center">
        <ul className="flex items-center gap-5 font-medium">
          <li className="hover:text-blue-400 hover:underline">
            <Link href={"/profile"}>
              <h1 className="flex gap-2 items-center">
                <FaRegUser /> Profile
              </h1>
            </Link>
          </li>
        </ul>

        {user ? (
          <div className="flex gap-5 items-center font-medium">
            {status === "loading" && "Signing you in..."}
            <h1 className="text-blue-400 font-bold text-lg shadow-2xl">
              {session.user.name}
            </h1>
            <Button
              onClick={handleSubmit}
              variant="danger-soft"
              className={"rounded-md"}
            >
              Log Out
            </Button>
          </div>
        ) : (
          <div className="flex gap-5 items-center font-medium">
            <h1 className="hover:text-blue-400 hover:underline">
              <Link href={"/login"}>Login</Link>
            </h1>
            <h1 className="hover:text-blue-400 hover:underline">
              <Link href={"/sign-up"}>Sign Up</Link>
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
