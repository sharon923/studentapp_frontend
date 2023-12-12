import React, { useState } from 'react'
import StudentHeader from './StudentHeader'
import axios from 'axios'

const AddStudent = () => {
    const[inputData, changeInputData]=useState({
        "name":"",
        "admno":"",
        "rollno":"",
        "college":""
    })

    const inputHandel=(event)=>{
         changeInputData({...inputData,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputData)
        axios.post("http://127.0.0.1:8000/api/add/",inputData).then(
            (response)=>{
                 alert(response.data.status)
            }
        )
    }
  return (
    <div>
        <StudentHeader/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-ms-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Name:</label>
                            <input type="text" className="form-control" name='name' value={inputData.name} onChange={inputHandel}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-ms-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Roll No:</label>
                            <input type="text" className="form-control" name='rollno' value={inputData.rollno} onChange={inputHandel} />
                        </div>
                        <div className="col col-12 col-sm-6 col-ms-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Admission No:</label>
                            <input type="text" className="form-control" name='admno' value={inputData.admno} onChange={inputHandel}></input>
                        </div>
                        <div className="col col-12 col-sm-6 col-ms-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">College:</label>
                            <input type="text" className="form-control" name='college' value={inputData.college} onChange={inputHandel}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-ms-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button onClick={readValue} className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent