

import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';









class EmailForm extends Component {


  render(){

    return (

      <div>


        <TextField
  id="multiline-flexible"
  label="Multiline"
  fullWidth
  //   value={this.state.multiline}
  // onChange={this.handleChange('multiline')}
  //className={classes.textField}
  margin="normal"
  />


  <TextField
id="multiline-flexible"
label="Multiline"
multiline
fullWidth
rowsMax="10"
//   value={this.state.multiline}
// onChange={this.handleChange('multiline')}
//className={classes.textField}
margin="normal"
/>




      </div>


    )
  }
}



export default EmailForm
