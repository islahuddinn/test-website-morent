import VisaIcon from "@/common/icons/VisaIcon";
import PaypalIcon from "@/common/icons/PaypalIcon";
import BitcoinIcon from "@/common/icons/BitcoinIcon";
import { useState } from "react";

const PaymentMethodForm = () => {
  const [selectedPayment, setSelectedPayment] = useState("");

  return (
    <form className="bg-white p-4 md:p-6 rounded-[10px] md:order-1 mb-8">
      <div className="flex justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="font-bold md:text-xl mb-1">Payment Method</h2>
          <p className="text-xs md:text-sm font-medium text-secondary-300">
            Please enter your payment method
          </p>
        </div>
        <span className="text-xs md:text-sm font-medium text-secondary-300">
          Step 3 of 4
        </span>
      </div>
      <PaymentMethod
        icon={<VisaIcon />}
        label="Credit Card"
        value="visa"
        selectedPayment={selectedPayment}
        setSelectedPayment={setSelectedPayment}
      />
      <PaymentMethod
        icon={<PaypalIcon />}
        label="PayPal"
        value="paypal"
        selectedPayment={selectedPayment}
        setSelectedPayment={setSelectedPayment}
      />
      <PaymentMethod
        icon={<BitcoinIcon />}
        label="Bitcoin"
        value="bitcoin"
        selectedPayment={selectedPayment}
        setSelectedPayment={setSelectedPayment}
      />
    </form>
  );
};

export default PaymentMethodForm;

const PaymentMethod = ({
  icon,
  label,
  value,
  selectedPayment,
  setSelectedPayment,
}) => {
  const handleChange = (e) => {
    setSelectedPayment(e.target.value);
    console.log(selectedPayment);
  };

  return (
    <section className="bg-gray-100 p-6 rounded-[10px] mb-6">
      <div className={`flex items-center justify-between ${selectedPayment === value ? "mb-8":""}`}>
        <div className="flex items-center">
          <input
            type="radio"
            name="payment-method"
            id={value}
            value={value}
            checked={selectedPayment === value}
            onChange={handleChange}
            className="mr-2 w-6 h-6 appearance-none bg-white rounded-full border-[1.5px] border-secondary-300 checked:w-4 checked:h-4 checked:border-4 checked:border-primary-200 checked:bg-primary-500"
          />
          <label htmlFor={value} className="cursor-pointer font-semibold">
            {label}
          </label>
        </div>
        {icon}
      </div>

      <div className={`grid grid-cols-2 md:gap-x-8 ${selectedPayment === value ? "" :"hidden"}`}>
        <div className="col-span-2 md:col-span-1">
          <label className="block mb-3 font-semibold">Card Number</label>
          <input
            type="number"
            placeholder="Card Number"
            className=" h-14 rounded-lg w-full px-6 mb-5 placeholder:text-xs placeholder:font-medium outline-none text-sm md:text-base"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="block mb-3 font-semibold">Expiration Date</label>
          <input
            type="date"
            placeholder="Your name"
            className=" h-14 rounded-lg w-full px-6 mb-5 font-medium outline-none text-xs uppercase text-gray-400"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="block mb-3 font-semibold">CardHolder</label>
          <input
            type="text"
            placeholder="Cardholder"
            className=" h-14 rounded-lg w-full px-6 mb-5 placeholder:text-xs placeholder:font-medium outline-none text-sm md:text-base"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="block mb-3 font-semibold">CVC</label>
          <input
            type="text"
            placeholder="cvc"
            className=" h-14 rounded-lg w-full px-6 mb-5 placeholder:text-xs placeholder:font-medium outline-none text-sm md:text-base"
          />
        </div>
      </div>
    </section>
  );
};
