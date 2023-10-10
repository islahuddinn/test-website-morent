const BillingInfoForm = () => {
  return (
    <form className="bg-white p-4 md:p-6 rounded-[10px] md:order-1 md:flex-1 mb-8">
      <div className="flex justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="font-bold md:text-xl mb-1">Billing Info</h2>

          <p className="text-xs md:text-sm font-medium text-secondary-300">
            Please enter your billing info
          </p>
        </div>
        <span className="text-xs md:text-sm font-medium text-secondary-300">
          Step 1 of 4
        </span>
      </div>
      <div className="grid grid-cols-2 md:gap-x-8">
        <div className="col-span-2 md:col-span-1">
          <label className="block mb-3 font-semibold">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="bg-gray-100 h-14 rounded-lg w-full px-6 mb-5 placeholder:text-xs placeholder:font-medium outline-none text-sm md:text-base"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="block mb-3 font-semibold">Address</label>
          <input
            type="text"
            placeholder="Your address"
            className="bg-gray-100 h-14 rounded-lg w-full px-6 mb-5 placeholder:text-xs placeholder:font-medium outline-none text-sm md:text-base"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="block mb-3 font-semibold">Phone Number</label>
          <input
            type="text"
            placeholder="Phone number"
            className="bg-gray-100 h-14 rounded-lg w-full px-6 mb-5 placeholder:text-xs placeholder:font-medium outline-none text-sm md:text-base"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="block mb-3 font-semibold">Town / City</label>
          <input
            type="text"
            placeholder="Town or city"
            className="bg-gray-100 h-14 rounded-lg w-full px-6 mb-5 placeholder:text-xs placeholder:font-medium outline-none text-sm md:text-base"
          />
        </div>
      </div>
    </form>
  );
};

export default BillingInfoForm;
