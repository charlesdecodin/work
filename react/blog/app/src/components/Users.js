import React, { useContext, useEffect } from 'react'
import Context from "../context/context"
import { Link } from "react-router-dom";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

export default function Users() {
    const { users, setUsers } = useContext(Context)

    const fetchUsers = async () => {
        const reponse = await fetch('http://localhost:4000/users');
        const data = await reponse.json()
        setUsers(data)
        console.log("fetchdata");
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className="d-flex flex-wrap justify-content-center">
            {users.map((item) => {
                return (
                    <div>
                        <MDBCol className="m-4">
                            <MDBCard key={item.id} style={{ width: "22rem" }}>
                                <MDBCardImage className="img-fluid" src={`https://picsum.photos/500/300?random=${item.id}`} waves />
                                <MDBCardBody>
                                    <MDBCardTitle>{item.name}</MDBCardTitle>
                                    <MDBCardText>
                                        <p>{item.website}</p>
                                        <p>{item.company.name}</p>
                                        <p>{item.company.catchPhrase}</p>
                                    </MDBCardText>
                                    <Link to={`/${item.id}`}>
                                        <MDBBtn color="#e0e0e0 grey lighten-2" style={{ color: "#0d47a1" }}>Profil</MDBBtn>
                                    </Link>

                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </div>


                )
            })}
        </div>
    )
}
