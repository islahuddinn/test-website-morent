import { HeartIcon } from "@heroicons/react/24/outline";
import { Button } from "@mui/material";
import Link from "next/link";
import CardInteraactions from "../Card/CardInteractions";

const CarInfo = ({ car }) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-[10px] md:w-1/2 self-stretch">
      <div className="flex items-center justify-between mb-[6px]">
        <h1 className="text-xl md:text-[32px] font-bold">{car.title}</h1>
        <CardInteraactions car={car}/>
      </div>

      <div className="mb-4">score</div>

      <p className="text-xs md:text-xl text-secondary-300 leading-6 md:leading-10 mb-4 md:mb-8">
        {car.text}
      </p>

      <div className="grid grid-cols-4 gap-y-4 gap-x-6 md:gap-x-11 mb-8 md:mb-[68px] ">
        <span className="col-span-1 text-secondary-300 block text-xs md:text-xl font-medium">
          TypeCar
        </span>
        <span className="col-span-1 block text-xs md:text-xl font-semibold text-right">
          {car.cType.title}
        </span>
        <span className="col-span-1 text-secondary-300 block text-xs md:text-xl font-medium">
          Capacity
        </span>
        <span className="col-span-1 block text-xs md:text-xl font-semibold text-right">
          {car.capacity}Person
        </span>
        <span className="col-span-1 text-secondary-300 block text-xs md:text-xl font-medium">
          Steering
        </span>
        <span className="col-span-1 block text-xs md:text-xl font-semibold text-right">
          {car.steering}
        </span>
        <span className="col-span-1 text-secondary-300 block text-xs md:text-xl font-medium">
          Gasoline
        </span>
        <span className="col-span-1 block text-xs md:text-xl font-semibold text-right">
          {car.gasoline}L
        </span>
      </div>

      <div className="flex justify-between items-center">
        <div>
          {car.discount.$numberDecimal !== "0" && (
            <div className="text-base xl:text-xl font-semibold xl:font-bold">
              ${car.discount.$numberDecimal}{" "}
              <span
                className={`${
                  car.discount.$numberDecimal !== "0" ? "" : "hidden"
                }`}
              >
                /
              </span>
              <span
                className={`ml-1 text-xs xl:text-sm font-semibold xl:font-bold text-secondary-300${
                  car.discount.$numberDecimal !== "0" ? "" : "hidden"
                }`}
              >
                day
              </span>
            </div>
          )}
          <div
            className={` ${
              car.discount.$numberDecimal !== "0"
                ? "line-through text-secondary-300 text-sm font-medium"
                : "text-base xl:text-xl font-semibold xl:font-bold"
            }`}
          >
            ${car.price.$numberDecimal}{" "}
            <span
              className={`${
                car.discount.$numberDecimal !== "0" ? "hidden" : ""
              }`}
            >
              /
            </span>
            <span
              className={`ml-1 text-xs xl:text-sm font-semibold xl:font-bold text-secondary-300 ${
                car.discount.$numberDecimal !== "0" ? "hidden" : ""
              }`}
            >
              day
            </span>
          </div>
        </div>
        <Link href={`/cars/${car.hashId}/${car.slug}/payment`}>
          <Button
            variant="contained"
            className="bg-primary-500 w-[140px] h-14 hover:bg-primary-600 text-base font-bold"
          >
            Rent Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CarInfo;
