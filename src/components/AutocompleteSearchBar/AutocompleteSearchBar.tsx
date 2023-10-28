import React from "react";

import { Chip, TextField, Autocomplete } from "@mui/material";
type Props = {
  autocompleteOptions: { [key: string]: string | number; name: string }[];
  value: string;
  onChange: (newValue: string | null) => void;
};
export default function AutocompleteSearchBar({
  autocompleteOptions,
  value,
  onChange,
}: Props) {
  return (
    <Autocomplete
      freeSolo
      options={autocompleteOptions.map((option) => option.name)}
      value={value}
      onChange={(event, newValue: string | null) => onChange(newValue)}
      renderOption={(props, option) => {
        return (
          <li {...props} key={option}>
            {option}
          </li>
        );
      }}
      disableClearable
      renderTags={(tagValue, getTagProps) => {
        return tagValue.map((option, index) => (
          <Chip {...getTagProps({ index })} key={option} label={option} />
        ));
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search input"
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
    />
  );
}
