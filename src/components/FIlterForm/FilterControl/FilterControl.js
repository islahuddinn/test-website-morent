import MyDatePicker from "../MyDatePicker/MyDatePicker";
import MyLocationPicker from "../MyLocationPicker/MyLocationPicker";
import MyTimePicker from "../MyTimePicker/MyTimePicker";

const FilterControl = ({ title,cities,location,setLocation }) => {
  return (
    <div className="bg-white p-4 rounded-[10px] w-full max-w-[582px]">
      <div className="mb-6">
        <div className="flex items-center gap-x-2">
          <span className=" bg-primary-500 bg-opacity-[30%]  rounded-full w-4 h-4 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-primary-500 inline-block"></span>
          </span>
          <h2 className="text-base text-secondary-500 font-semibold">
            {title}
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-between gap-x-3">
        {/* LocationPicker */}
        <div className="w-full">
          <label className="block text-base font-bold">Location</label>
          <MyLocationPicker cities={cities} location={location} setLocation={setLocation}/>
        </div>
        {/* DatePicker */}
        <div className="border-r border-l px-5 w-full">
          <label className="block text-base font-bold mb-2">Date</label>
          <MyDatePicker />
        </div>
        {/* TimePicker */}
        <div className="justify-self-start w-full">
          <label className="block text-base font-bold mb-2">Time</label>
          <MyTimePicker />
        </div>
      </div>
    </div>
  );
};

export default FilterControl;
