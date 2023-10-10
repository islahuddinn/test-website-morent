import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const CustomDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="bg-gray-100 h-14 rounded-lg w-full px-6 mb-5 text-xs text-secondary-300 flex items-center justify-between relative">
      <DatePicker
        onChange={(date) => setStartDate(date)}
        className="w-full h-14 outline-none bg-transparent"
      />

      <ChevronDownIcon className="w-[14px] h-[14px] absolute z-20 right-[24px]" />
    </div>
  );
};

export default CustomDatePicker;
