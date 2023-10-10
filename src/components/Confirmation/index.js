import { Button } from "@mui/material";
import SafeIcon from "@/common/icons/SafeIcon";

const Confirmation = () => {
  return (
    <form className="bg-white p-4 md:p-6 rounded-[10px] md:order-1 md:flex-1 mb-8">
      <div className="flex justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="font-bold md:text-xl mb-1">Confirmation</h2>

          <p className="text-xs md:text-sm font-medium text-secondary-300">
            We are getting to the end. Just few clicks and your rental is ready!
          </p>
        </div>
        <span className="text-xs md:text-sm font-medium text-secondary-300">
          Step 4 of 4
        </span>
      </div>

      <div className="bg-gray-100 py-[10px] px-4 md:py-4 md:px-8 rounded-[10px] mb-6 flex items-center gap-x-4 md:gap-x-5">
        <input
          type="checkbox"
          id="a-email"
          className="w-4 h-4 md:w-6 md:h-6 border-secondary-300"
        />
        <label htmlFor="a-email" className="cursor-pointer text-xs md:text-base w-full">
          I agree with sending an Marketing and newsletter emails. No spam,
          promissed!
        </label>
      </div>
      <div className="bg-gray-100 py-[10px] px-4 md:py-4 md:px-8 rounded-[10px] mb-8 flex items-center gap-x-4 md:gap-x-5">
        <input
          type="checkbox"
          id="a-privacy"
          className="w-4 h-4 md:w-6 md:h-6 border-secondary-300"
        />
        <label htmlFor="a-privacy" className="cursor-pointer text-xs md:text-base w-full        ">
          I agree with our terms and conditions and privacy policy.
        </label>
      </div>

      <Button
        variant="contained"
        className="bg-primary-500 w-32 md:w-[140px] h-14 capitalize hover:bg-primary-600 text-xs md:text-base font-semibold rounded-[10px] mb-8"
      >
        Rental Now
      </Button>

      <SafeIcon />
      <p className="font-semibold mb-2 mt-4">All your data are safe</p>
      <p className="text-sm font-medium text-secondary-300">
        We are using the most advanced security to provide you the best
        experience ever.
      </p>
    </form>
  );
};

export default Confirmation;
