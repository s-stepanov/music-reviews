import React from 'react';
import TextField from "@material-ui/core/es/TextField/TextField";

export const renderTextArea = ({
                           input,
                           label,
                           meta: { touched, error },
                           ...custom
                         }) => (
  <TextField
    error={touched && error}
    {...input}
    {...custom}
  />
);