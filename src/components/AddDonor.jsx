import React from 'react'
import NavBar from './NavBar'

const AddDonor = () => {
  return (
    <div>
        <NavBar/>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <div className="row">

              <div className="col-12 col-sm-6 mb-3">
                <label className="form-label">Donor Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="donor_name"
                  required
                />
              </div>

              <div className="col-12 col-sm-6 mb-3">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  min="18"
                  max="65"
                  required
                />
              </div>

              <div className="col-12 col-sm-6 mb-3">
                <label className="form-label">Gender</label>
                <select
                  className="form-select"
                  name="gender"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="col-12 col-sm-6 mb-3">
                <label className="form-label">Blood Group</label>
                <select
                  className="form-select"
                  name="blood_group"
                  required
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>

              <div className="col-12 col-sm-6 mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  required
                />
              </div>

              <div className="col-12 col-sm-6 mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                />
              </div>

              <div className="col-12 col-sm-6 mb-3">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  required
                />
              </div>

              <div className="col-12 col-sm-6 mb-3">
                <label className="form-label">Weight (kg)</label>
                <input
                  type="number"
                  className="form-control"
                  name="weight_kg"
                  min="50"
                  required
                />
              </div>

              <div className="col-12 col-sm-6 mb-3">
                <label className="form-label">Last Donation Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="last_donation_date"
                />
              </div>
              <div className="col-12 col-sm-12 mb-3">
                <button className="btn btn-primary">Submit</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddDonor