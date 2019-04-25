import React from 'react';
import '../App.css'
import image from '../img.png'

class Body extends React.Component {
  job = this.props.jobsdata

  render() {
    console.log(this.job)
    return (
      <div className="row">
        <div className="col-sm-12">
          <ul style={{listStyleType:'none'}}>
            {
              this.job.map((item, index) => {
                return (
                  <li className="card">
                    <div className="col-sm-2">
                          <img src={image} heigth="100px" width="80px"></img>
                    </div>
                      <div id="div-2" className="col-sm-5 cborder" >
                         <div>{item.Company}</div>
                         <div>{item.Profile}</div>
                    </div>
                    <div id="div-3" className="col-sm-5">
                        <div>Designation:  {item.Designation}</div>
                        <div>Salary:  {item.Salary}</div>
                        <div>Location:<br></br>Type: {item.location.type}</div>
                        <div>{item.location.coordinates[0]}</div>
                        <div>{item.location.coordinates[1]}</div>
                        <div className="btn">
                          <button>Apply</button>
                        </div>
                    </div>
                  </li>
                )
              })
            }
          </ul>

        </div>
      </div>

    )
  }
}
export default Body;