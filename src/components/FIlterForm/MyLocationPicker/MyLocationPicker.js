import { MenuItem, Select } from "@mui/material";

const MyLocationPicker = ({
  cities,
  location,
  setLocation,
}) => {
  return (
    <Select
      value={location}
      sx={{
        "& .MuiOutlinedInput-root": {
          padding: 0,
        },
        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        "& .MuiInputBase-input": {
          fontSize: 12,
          padding: 0,
          color: "#90A3BF",
        },
      }}
      inputProps={{ "aria-label": "Without label" }}
      displayEmpty
      className="w-full"
      onChange={(e) => setLocation(e.target.value)}
    >
      <MenuItem value="">
        <em>Your city</em>
      </MenuItem>
      {cities.map((item) => (
        <MenuItem key={item._id} value={item.englishTitle}>
          {item.title}
        </MenuItem>
      ))}
    </Select>
  );
};

export default MyLocationPicker;
