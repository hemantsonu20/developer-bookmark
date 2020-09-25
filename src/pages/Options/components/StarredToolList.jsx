import React, { useContext } from 'react';
import { filterStarred } from '../../../common/utils';
import { OptionStateContext } from '../context/OptionContext';
import ToolRowOption from './ToolRowOption';
import './StarredToolList.scss';

const StarredToolList = () => {
  const {
    allTools: { data },
  } = useContext(OptionStateContext);
  console.log('allToolsData', data);
  const starredRows = filterStarred(data).map(([key, value], index) => {
    return <ToolRowOption key={key} index={index} toolKey={key} starred {...value} />;
  });

  return (
    <div className="StarredToolList">
      <div className="StarredToolHeader">Starred Tools</div>
      {starredRows}
    </div>
  );
};

export default StarredToolList;
