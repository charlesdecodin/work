import React, { useContext, useEffect } from 'react'
import Context from '../context/context'
import PostContent from './PostContent'

export default function Posts() {
    const { posts, setPosts } = useContext(Context)

    const fetchPosts = async () => {
        const reponse = await fetch('http://localhost:4000/posts');
        const data = await reponse.json()
        setPosts(data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])


    return (

        <div className="d-flex flex-wrap justify-content-center">
            {posts.map((item) => {
                return (
                    <PostContent key={item.id} item={item} />
                )
            })
            }
        </div>







    )
}
