import React, {useContext} from 'react';
import classNames from 'classnames';
import optionActions from '../context/optionActions';
import {OptionDispatchContext} from '../context/OptionContext';
import './ToolRowOption.scss';

const ToolRowOption = (props) => {
  const {toolKey, name, link, icon, starred, index} = props;
  const dispatch = useContext(OptionDispatchContext);
  const background = classNames({ OddRow: index % 2, EvenRow: !(index % 2) });
  let star;
  if(starred) {
    star = <img src="assets/img/star-filled.png" onClick={() => dispatch(optionActions.unstarTool(toolKey))} alt="starred" />
  } else {
    star = <img src="assets/img/star.png" onClick={() => dispatch(optionActions.starTool(toolKey))} alt="unstarred" />
  }

  return (
    <div className={`ToolRowOption ${background}`}>
      <div className="ToolIconColumn">
        <img src={icon} className="ToolIcon" alt={name} />
      </div>
      <div className="ToolDetailColumn">
        <div>{name}</div>
        <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
      </div>
      <div className="ToolStarColumn">
        {star}
      </div>
    </div>
  );
};

export default ToolRowOption;
