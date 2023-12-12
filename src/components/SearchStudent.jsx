import React, { useState } from 'react'
import StudentHeader from './StudentHeader'
import axios from 'axios'

const SearchStudent = () => {
    const[inputData, changeInputData]=useState({
        "admno":""
        
    })

    const[result, changeResult]=useState([])

    const inputHandel=(event)=>{
         changeInputData({...inputData,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputData)
        axios.post("http://127.0.0.1:8000/api/search/", inputData).then(
              (response)=>{
                       changeResult(response.data)
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
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            
                            <label htmlFor="" className="form-label">Admission No:</label>
                            <input type="text" className="form-control" name='admno' value={inputData.admno} onChange={inputHandel} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-info">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            {result.map(
                (value,i)=>{
                    return <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name:</label>
                                <input type="text" className="form-control" value={value.name}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Roll No:</label>
                                <input type="text" className="form-control" value={value.rollno}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Admission No:</label>
                                <input type="text" className="form-control" value={value.admno} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">College:</label>
                                <input type="text" className="form-control" value={value.college} />
                            </div>
                        </div>
                    </div>
                </div>
                }
            )}
        </div>
    </div>
  )
}

export default SearchStudent