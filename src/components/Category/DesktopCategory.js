import BpCheckbox from "@/common/CustomCheckbox/CustomCheckbox";
import routerPush from "@/utils/routerPush";
import { Slider } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import queryString from "query-string";
import Link from "next/link";

const capacity = [
  { id: 1, title: "2 Person", value: "2" },
  { id: 2, title: "4 Person", value: "4" },
  { id: 3, title: "6 Person", value: "6" },
  { id: 4, title: "8 Or More", value: "8" },
];

const DesktopCategory = ({ types }) => {
  const router = useRouter();
  const [filters, setFilters] = useState({
    typeId: [],
    capacity: [],
    price: null,
  });

  useEffect(() => {
    router.query.typeId = filters.typeId;
    router.query.capacity = filters.capacity;
    if (filters.price != null) {
      router.query.price = filters.price;
    } else {
      delete router.query.price; // Remove the "price" property from router.query
    }
    routerPush(router);
  }, [filters]);

  const changeHandler = (e) => {
    const { name, value, checked } = e.target;
    if (name !== "price" && checked) {
      setFilters({ ...filters, [name]: [...filters[name], value] });
    } else if (name !== "price" && !checked) {
      setFilters({
        ...filters,
        [name]: filters[name].filter((item) => item !== value),
      });
    } else if (name === "price") {
      setFilters({ ...filters, [name]: value });
    }
  };

  return (
    <section className="bg-white p-8 xl:min-w-[360px] h-full hidden lg:block">
      <Link href="/cars" className="text-primary-500 flex justify-end">
          Remove All
      </Link>
      <ul className="mb-12">
        <h2 className="text-xs font-semibold mb-5 text-secondary-300 uppercase">
          Type
        </h2>
        {types.map((type) => {
          return (
            <li className="mb-6 text-xl font-semibold " key={type._id}>
              <BpCheckbox
                value={type._id}
                name="typeId"
                onChange={changeHandler}
              />
              <label
                htmlFor={type._id}
                className="cursor-pointer text-secondary-400 mr-1"
              >
                {type.title}
              </label>
              <span className="text-secondary-300">(10)</span>
            </li>
          );
        })}
      </ul>
      <ul className="mb-12">
        <h2 className="text-xs font-semibold mb-5 text-secondary-300 uppercase">
          Capacity
        </h2>
        {capacity.map((item) => {
          return (
            <li className="mb-6 text-xl font-semibold" key={item.id}>
              <BpCheckbox
                value={item.value}
                name="capacity"
                onChange={changeHandler}
              />
              <label
                htmlFor={item.id}
                className=" cursor-pointer text-secondary-400 mr-1"
              >
                {item.title}
              </label>
              <span className="text-secondary-300">(10)</span>
            </li>
          );
        })}
      </ul>

      <div>
        <h2 className="text-xs font-semibold mb-5 text-secondary-300 uppercase">
          Price
        </h2>
        <Slider
          aria-label="Temperature"
          min={0}
          max={200}
          step={10}
          sx={{
            color: "#90A3BF", // Change the color of the thumb and track to blue
            height: 12,
            "& .MuiSlider-track": {
              borderRadius: "inherit", // Add Tailwind styles to the track
              backgroundColor: "#3563E9",
            },
            "& .MuiSlider-thumb": {
              backgroundColor: "#3563E9",
              border: "2px solid #3563E9", // Add Tailwind styles to the thumb
            },
          }}
          name="price"
          onChange={changeHandler}
          value={filters.price}
        />
        <span className="text-xl font-semibold text-secondary-400">Max ${filters.price}.00</span>
      </div>
      
    </section>
  );
};

export default DesktopCategory;
