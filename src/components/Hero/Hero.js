import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="px-6 md:px-[60px] mb-8 mt-8">
      <div className="flex justify-between md:gap-x-8 container mx-auto max-w-[1440px]">
        <div className="w-full h-[232px] md:w-1/2 md:h-[360px] rounded-[10px] relative p-6">
          <div className="absolute z-20">
            <h1 className="text-base md:text-[32px] md:max-w-[272px] leading-[150%] font-semibold text-white mb-3">
              The Best Platform for Car Rental
            </h1>
            <p className="text-xs md:text-base font-medium text-white max-w-[216px] md:max-w-[284px] leading-5 mb-4">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
            <Link href="/cars">
              <Button
                variant="contained"
                className="bg-primary-500 w-32 md:w-[120px] h-11 capitalize hover:bg-primary-600 text-xs md:text-base font-semibold"
              >
                Rental Car
              </Button>
            </Link>
          </div>
          <Image src="/images/Ads1.png" alt="car" fill/>
        </div>

        <div className="hidden md:block w-1/2 h-12 md:h-[360px] rounded-[10px] relative p-6 ">
          <div className="absolute z-20">
            <h1 className="text-base md:text-[32px] md:max-w-[275px] leading-[150%] font-semibold text-white mb-3">
              Easy way to rent a car at a low price
            </h1>
            <p className="text-xs md:text-base font-medium text-white max-w-[216px] md:max-w-[284px] leading-5 mb-4">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
            <Link href="/cars">
              <Button
                variant="contained"
                className="bg-information-500 w-32 md:w-[120px] h-11 capitalize hover:bg-information-600 text-xs md:text-base font-semibold"
              >
                Rental Car
              </Button>
            </Link>
          </div>
          <Image src="/images/Ads2.png" alt="car" fill />
        </div>
      </div>
    </section>
  );
};

export default Hero;
