import React from 'react';
import {MdOutlineQuestionMark as Question} from "react-icons/md";

const NullCheck = (value, color) => {
  return value || <Question style={{ color: color ||   "#535bf2" }} className='question'/>;
};

export default NullCheck;