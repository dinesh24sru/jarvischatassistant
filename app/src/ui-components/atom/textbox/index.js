import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Label from '../lable';

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiFormLabel-root.Mui-focused': {
    color: theme.palette.color.main,
  },
}));

export default function TextBox({
  id = 'standard-textbox',
  label,
  variant = 'outlined',
  fullWidth = true,
  size = 'small',
}) {
  return (
    <>
      <Label variant='subtitle1' label={label} />
      {/* <Typography variant='subtitle1'>{label}</Typography> */}
      <CustomTextField
        id={id}
        // label={label}
        variant={variant}
        fullWidth={fullWidth}
        size={size}
      />
    </>
  );
}
