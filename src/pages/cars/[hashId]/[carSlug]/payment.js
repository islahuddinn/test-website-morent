import getOneCarService from "@/services/getOneCarService";
import RentalSummary from "@/components/RentalSummary";
import BillingInfoForm from "@/components/BillingInfo";
import RentalInfoForm from "@/components/RentalInfo";
import PaymentMethodForm from "@/components/PaymentMethod";
import Confirmation from "@/components/Confirmation";
import Head from "next/head";

const PaymentPage = ({ car, cities }) => {
  return (
    <>
      <Head>
        <title>MORENT | Favourites</title>
      </Head>
      <div className="px-4 md:px-6 py-8 md:flex md:items-start gap-x-8 container mx-auto max-w-[1440px]">
        <RentalSummary car={car} />
        <div className="md:flex-1">
          <BillingInfoForm />
          <RentalInfoForm car={car} />
          <PaymentMethodForm />
          <Confirmation />
        </div>
      </div>
    </>
  );
};

export default PaymentPage;

export async function getServerSideProps({ req, query }) {
  const { data } = await getOneCarService(req, query);

  return {
    props: {
      car: data.data,
    },
  };
}
