import { useState, memo } from 'react';
import Paragraph from './SetColor/Paragraph.js';

// 1. memo() -> Higher Order Component (HOC)
// 2. useCalback()
// _Reference types
// _React memo()
function Content() {
    return (
        <>
          <Paragraph  />
        </>

    )
}
export default memo(Content);