import React from 'react';
import createBlockStyleButton from '../../utils/createBlockStyleButton';

export default createBlockStyleButton({
  blockType: 'unstyled',
  customClass: 'textButton',
  children: (
    <span>PARAGRAPH</span>
  ),
});
