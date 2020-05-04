import React, { useContext, useEffect, useState } from 'react'
import Context from '../context/context'

export default function Comment({ id }) {
    const [uniquePost, setUniquePost] = useState({})
    const { comments, setComments } = useContext(Context)


    const fetchComments = async () => {
        const reponse = await fetch(`http://localhost:4000/comments?postId=${id}`);
        const data = await reponse.json()
        setComments(data)
    }
    const fetchPost = async () => {
        const reponse = await fetch(`http://localhost:4000/posts/${id}`);
        const data = await reponse.json()
        setUniquePost(data)
    }


    useEffect(() => {
        fetchComments()
        fetchPost()
    }, [])

    console.log(uniquePost);

    return (
        <>
            <div>
                <img src={`https://picsum.photos/2000/600?random=${uniquePost.id}`} alt="randomPic" />
                <h2 className="text-center m-4 h3">{uniquePost.title}</h2>
                <p className="m-3">{uniquePost.body}{uniquePost.body}{uniquePost.body}{uniquePost.body}{uniquePost.body}</p>
            </div>
            <div className="list-group list-group-flush" style={{ backgroundColor: '#FEFEFE' }}>
                <p className="h4 list-group-item">Commentaires</p>
                {
                    comments.map((item) =>
                        <div className="list-group-item" key={item.id}>
                            <p className="h6">{item.name}</p>
                            <p>{item.body}</p>
                        </div>
                    )
                }
            </div>

        </>


    )
}
