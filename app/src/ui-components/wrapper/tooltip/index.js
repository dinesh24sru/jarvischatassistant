import * as React from 'react';
import { Tooltip } from '@mui/material';

export default function Tooltips({ title, children }) {
  return (
    <Tooltip title={title} arrow>
      {children}
    </Tooltip>
  );
}
