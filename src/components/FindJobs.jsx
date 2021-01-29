import React, {useState} from "react";
import { GrFormDown,GrFormUp } from "react-icons/gr";

const FindJobs=()=>{
    const [show, setShow] = useState(false);
    return(
        <>
        <section class="findJob_section">
        <div className="container-fluid">
          <div className="findJob_row">
            <div className="findJob_col col-5">
              <h2 className="findJob-text">
                Find open jobs
                <br /> and internships
              </h2>
            </div>
            <div className="findJob_col col-7">
              <div className="findJob_section_card">
                <div className="">
                  <h6 className="job_suggested w-100">SUGGESTED SEARCHES</h6>
                </div>
                <div className="btn_group">
                  <div className="btn_container">
                    <button type="button" className="buttons">
                      <h5>Engineering</h5>
                    </button>
                    <button type="button" className="buttons">
                      <h5>Business Development</h5>
                    </button>
                    <button type="button" className="buttons">
                      <h5>Finance</h5>
                    </button>
                  </div>
                  {/* second btn grp */}
                  <div className="btn_container">
                    <button type="button" className="buttons">
                      <h5>Administrative Assistant</h5>
                    </button>
                    <button type="button" className="buttons">
                      <h5>Retail Associate</h5>
                    </button>
                    {/* <button type="button" className="buttons"><h5>Finance</h5></button> */}
                  </div>
                  {/* Third btn group */}
                  <div className="btn_container">
                    <button type="button" className="buttons">
                      <h5>Customer Service</h5>
                    </button>
                    <button type="button" className="buttons">
                      <h5>Operations</h5>
                    </button>
                    <button type="button" className="buttons">
                      <h5>Information Technology</h5>
                    </button>
                  </div>
                  {/* Fourth */}
                  <div className="btn_container">
                    <button type="button" className="buttons">
                      <h5>Marketing</h5>
                    </button>
                    <button type="button" className="buttons">
                      <h5>Human Resources</h5>
                    </button>
                  </div>
                  
                  {/* show btn */}
                  <button class="show_more_btn mt-2 ml-1" id="showmorebtn" onClick={() => setShow(true)}>Show More <GrFormDown /></button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* new */}
      {show ? ( <section className="findMoreJob_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-5"></div>
            <div className="col-6">
            
                    <div className="morejobsdiv">
                    <div className="btn_container">
                      <button
                        type="button"
                        className="buttons"
                        id="hideshowbtn"
                      >
                        <h5>Sales</h5>
                      </button>
                      <button
                        type="button"
                        className="buttons"
                        id="hideshowbtn"
                      >
                        <h5>Program and Project Management</h5>
                      </button>
                      <button
                        type="button"
                        className="buttons"
                        id="hideshowbtn"
                      >
                        <h5>Accounting</h5>
                      </button>
                    </div>
                    {/* second */}
                    <div className="btn_container">
                      <button
                        type="button"
                        className="buttons"
                        id="hideshowbtn"
                      >
                        <h5>Arts and Design</h5>
                      </button>
                      <button
                        type="button"
                        className="buttons"
                        id="hideshowbtn"
                      >
                        <h5>Community and Social Services</h5>
                      </button>            
                    </div>
                    {/* third */}
                    <div className="btn_container">
                      <button
                        type="button"
                        className="buttons"
                        id="hideshowbtn"
                      >
                        <h5>Consulting</h5>
                      </button>
                      <button
                        type="button"
                        className="buttons"
                        id="hideshowbtn"
                      >
                        <h5>Education</h5>
                      </button> 
                      <button
                        type="button"
                        className="buttons"
                        id="hideshowbtn"
                      >
                        <h5>Legal</h5>
                      </button> 
                      <button
                        type="button"
                        className="buttons"
                        id="hideshowbtn"
                      >
                        <h5>Entrepreneurship</h5>
                      </button>            
                    </div>
                    {/* fouth */}
                    <div className="btn_container">
                      <button
                        type="button"
                        className="buttons"
                        id="hideshowbtn"
                      >
                        <h5>Media and Communications</h5>
                      </button>
                      <button
                        type="button"
                        className="buttons"
                        id="hideshowbtn"
                      >
                        <h5>Military and Protective Services</h5>
                      </button>            
                    </div>
                    <div className="btn_container">
                      <button
                        type="button"
                        className="buttons"
                        id="hideshowbtn"
                      >
                        <h5>Product Management</h5>
                      </button>
                      <button
                        type="button"
                        className="buttons"
                        id="hideshowbtn"
                      >
                        <h5>Purchasing</h5>
                      </button> 
                      <button
                        type="button"
                        className="buttons"
                        id="hideshowbtn"
                      >
                        <h5>Quality Assurance</h5>
                      </button> 
                                
                    </div>
                    {/* Hide btn */}
                  <button
                        class="show_more_btn mt-2 ml-1"
                        onClick={() => setShow(false)}
                      >
                        Show Less <GrFormUp />
                      </button>
                    </div>         
            </div>
          </div>
        </div>
      </section>
      ) : null}

        </>
    );
}

export default FindJobs;