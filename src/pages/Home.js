import React from "react";
import { Button, TextField } from "@mui/material";

function App() {
  return (
    <div className="flex flex-col gap-10 items-center mt-72 w-full">
      <p className="font-bold text-3xl">Hello, React with Webpack!</p>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained" color="primary">
        Hello, MUI!
      </Button>
    </div>
  );
}

export default App;
