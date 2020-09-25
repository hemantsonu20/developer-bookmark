import React from 'react';
import classNames from 'classnames';

import './ToolRow.scss';

const openLink = (link) => {
  console.log('openLink', link);
  window.open(link, '_blank', 'noopener,noreferrer');
};

const ToolRow = (props) => {
  const { name, link, icon, index } = props;
  const background = classNames({ OddRow: index % 2, EvenRow: !(index % 2) });

  return (
    <div className={`ToolRow ${background}`} onClick={() => openLink(link)}>
      <div className="ToolIconColumn">
        <img src={icon} className="ToolIcon" alt={name} />
      </div>
      <div className="ToolDetailColumn">{name}</div>
    </div>
  );
};

export default ToolRow;
