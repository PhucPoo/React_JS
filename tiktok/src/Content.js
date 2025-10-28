import { useState, memo } from 'react';

// 1. memo() -> Higher Order Component (HOC)
// 2. useCalback()

// Hooks
// HOC
// Render props

// thằng memo nó sử dụng toán tử === để so sánh thằng con với thằng cha nếu không có gì thay đổi thì thằng con sẽ ko bị re-render
// sử dụng memo chỉ khi mà thằng con không sử dụng props của thằng cha mà vẫn bị re-render

function Content() {
    return(
        <h1>Anh em PhucPoo</h1>
    )
}
export default memo(Content);