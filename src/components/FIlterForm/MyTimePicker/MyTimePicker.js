import { LocalizationProvider, MobileTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function MyTimePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileTimePicker
        inputVariant="outlined"
        views={["hours", "minutes"]}
        sx={{
          maxWidth: "87px",
          "& .MuiInputBase-input": { fontSize: "12px", padding: "0" ,color:"#90A3BF"},
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: "none",
            fontSize: "12px",
          },
        }}
        ampm={false}
      />
    </LocalizationProvider>
  );
}

export default MyTimePicker;
