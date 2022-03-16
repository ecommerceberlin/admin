import React from 'react';
import { useTranslate } from 'react-admin';

import MuiButton from '@material-ui/core/Button';

const Button = ({variant="contained", color="primary", label="label", ...rest}) => {

  const translate = useTranslate()

  return (
    <MuiButton color={color} variant={variant} {...rest}>{translate(label)}</MuiButton>
  )

}

export default Button
