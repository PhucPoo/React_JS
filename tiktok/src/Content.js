import { use, useEffect, useState } from 'react';


// Event: Add / Remove event Listener
// Observer pattern: Subscribe/Unsubscribe
// Closure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted/Unmounted
// Call API

/***
 * 1.Update DOM
 * _F8 blog title
 * 2. Call API
 * 3.Listen DOM events
 * _Scroll
 * _Resize
 * 4. Cleanup
 * _Remove listeners/ unsubscribe
 * _Clear timers  
 */
//1. useEffect(callback)
// _Gọi call back mỗi khi component re-render
// _ Gọi callback mỗi khi component thêm element vào DOM
// 2. useEffect(callback, [])
// _ Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [deps])
// _ Callback được gọi mỗi khi deps thay đổi

// 1.callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi unmounted
const tabs = ['posts', 'comments', 'albums'];

function Content() {
   const [width,setWidth]=useState(window.innerWidth)

   useEffect(()=>{
        const handleResize=() => {
            setWidth(window.innerWidth)
        }
    window.addEventListener('resize',handleResize)
    
    return()=>{
        window.removeEventListener('resize',handleResize)
    }
   })

    return (
        <div>
            <h1>{width}</h1>

        </div>
    );
}

export default Content;