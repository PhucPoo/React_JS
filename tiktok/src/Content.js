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
// 3. Cleanup function luôn được gọi trước khi callback được gọi ()

function Content() {

    const [img, setImg] = useState()

    useEffect(()=>{
        return()=>{
            img && URL.revokeObjectURL(img.avt)
        }
    },[img])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.avt = URL.createObjectURL(file)

        setImg(file)

        return()=>{

        }

    }


    return (
        <div>
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            {img && (<img
                src={img.avt }
                alt=""
            />)}


        </div>
    );
}

export default Content;