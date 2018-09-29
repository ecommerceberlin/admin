import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { createMessage } from '../redux';
import debounce from 'lodash/debounce';

class EmailForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: '',
      text: ''
    };

    this.onChange = debounce(this.props.createMessage, 500);
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  componentDidUpdate() {
    this.onChange(this.state);
  }

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

export default connect(
  null,
  { createMessage }
)(EmailForm);
