import React from 'react';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';

export default function TextBoxWithIcon({
  Icon,
  iconPlace = 'start',
  label,
  value,
  type = 'text',
  handleChange,
}) {
  return (
    <FormControl sx={{ m: 1, width: '25ch' }} variant='outlined'>
      {label && <InputLabel htmlFor='outlined-adornment'>{label}</InputLabel>}
      <OutlinedInput
        id='outlined-adornment-password'
        type={type}
        endAdornment={
          iconPlace === 'end' && (
            <InputAdornment position='end'>
              <IconButton aria-label='toggle' edge={iconPlace}>
                {<Icon />}
              </IconButton>
            </InputAdornment>
          )
        }
        startAdornment={
          iconPlace === 'start' && (
            <InputAdornment position='start'>
              <IconButton
                aria-label='toggle password visibility'
                edge={iconPlace}
              >
                {<Icon />}
              </IconButton>
            </InputAdornment>
          )
        }
        label={label}
        value={value}
        onChange={handleChange}
      />
    </FormControl>
  );
}
