import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function MyDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <MobileDatePicker
        inputVariant="outlined"
        format="LL"
        sx={{
          maxWidth: "87px",
          "& .MuiInputBase-input": { fontSize: "12px", padding: "0" ,color:"#90A3BF"},
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: "none",
            fontSize: "12px",
          },
        }}
      />
    </LocalizationProvider>
  );
}

export default MyDatePicker;
