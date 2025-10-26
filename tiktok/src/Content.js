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

const tabs = ['posts', 'comments', 'albums'];

function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState("posts");



    useEffect(() => {


        console.log('Title changed');
    
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            });
       
    }, [type]);

    return (
        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? { color: '#fff', backgroundColor: '#333' } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}

            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title|| post.name}</li>
                ))}
            </ul>

        </div>
    );
}

export default Content;