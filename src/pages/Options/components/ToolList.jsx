import React, { useContext } from 'react';
import { filterUnstarred } from '../../../common/utils';
import { OptionStateContext } from '../context/OptionContext';
import ToolRowOption from './ToolRowOption';
import './ToolList.scss';

const ToolList = () => {
  const {
    allTools: { data },
  } = useContext(OptionStateContext);
  const starredRows = filterUnstarred(data).map(([key, value], index) => {
    return <ToolRowOption key={key} index={index} toolKey={key} {...value} />;
  });

  return (
    <div className="ToolList">
      <div className="ToolHeader">All Tools</div>
      {starredRows}
    </div>
  );
};

export default ToolList;
