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

// 1.callback luôn được gọi sau khi component mounted

function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            });
    },[])

    return (
        <div>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            {console.log('Render')}

            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>

        </div>
    );
}

export default Content;