import React from 'react';
import createBlockStyleButton from '../../utils/createBlockStyleButton';

export default createBlockStyleButton({
  blockType: 'header-one',
  customClass: 'textButton',
  children: (
    <span>HEADING</span>
  ),
});
