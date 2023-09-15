import * as React from 'react';
import Chip from '@mui/material/Chip';

export default function TagChip({ label, variant, style }) {
  return <Chip style={{ ...style }} label={label} variant={variant} />;
}
