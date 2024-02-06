import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { MDBBtn } from 'mdb-react-ui-kit'
import { getAllVideo } from '../services/allAPI'

function View({uploadVideoServerResponse}) {

  const [allVideos,setAllVideos] = useState([])
  const [deletevideostatus, setdeletevideostatus]=useState(false)
  const getAllUploadedVideos = async ()=>{
    const {data} =await getAllVideo() 
    setAllVideos(data);


  }

  useEffect(()=>{
    getAllUploadedVideos()
    setdeletevideostatus(false)
  },[uploadVideoServerResponse,deletevideostatus])

  console.log(allVideos);
  return (
    <>
    <Row>

      { allVideos.length>0?
      allVideos.map((video)=>(
        <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard displayData={video} setdeletevideostatus={setdeletevideostatus}/>
        </Col>
  

      )): <p className='fw-bolder text-danger fs-5'>Nothing to Display</p>
      }


    </Row>
    </>
  )
}

export default View