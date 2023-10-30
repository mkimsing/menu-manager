import React, { useState } from "react";
import {
  FormControlLabel,
  Switch,
  Checkbox,
  Box,
  Typography,
  Modal,
  Button,
} from "@mui/material";
import SearchBar from "@/components/SearchBar";
import { useAllMeals } from "@/api/hooks/useAllMeals";
import { AvailableMenu } from "@/api/types";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
// Object of keyed meal ids mapped to if itme is selected
type CheckboxSelected = {
  [key: string]: boolean;
};

type Props = {
  open: boolean;
  handleClose: () => void;
  selectedMeals: AvailableMenu;
  handleChangeSelected: (selectedId: string, newValue: boolean) => void;
};
export default function MealSelectionModal({
  open,
  handleClose,
  selectedMeals,
  handleChangeSelected,
}: Props) {
  //Fetch meal data
  const { data: allMealsData, isLoading } = useAllMeals();
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
        <Box sx={style} className="overflow-scroll">
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
          {allMealsData &&
            allMealsData
              .filter((option) => {
                return option.name.toLowerCase().includes(value);
              })
              .map((option) => {
                return (
                  <Box
                    key={option.name}
                    className="flex flex-row items-center my-2 py-4"
                  >
                    <Typography variant="body1">{option.name}</Typography>
                    <Checkbox
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      inputProps={{
                        "aria-label": `Checkbox for ${option.name}`,
                      }}
                      checked={selectedMeals[option.id] || false}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeSelected(
                          String(option.id),
                          event.target.checked
                        )
                      }
                    />
                  </Box>
                );
              })}
        </Box>
      </Modal>
    </div>
  );
}
