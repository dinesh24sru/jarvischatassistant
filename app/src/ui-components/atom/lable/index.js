import React from 'react';
import { Typography } from '@mui/material';

export default function Lable({ label, variant }) {
  return <Typography variant={variant}>{label}</Typography>;
}
