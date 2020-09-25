import React from 'react';
import {
  OptionContextProvider,
  OptionDispatchContext,
} from '../context/OptionContext';
import StarredToolList from './StarredToolList';
import ToolList from './ToolList';
import Divider from '../../../common/components/Divider';

import './Options.scss';
import { useContext } from 'react';

const Options = () => {
  return (
    <OptionContextProvider>
      <div className="OptionsContainer">
        <div className="OptionsHeader">Developer Bookmark</div>
        <Divider />
        <StarredToolList />
        <Divider />
        <ToolList />
      </div>
    </OptionContextProvider>
  );
};

export default Options;
