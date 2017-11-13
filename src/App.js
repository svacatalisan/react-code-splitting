import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { withCookies } from 'react-cookie';
import './App.css';
import { build } from './utils/componentBuilder';

const config = {
  "page": {
    "pageTitle": "Hello page",
    "accessibility": {
      "privateRoute": false, // check if a page is private or not
      "criteria":[] // if a page is private check the criteria before rendering, ex:is user is logged in
    }
  },
  "components": [
    {
      "id": "test1",
      "key": "uniqueKey1",
      "type": "Image",
      "staticProps": {},
      "initState": {},
      "validators": [],
      "handlers": []
    },
    {
      "id": "test2",
      "key": "uniqueKey2",
      "type": "TextField",
      "staticProps": {},
      "initState": {},
      "validators": [],
      "handlers": []
    },
    {
      "id": "test3",
      "key": "uniqueKey3",
      "type": "TextField",
      "staticProps": {},
      "initState": {},
      "validators": [],
      "handlers": []
    },
    {
      "id": "test4",
      "key": "uniqueKey4",
      "type": "RaisedButton",
      "staticProps": {},
      "initState": {},
      "validators": [],
      "handlers": []
    }
  ],
  "rules": []
};


class App extends Component {
  constructor(props) {
    super(props);
  }

  renderChildren() {
    return build(config);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {this.renderChildren()}
        </div>
      </div>
    );
  }
}

export default withCookies(translate('translations')(App));
