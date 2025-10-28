import { useState, memo } from 'react';

// 1. memo() -> Higher Order Component (HOC)
// 2. useCalback()
// _Reference types
// _React memo()
function Content({onIncrease}) {
    return (
        <>
            <h1>Anh em PhucPoo</h1>
            <button
                onClick={onIncrease}
            >
                Click me!
            </button>
        </>

    )
}
export default memo(Content);