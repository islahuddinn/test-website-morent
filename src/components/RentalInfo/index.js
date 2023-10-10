import { useState } from "react";
import CustomDatePicker from "../CustomDatePicker";

const RentalInfoForm = ({ car }) => {
  const [selectedPickCity, setSelectedPickCity] = useState("");
  const [selectedDropCity, setSelectedDropCity] = useState("");

  return (
    <form className="bg-white p-4 md:p-6 rounded-[10px] md:order-1 mb-8">
      <div className="flex justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="font-bold md:text-xl mb-1">Rental Info</h2>
          <p className="text-xs md:text-sm font-medium text-secondary-300">
            Please select your rental date
          </p>
        </div>
        <span className="text-xs md:text-sm font-medium text-secondary-300">
          Step 2 of 4
        </span>
      </div>

      <div className="flex items-center gap-x-2 font-semibold mb-5 md:mb-6">
        <span className="bg-primary-200 w-4 h-4 rounded-full flex justify-center items-center">
          <span className="inline-block w-2 h-2 bg-primary-500 rounded-full"></span>
        </span>
        <h3>Pick-Up</h3>
      </div>

      <div className="grid grid-cols-2 md:gap-x-8 mb-6 md:mb-8">
        <div className="col-span-2 md:col-span-1">
          <label className="block mb-3 font-semibold">Locations</label>
          <select
            value={selectedPickCity}
            onChange={(e) => setSelectedPickCity.target.value}
            className="bg-gray-100 h-14 rounded-lg w-full px-6 mb-5 outline-none text-xs text-secondary-300 border-r-[24px] border-r-transparent"
          >
            <option className="text-xs font-medium" value="" disabled>
              Select your city
            </option>
            {car.availabelCities.map((city) => {
              return <option key={city._id} value={city.title}>{city.title}</option>;
            })}
          </select>
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="block mb-3 font-semibold">Date</label>
          <CustomDatePicker />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="block mb-3 font-semibold">Time</label>
          <input
            type="time"
            className=" bg-gray-100 h-14 rounded-lg w-full px-6 mb-5 placeholder:text-xs placeholder:font-medium outline-none text-sm md:text-base"
            placeholder="select your Time"
          />
        </div>
      </div>

      <div className="flex items-center gap-x-2 font-semibold mb-5 md:mb-6">
        <span className="bg-primary-200 w-4 h-4 rounded-full flex justify-center items-center">
          <span className="inline-block w-2 h-2 bg-primary-500 rounded-full"></span>
        </span>
        <h3>Drop-Off</h3>
      </div>

      <div className="grid grid-cols-2 md:gap-x-8">
        <div className="col-span-2 md:col-span-1">
          <label className="block mb-3 font-semibold">Locations</label>
          <select value={selectedDropCity} onChange={(e)=>setSelectedDropCity(e.target.value)} className="bg-gray-100 h-14 rounded-lg w-full px-6 mb-5 outline-none text-xs text-secondary-300 border-r-[24px] border-r-transparent">
            <option className="text-xs font-medium" value="" disabled>
              Select your city
            </option>
            {car.returnCities.map((city) => {
              return <option key={city._id} value={city.title}>{city.title}</option>;
            })}
          </select>
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="block mb-3 font-semibold">Date</label>
          <CustomDatePicker />
        </div>
        <div className="col-span-2 md:col-span-1 ">
          <label className="block mb-3 font-semibold">Time</label>
          <div>
            <input
              type="time"
              className="bg-gray-100 h-14 rounded-lg w-full px-6 mb-5 placeholder:text-xs placeholder:font-medium outline-none text-sm md:text-base"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default RentalInfoForm;
