import React, { useRef, useState, useEffect } from "react";
import { DialogWrapper } from "../../wrapper/dialogbox";
import { dispalyText } from "../../../appConstant";
import { Grid, Divider } from "@mui/material";
import { MulButton, TextBox } from "../../atom";

function CreateCutomerDialog({ open, handleClose }) {
  const inputFile = useRef(null);

  const handleBrowser = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  useEffect(() => {
    if (!file) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return (
    <DialogWrapper
      maxWidth="md"
      handleClose={handleClose}
      open={open}
      title={dispalyText.createCustomer}
      confirmText={dispalyText.create}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} textAlign={"center"}>
              <input
                type="file"
                ref={inputFile}
                style={{ display: "none" }}
                onChange={handleChange}
              />
              <img
                style={{
                  borderRadius: "50%",
                  border: "2px solid black",
                  width: 150,
                  height: 150,
                }}
                src={preview ? preview : "/assets/placeholders/noimage.png"}
                alt="upload logo"
              />
            </Grid>
            <Grid item xs={6}>
              <MulButton
                child="Remove"
                variant="contained"
                style={{ float: "right" }}
                handleClick={() => {
                  setFile();
                  setPreview();
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <MulButton
                child="Browse"
                variant="contained"
                handleClick={handleBrowser}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <TextBox label={"Customer Name"} />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextBox label={"Email domain"} />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextBox label={"Email"} />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextBox label={"Phone Number"} />
            </Grid>
            <Grid item xs={12}>
              <TextBox label={"Address"} />
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextBox label={"First Name"} />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextBox label={"Last Name"} />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextBox label={"Email"} />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextBox label={"Phone Number"} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DialogWrapper>
  );
}

export { CreateCutomerDialog };
