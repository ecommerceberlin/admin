import React, { Component } from 'react';


import { crudGetList } from 'react-admin';
import debounce from 'lodash/debounce';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import dataProvider from '../api/httpClient';

class EmailForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      senderName: '',
      senderEmail: '',
      subject: '',
      text: '',
      template_id: 0
    };

    this.onChange = debounce(this.props.createMessage, 500);
  }

  handleChange = name => event => {
    const { templates } = this.props;

    const value = event.target.value;

    this.setState({ [name]: value });

    if (name === 'template_id') {
      //get template data... update subject and message!
      this.setState({
        subject: `${value} subject`,
        text: `${value} text`
      });
    }
  };

  componentWillMount() {
    const { crudGetList, event } = this.props;

    crudGetList(
      'templates',
      { page: 1, perPage: 1000 },
      { field: 'id', order: 'ASC' },
      { event_id: event.id }
    );
  }

  componentDidUpdate(prevProps) {
    const { template_id, ...rest } = this.state;
    this.onChange(rest);
  }

  templates() {
    const { data, list } = this.props.templates;

    if (!'ids' in list || !Array.isArray(list.ids)) {
      return [];
    }

    return list.ids.map(id => (
      <MenuItem key={data[id].id} value={data[id].id}>
        {data[id].name}
      </MenuItem>
    ));
  }

  render() {
    return (
      <div>
        <FormControl>
          <InputLabel htmlFor="age-simple">Template</InputLabel>
          <Select
            value={this.state.template_id}
            onChange={this.handleChange('template_id')}
          >
            <MenuItem value={0}>
              <em>None</em>
            </MenuItem>
            {this.templates()}
          </Select>
        </FormControl>

        <TextField
          id="sender"
          label="Sender Name"
          fullWidth
          value={this.state.senderName}
          onChange={this.handleChange('senderName')}
          //className={classes.textField}
          margin="normal"
        />

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
          rows="8"
          rowsMax="15"
          value={this.state.text}
          onChange={this.handleChange('text')}
          //className={classes.textField}
          margin="normal"
        />
      </div>
    );
  }
}

EmailForm.defaultProps = {
  templates: {},
  event: {}
};

export default EmailForm


// connect(
//   state => ({
//     event: state.app.event,
//     templates: state.admin.resources.templates
//   }),
//   { createMessage, crudGetList }
// )();
