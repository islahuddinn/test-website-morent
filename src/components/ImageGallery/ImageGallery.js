import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ImageGallery = ({ car }) => {
  const [mainImg, setMainImg] = useState("");
  const router = useRouter();

  useEffect(() => {
    setMainImg(car.coverImage);
  }, [router]);

  return (
    <div className="mb-8 md:mb-0 md:w-1/2">
      <div
        className={`w-full min-h-[232px] md:h-[360px] rounded-[10px] p-4 mb-6 relative overflow-hidden ${
          mainImg === car.coverImage
            ? "background flex flex-col justify-between"
            : "bg-red-100"
        }`}
      >
        <div
          className={`text-white ${
            mainImg === car.coverImage ? "block" : "hidden"
          }`}
        >
          <p className="mb-4 text-base sm:text-[32px] font-semibold leading-6 sm:leading-[48px] max-w-[240px] sm:max-w-[372px]">
            {car.cType.title} car with the best design and acceleration
          </p>
          <p className="text-xs sm:text-base font-medium leading-4 sm:leading-6 max-w-[216px] sm:max-w-[284px]">
            Safety and comfort while driving a futuristic and elegant{" "}
            {car.cType.englishTitle} car
          </p>
        </div>
        <figure
          className={` ${
            mainImg === car.coverImage
              ? "relative w-[190px] h-[60px] md:w-[220px] md:h-24 lg:w-[380px] lg:h-[120px] self-center"
              : ""
          }`}
        >
          <Image
            src={mainImg}
            fill
            alt={car.title}
            placeholder="blur"
            blurDataURL={car.coverImage}
          />
        </figure>
      </div>

      {/* Thumbnails */}
      <div className="flex items-center justify-between gap-x-8 ">
        <div
          className="bg-red-300 w-full h-[64px] sm:h-[108px] flex items-center justify-center background rounded-lg cursor-pointer"
          onClick={() => setMainImg(car.coverImage)}
        >
          <figure className="relative w-20 h-[26px] sm:w-[116px] sm:h-9">
            <Image src={car.coverImage} alt="thumbnail1" fill />
          </figure>
        </div>
        <figure
          className="relative h-[64px] w-full sm:h-[108px] rounded-lg overflow-hidden cursor-pointer"
          onClick={() => setMainImg(car.image1)}
        >
          <Image src={car.image1} alt="thumbnail2" fill />
        </figure>
        <figure
          className="relative h-[64px] w-full sm:h-[108px] rounded-lg overflow-hidden cursor-pointer"
          onClick={() => setMainImg(car.image2)}
        >
          <Image src={car.image2} alt="thumbnail2" fill />
        </figure>
      </div>
    </div>
  );
};

export default ImageGallery;
