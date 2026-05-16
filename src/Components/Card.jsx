import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { IoCalendarNumber } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";

const Card = ({ destination }) => {
  const { destinationName, imageUrl, country, price, duration } = destination;

  return (
    <div className="space-y-4 max-w-100">
      <Image
        className="mx-auto"
        src={imageUrl}
        alt={destinationName}
        height={200}
        width={400}
      />
      <div className="space-y-2">
        <h4 className="flex gap-1 text-[#6C696D] font-medium items-center">
          <SlLocationPin />
          {country}
        </h4>
        <div className="flex justify-between items-center font-bold text-lg">
          <h1>{destinationName}</h1>
          <h1>${price}</h1>
        </div>
        <h4 className="flex gap-1 text-[#6C696D] font-medium items-center">
          <IoCalendarNumber />
          {duration}
        </h4>
      </div>
      <div>
        <Link href={"/book-now"}>
          <h1 className="text-[#15A1BF] font-medium underline hover:text-[#09424f] cursor-pointer flex gap-2 items-center">
            Book Now <BsArrowUpRight />
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Card;
