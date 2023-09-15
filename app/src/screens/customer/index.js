import React from "react";
import { MatTable } from "../../ui-components/shared/table";
import { Grid } from "@mui/material";

function Customer() {
  const header = [
    {
      text: "aaaa",
      column: "aaa",
    },
    {
      text: "bbbb",
      column: "bbb",
    },
  ];

  const rows = [
    { aaa: "asdada", bbb: "ewaad" },
    { aaa: "asdada", bbb: "ewaad" },
    { aaa: "asdada", bbb: "ewaad" },
    { aaa: "asdada", bbb: "ewaad" },
  ];

  return (
    <Grid container className="page-grid">
      <Grid item xs={12}>
        <MatTable headerConfig={header} rows={rows} />
      </Grid>
    </Grid>
  );
}

export { Customer };
