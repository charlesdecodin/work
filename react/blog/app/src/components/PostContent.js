import React from 'react'
import { Link } from "react-router-dom";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

export default function PostContent({ item }) {
    return (
        <div>
            <MDBCol>
                <MDBCard className="m-3" style={{ maxWidth: "500px", backgroundColor: "#0F4C81" }}>

                    <MDBCardImage className="img-fluid" src={`https://picsum.photos/500/300?random=${item.id}`} />
                    <MDBCardBody>
                        <MDBCardTitle style={{ height: "70px", color: 'white' }}>{item.title}</MDBCardTitle>
                        <MDBCardText style={{ height: "130px", color: '#CCCCCC' }}>{item.body}</MDBCardText>
                        <Link to={`/comment/${item.id}`}>
                            <MDBBtn color="white" style={{ color: '#0F4C81' }}>More</MDBBtn>
                        </Link>

                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </div >

    )
}
