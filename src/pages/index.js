import Hero from "@/components/Hero/Hero";
import Head from "next/head";
import FilterForm from "@/components/FIlterForm/index.js";
import getAllCarsService from "@/services/getAllCarsService";
import http from "@/services/httpService";
import Card from "@/components/Card/Card";
import Link from "next/link";
import getCitiesService from "@/services/getlCitiesService";

export default function Home({ popularCars, recomendationCar, cities }) {
  return (
    <>
      <Head>
        <title>MORENT</title>
        <meta name="description" content="This is a car rental app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto max-w-[1440px]">
        <Hero />

        {/* Filter Section */}
        <section className="px-4 md:px-[60px]  mb-9 ">
          <FilterForm cities={cities} />
        </section>

        {/* popular cars section */}
        <section className="px-4 md:px-[60px]  mb-9 ">
          <div className="flex justify-between items-center mb-5 md:mb-[26px]">
            <h2 className="text-secondary-300 font-semibold text-sm md:text-base">
              Popular Car
            </h2>
            <Link
              href="/cars?sort=popular"
              className="text-primary-500 text-xs md:text-base font-semibold"
            >
              View All
            </Link>
          </div>
          <div className="flex gap-x-8 overflow-auto">
            {popularCars.map((car) => {
              return <Card key={car._id} car={car} />;
            })}
          </div>
        </section>

        {/* recomendationCar section */}
        <section className="px-4 md:px-[60px]  mb-9">
          <div className="flex justify-between items-center mb-5 md:mb-[26px]">
            <h2 className="text-secondary-300 font-semibold text-sm md:text-base">
              Recomendation Car
            </h2>
            <Link
              href="/cars?sort=newest"
              className="text-primary-500 text-xs md:text-base font-semibold"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-8 gap-8 mb-12 md:mb-16">
            {recomendationCar.map((car) => {
              return <Card key={car._id} car={car} gridCols />;
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const { data } = await http.get("/cars?sort=popular&limit=4", {
    headers: {
      Cookie: req.headers.cookie || "",
    },
  });

  const { data: recomendationCar } = await http.get(
    "/cars?sort=newest&limit=8",
    {
      headers: {
        Cookie: req.headers.cookie || "",
      },
    }
  );

  const { data: citiesData } = await getCitiesService(req);
  return {
    props: {
      popularCars: data.data.docs,
      recomendationCar: recomendationCar.data.docs,
      cities: citiesData.data,
    },
  };
}
