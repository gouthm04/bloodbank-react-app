import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ViewDonor = () => {
    const [data,changeData] = useState([])

    const fetchData = () => {
        axios.get("https://host-demo-app.onrender.com/api/donors")
        .then(
            (response) => {
                changeData(response.data)
            },[]
        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        },[]
    )
  return (
    <div>
        
        <div className="container mt-3">
            <div className="row">
                <div className="col-12">
                   <table className="table table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Blood Group</th>
                                <th scope="col">Phone</th>
                                <th scope="col">City</th>
                                <th scope="col">Weight (kg)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{value.donor_name}</td>
                                        <td>{value.age}</td>
                                        <td>{value.gender}</td>
                                        <td>{value.blood_group}</td>
                                        <td>{value.phone}</td>
                                        <td>{value.city}</td>
                                        <td>{value.weight_kg}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewDonor