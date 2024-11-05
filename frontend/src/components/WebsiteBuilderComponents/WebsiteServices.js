import React from "react";
import "./WebsiteServices.css";

const WebsiteServices = () => {
  return (
    <div className="WebsiteServicesSection">
      <div className="ServicesSectionContainer">
        <h1 className="text-center pb-4">Our Services</h1>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-12 serviceColumn ">
              <div className="shadow p-3 rounded">
                <h3>Lorem Ipsum</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Animi, et labore? Nam eaque mollitia quisquam modi impedit
                  magnam cumque repudiandae!
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-12 serviceColumn ">
              <div className="shadow p-3 rounded">
                <h3>Lorem Ipsum</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Animi, et labore? Nam eaque mollitia quisquam modi impedit
                  magnam cumque repudiandae!
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-12 serviceColumn ">
              <div className="shadow p-3 rounded">
                <h3>Lorem Ipsum</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Animi, et labore? Nam eaque mollitia quisquam modi impedit
                  magnam cumque repudiandae!
                </p>
              </div>
            </div>
            {/* <div className="col-lg-4 col-sm-12 col-md-12">2 of 3</div>
            <div className="col-lg-4 col-sm-12 col-md-12">3 of 3</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteServices;
