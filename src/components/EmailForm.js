import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class EmailForm extends Component {
  state = {
    subject: '',
    text: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <TextField
          id="subject"
          label="Subject"
          fullWidth
          value={this.state.subject}
          onChange={this.handleChange('subject')}
          //className={classes.textField}
          margin="normal"
        />

        <TextField
          id="content"
          label="Content"
          multiline
          fullWidth
          rowsMax="10"
          value={this.state.text}
          onChange={this.handleChange('text')}
          //className={classes.textField}
          margin="normal"
        />
      </div>
    );
  }
}

export default EmailForm;
