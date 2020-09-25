import React, { Component } from 'react';
import ToolRow from './ToolRow';
import toolService from '../../../services/toolService';
import { filterStarred } from '../../../common/utils';

import './Popup.scss';

class Popup extends Component {
  state = {
    allTools: {},
  };

  constructor() {
    super();
    toolService.getAllTools().then((res) => {
      this.setState({
        allTools: res,
      });
    });
  }

  render() {
    const { allTools } = this.state;
    console.log('allTools', allTools);
    const toolsRows = filterStarred(allTools).map(([key, value], index) => (
      <ToolRow key={key} index={index} {...value} />
    ));

    return (
      <div className="App">
        <div className="AppHeader">
          <div className="AppHeaderName">Developer Bookmark</div>
          <a href="options.html" target="_blank" rel="noopener noreferer">
            <img src="assets/img/settings.png" alt="" />
          </a>
        </div>
        <div className="ToolSection">{toolsRows}</div>
      </div>
    );
  }
}

export default Popup;
