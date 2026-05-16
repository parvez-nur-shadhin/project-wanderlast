import Link from "next/link";
import Logo from "@/assets/Wanderlast.png";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
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
      <ul className="flex items-center gap-5 font-medium">
        <li className="hover:text-blue-400 hover:underline">
          <Link href={"/profile"}>
            <h1 className="flex gap-2 items-center">
              <FaRegUser /> Profile
            </h1>
          </Link>
        </li>
        <li className="hover:text-blue-400 hover:underline">
          <Link href={"/login"}>Login</Link>
        </li>
        <li className="hover:text-blue-400 hover:underline">
          <Link href={"/sign-up"}>Sign Up</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
