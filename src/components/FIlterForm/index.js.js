import DoubleArrow from "@/common/icons/DoubleArrow";
import { Button } from "@mui/material";
import FilterControl from "./FilterControl/FilterControl";
import { useState } from "react";
import Link from "next/link";

const FilterForm = ({ cities }) => {
  const [pickuplocation, setPickupLocation] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [dropTime, setDropTime] = useState("");

  return (
    <form className="flex flex-col items-center md:flex-row md:justify-between  gap-y-8 md:gap-x-11 relative container mx-auto max-w-[1440px]">
      <FilterControl
        title="Pick-Up"
        cities={cities}
        location={pickuplocation}
        setLocation={setPickupLocation}
      />
      <Link href={`/cars?p=${pickuplocation}&d=${dropoffLocation}`} className="absolute top-[122px] md:static">
        <Button
          variant="contained"
          className="bg-primary-500 w-[60px] h-[60px] hover:bg-primary-60 rounded-[10px]  "
        >
          <DoubleArrow />
        </Button>
      </Link>
      <FilterControl
        title="Drop-Off"
        cities={cities}
        location={dropoffLocation}
        setLocation={setDropoffLocation}
      />
    </form>
  );
};

export default FilterForm;
