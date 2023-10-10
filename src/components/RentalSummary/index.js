import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";

const RentalSummary = ({ car }) => {
  return (
    <section className="bg-white p-4 rounded-[10px] mb-8 md:order-2 md:w-1/3 xl:w-[492px]">
      <h2 className="text-base xl:text-xl font-bold mb-1">Rental Summary</h2>
      <p className="text-xs md:text-sm font-medium text-secondary-300 mb-6">
        Prices may change depending on the length of the rental and the price of
        your rental car.
      </p>
      <div className="flex items-center gap-x-4 pb-6 mb-4 border-b">
        <div className="background relative w-[116px] md:w-[132px] py-6 md:py-9 px-2 rounded-lg">
          <Image src={car.coverImage} width={116} height={36} alt={car.title} />
        </div>
        <div className="">
          <h2 className="text-xl xl:text-[32px] font-bold mb-3">{car.title}</h2>
          <div className="xl:flex xl:items-center xl:gap-x-2">
            <div className="flex gap-x-1">
              <StarIcon className="w-3 h-3 xl:w-6 xl:h-6 fill-yellow-400" />
              <StarIcon className="w-3 h-3 xl:w-6 xl:h-6 fill-yellow-400" />
              <StarIcon className="w-3 h-3 xl:w-6 xl:h-6 fill-yellow-400" />
              <StarIcon className="w-3 h-3 xl:w-6 xl:h-6 fill-yellow-400" />
              <OutlineStarIcon className="w-3 h-3 xl:w-6 xl:h-6 stroke-secondary-300" />
            </div>
            <span className="text-xs md:text-sm font-medium">
              {car.reviewsCount} Reviewers
            </span>
          </div>
        </div>
      </div>

      <section>
        <div className="flex justify-between items-center font-semibold mb-3">
          <span className="text-xs  text-secondary-300">Subtotal</span>
          <span>
            $
            {car.discount.$numberDecimal != 0
              ? car.discount.$numberDecimal
              : car.price.$numberDecimal}
          </span>
        </div>
        <div className="flex justify-between items-center font-semibold mb-6">
          <span className="text-xs  text-secondary-300">tax</span>
          <span>$0</span>
        </div>
        <form className="bg-gray-100 flex h-10 rounded-[10px] overflow-hidden px-5 text-xs mb-6">
          <input
            type="text"
            placeholder="Apply promo code"
            className="bg-gray-100 w-full outline-none font-medium"
          />
          <button className="font-semibold cursor-pointer">Applynow</button>
        </form>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold block mb-1">Total Rental Price</span>
            <span className="text-xs text-secondary-300 block">
              Overall price rental
            </span>
          </div>
          <span className="text-xl font-bold">
            $
            {car.discount.$numberDecimal != 0
              ? car.discount.$numberDecimal
              : car.price.$numberDecimal}
          </span>
        </div>
      </section>
    </section>
  );
};

export default RentalSummary;
