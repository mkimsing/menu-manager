import React, { useState, useEffect } from "react";
import {
  CircularProgress,
  Box,
  TextField,
  IconButton,
  Paper,
  InputBase,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
type Props = {
  value: string;
  onChangeText: (value: string) => void;
  onPressClear: () => void;
  style?: any;
};

export default function SearchBar({
  value,
  onChangeText,
  onPressClear,
}: Props) {
  const [input, setInput] = useState(value);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timeoutFunction = () => {
      onChangeText(input);
      setLoading(false);
    };

    const timeout = setTimeout(timeoutFunction, 500);
    if (input) {
      setLoading(true);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [input, onChangeText]);

  const onClear = () => {
    setInput("");
    onPressClear();
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
    >
      <SearchIcon />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        value={input}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setInput(event.target.value);
        }}
        inputProps={{ "aria-label": "Search bar" }}
      />

      {Boolean(value) && !loading && (
        <IconButton onClick={onClear} aria-label="clear" size="small">
          <ClearIcon />
        </IconButton>
      )}
      {loading && <CircularProgress size={20} />}
    </Paper>
  );
}
