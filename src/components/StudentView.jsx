import React, { useEffect, useState } from 'react'
import StudentHeader from './StudentHeader'
import axios from 'axios'

const StudentView = () => {

  const[data, changeData] = useState([])

  const fetchData=()=>{
       axios.post("http://127.0.0.1:8000/api/viewAll/").then(
        (response)=>{
               changeData(response.data)
        }
       )
  }

  useEffect(()=>{fetchData()},[])

  return (
    <div>
        <StudentHeader/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                  
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">Roll no</th>
      <th scope="col">Name</th>
      <th scope="col">Admission No</th>
      <th scope="col">College</th>
    </tr>
  </thead>
  <tbody>
    {data.map(
      (value,i)=>{
          return <tr>
          <th scope="row">{value.rollno}</th>
          <td>{value.name}</td>
          <td>{value.admno}</td>
          <td>{value.college}</td>
        </tr>
      }
    )}
    
  </tbody>
</table>
                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentView