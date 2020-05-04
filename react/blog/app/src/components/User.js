import React, { useContext, useEffect } from 'react'
import Context from "../context/context"
import PostContent from "./PostContent"

export default function User({ id }) {
    const { users, user, setUser, posts, setPosts } = useContext(Context)


    const fetchPostsUser = async () => {
        const reponse = await fetch(`http://localhost:4000/posts?userId=${id}`);
        const data = await reponse.json()
        setPosts(data)
        console.log("fetchdata");
    }

    const updateUser = () => {
        setUser(users[id - 1])
    }


    useEffect(() => {
        updateUser()
        fetchPostsUser()
    }, [])



    return (
        <>
            <div className="row" style={{ backgroundColor: 'white' }}>
                <img className='img-fluid col-12' src={`https://picsum.photos/2000/600?random=${user.id}`} alt="randomPic" />
                <div className='col-5 col-md-3 col-lg-3 col-xl-2'>
                    <img className='img-thumbnail img-profil' style={{ borderRadius: "360px", marginLeft: '4vw', marginTop: '-110px', zIndex: '2' }} src={`https://picsum.photos/200/200?random=${user.id}`} alt="" />
                </div>

                <h3 className="col-6 col-md-4 col-lg-3 col-xl-3" style={{ marginLeft: "20px" }}>{user.name}</h3>


                <p className="mt-4 mt-lg-2 text-center col-6 col-lg-2 col-xl-2 offset-xl-1">Website: {user.website}</p>
                <p className="mt-4 mt-lg-2 text-center col-6 col-lg-3 col-xl-3"> Company: {user.company && user.company.name}</p>

                <p className="my-4 text-center col-12 h4">{user.company && user.company.catchPhrase}</p>
            </div>

            <div className="d-flex flex-wrap justify-content-center" >
                {posts.map((item) => {
                    return (

                        <PostContent key={item.id} item={item} />

                    )
                })}
            </div>
        </>
    )
}
