import {
  BellIcon,
  Cog6ToothIcon,
  HeartIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import FilterIcon from "@/common/icons/FilterIcon";
import SearchIcon from "@/common/icons/SearchIcon";
import Link from "next/link";
import AccountMenu from "@/components/AccountMenu";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import getAllCarsService from "@/services/getAllCarsService";
import http from "@/services/httpService";
import Image from "next/image";

const Header = () => {
  const userInfo = useSelector((state) => state.userSignin);
  const { user } = userInfo;
  const [searchValue, setSearchValue] = useState("");
  const [allCars, setAllCars] = useState([]);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getAllCars = async () => {
      try {
        const { data: carsData } = await http.get("/cars?limit=100");
        setAllCars(carsData.data.docs);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCars();
  }, []);

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue) {
      const filteredCars = allCars.filter((car) =>
        car.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setCars(filteredCars);
    } else {
      setCars([]);
    }
  }, [searchValue]);

  return (
    <header className="bg-white py-8 px-6 md:px-[60px] md:py-10 sticky top-0 z-30">
      {/* Navigation */}
      <nav className=" container mx-auto max-w-[1440px]">
        <div className="flex justify-between items-center h-full gap-x-5 mb-8 md:mb-0">
          <div className="flex items-center flex-1 gap-x-16">
            <Link href="/">
              <h1 className="text-primary-500 font-bold text-2xl md:text-[32px] uppercase">
                morent
              </h1>
            </Link>
            {/* desktop search section */}
            <div
              className={`hidden md:block  border  max-w-[492px] flex-1 relative ${
                searchValue ? "rounded-t-[10px]" : "rounded-[70px]"
              }`}
            >
              <div className="flex items-center py-[10px] px-5 w-full">
                <SearchIcon />
                <input
                  type="search"
                  className="ml-5 font-medium text-sm w-full outline-none"
                  placeholder="Search something here"
                  onChange={changeHandler}
                  value={searchValue}
                />
                <button>
                  <FilterIcon />
                </button>
              </div>
              <SearchBox
                cars={cars}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            </div>
          </div>
          <div className="flex items-center gap-x-5">
            <Link
              href={user ? "/favourites" : "/signin"}
              className="p-[10px] border rounded-full hidden md:block"
            >
              <HeartIcon className="w-6 h-6 fill-secondary-400" />
            </Link>
            <button className="p-[10px] border rounded-full hidden md:block">
              <BellIcon className="w-6 h-6 fill-secondary-400" />
            </button>
            <AccountMenu />
            <Link
              href={`${user ? "/dashboard" : "/signin"}`}
              className="p-[10px] border rounded-full"
            >
              <UserIcon className="w-6 h-6 fill-secondary-400" />
            </Link>
          </div>
        </div>

        {/* mobile search section */}

        <div className="flex items-center gap-x-4 w-full md:hidden">
          <div className="relative">
            <div className=" px-6 flex items-center bg-white rounded-[10px] border w-full">
              <SearchIcon />
              <input
                type="search"
                className="ml-2 font-medium text-sm w-full h-12 outline-none"
                placeholder="Search something here"
                onChange={changeHandler}
                value={searchValue}
              />
            </div>
            <SearchBox
              cars={cars}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
          <button className="border rounded-[10px] p-3">
            <FilterIcon />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

const SearchBox = ({ cars, searchValue, setSearchValue }) => {
  return (
    <div
      className={`bg-white absolute right-0 left-0 p-3 rounded-b-[10px] shadow-sm border-b border-x max-h-96 overflow-auto ${
        searchValue ? "block" : "hidden"
      }`}
    >
      {cars.length ? (
        cars.map((car) => {
          return (
            <div className="border-b p-1" key={car._id}>
              <Link
                href={`/cars/${car.hashId}/${car.slug}`}
                onClick={() => setSearchValue("")}
                className="flex items-center justify-between w-full"
              >
                <span className="text-sm md:text-base">{car.title}</span>
                <div className="background relative w-14 h-14 flex justify-center items-center rounded">
                  <Image
                    src={car.coverImage}
                    width={50}
                    height={50}
                    alt={car.title}
                  />
                </div>
              </Link>
            </div>
          );
        })
      ) : (
        <p className="text-sm">No car found !!</p>
      )}
    </div>
  );
};
