import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AutocompleteSearchBar from "@/components/AutocompleteSearchBar";

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
  searchValue: string;
  onChangeSearch: (newValue: string | null) => void;
};
export default function MealSelectionModal({
  open,
  handleClose,
  mealOptions,
  searchValue,
  onChangeSearch,
}: Props) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box></Box>
          <AutocompleteSearchBar
            autocompleteOptions={mealOptions}
            value={searchValue}
            onChange={onChangeSearch}
          />
          {mealOptions &&
            mealOptions.map((option) => {
              return (
                <Box key={option.name}>
                  <Typography variant="body1">{option.description}</Typography>
                </Box>
              );
            })}
        </Box>
      </Modal>
    </div>
  );
}
