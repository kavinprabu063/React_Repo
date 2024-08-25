import React, { useEffect,state } from 'react';
import axios from "axios";

function Posts() {
    const [posts,setPosts] = useState([])

    useEffect(() =>{
axios.get("https://jsonplaceholder.typicode.com/posts").then(data=>setPosts(response.data)).catch(err=>console.log(err))
    },[]);



  return <div>{posts.map((post,index)=>{console.log(post)})}</div>
}

export default Posts