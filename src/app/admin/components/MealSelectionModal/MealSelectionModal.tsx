import * as React from "react";
import {
  FormControlLabel,
  Switch,
  Checkbox,
  Box,
  Typography,
  Modal,
} from "@mui/material";
import SearchBar from "@/components/SearchBar";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type Props = {
  open: boolean;
  handleClose: () => void;
  mealOptions: {
    [key: string]: string | number;
    name: string;
  }[];
};
export default function MealSelectionModal({
  open,
  handleClose,
  mealOptions,
}: Props) {
  const [value, setValue] = React.useState<string>("");
  const onChangeSearch = (newValue: string) => {
    setValue(newValue);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5">Select available meal options</Typography>

          <SearchBar
            onChangeText={onChangeSearch}
            value={value}
            onPressClear={() => {
              setValue("");
            }}
          />
          <Box>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Include basic meal options"
            />
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Allow custom request field"
            />
          </Box>
          {mealOptions &&
            mealOptions
              .filter((option) => {
                return option.name.toLowerCase().includes(value);
              })
              .map((option) => {
                const label = { inputProps: { "aria-label": "Checkbox demo" } };
                return (
                  <Box
                    key={option.name}
                    className="flex flex-row items-center my-2 py-4"
                  >
                    <Typography variant="body1">{option.name}</Typography>
                    <Checkbox
                      {...label}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                    />
                  </Box>
                );
              })}
        </Box>
      </Modal>
    </div>
  );
}
