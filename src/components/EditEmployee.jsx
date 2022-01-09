import React, { useState, useEffect, useRef } from "react";
import {useLocation} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button,Modal, Card} from 'react-bootstrap';  
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col } from "antd";
import Chart from "react-google-charts";
import {Dropdown} from 'react-bootstrap'
import {Breadcrumb} from 'antd'
import { SideNavBarCustom, SideNavBarCustomClosed } from '.';

import DatePicker,{ DateObject } from "react-multi-date-picker"
import { Calendar } from "react-multi-date-picker"
import SideNavCustomMain from "./SideNavCustomMain";
import SideNavCustomMainMob from "./SideNavCustomMainMob";


const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

//   const pieOptions = { pieSliceText: 'perce','colors':['#7bb720', 'red'], fontSize: 17, backgroundColor: 'transparent', legend : {position: 'none', textStyle: { fontSize: 16}}, chartArea:{left:0,top:10,width:'65%',height:'100%'}}
const pieOptions = {
    title: "",
    slices: [
      {
        color: "#2BB673"
      },
      {
        color: "#d91e48"
      },
      {
        color: "#007fad"
      },
      {
        color: "#e9a227"
      }
    ],
    legend: {
      position: "none",
    },
    tooltip: {
      showColorCode: true
    },
    chartArea: {
      left: 20,
      top: 100,
      width: "80%",
      height: "80%"
    },
  };

function EditEmployee() {
const search = useLocation().search;
const id = new URLSearchParams(search).get('id');
 const [show,setshow]= useState(false);
 function handleModal(){
     setshow(!show);
 }
 const [piedata, setpiedata] = useState([]);
 const [ProjList, setProjList] = useState([]);
 const [selectionType, setSelectionType] = useState('checkbox');
 const [projcol,setprojcol] = useState([]);
 useEffect(()=>{
     const a=[
        ['Task', 'Hours per Day'],
        ['Utilised', 6],
        ['Not utilised', 4]
     ];
     setpiedata(a);
     const data = [];
     var filterclientname=[];
     data.push({
        key: 0,
        projectstatus:"Completed",
        clientname:"Infi",
        billingstartdate:"03/05/2020",
        billingenddate:"03/05/2021",
        allocation:"20%",
        billingperiod:"Monthly",
        projectpoc:"Rahul"
     });
     filterclientname.push({
         text:"Infi",
         value:"Infi"
     })
     for (let i = 1; i < 100; i++) {
     data.push({
         key: i,
         projectstatus:"Active",
         clientname:`Myntra ${i}`,
         billingstartdate:"03/05/2020",
         billingenddate:"03/05/2021",
         allocation:"20%",
         billingperiod:"Monthly",
         projectpoc:"Rahul"
     });
     filterclientname.push({
         text:`Myntra ${i}`,
         value:`Myntra ${i}`
     })
     
     }
     filterclientname = [... new Set(filterclientname.map(JSON.stringify))].map(JSON.parse);
     setProjList(data);
     const columns = [
         {
           title: "Project Status",
           dataIndex: "projectstatus",
           key: "projectstatus",
           filters:[
               {
                   text:"Active",
                   value:"Active"
               },
               {
                   text:"Completed",
                   value:"Completed"
               }
           ],
             filterSearch: true,
             onFilter: (value, record) => record.projectstatus.indexOf(value) === 0
         },
         {
           title: "Client Name",
           dataIndex: "clientname",
           key: "clientname",
           filters:filterclientname,
             filterSearch: true,
             onFilter: (value, record) => record.clientname.indexOf(value) === 0
         },
         {
             title:"Billing Start Date",
             dataIndex:"billingstartdate",
             key:"billingstartdate",
         },
         {
             title:"Billing End Date",
             dataIndex:"billingenddate",
             key:"billingenddate",
         },
         {
             title:"% Allocation",
             dataIndex:"allocation",
             key:"allocation",
         },
         {
             title:"Billing Period",
             dataIndex:"billingperiod",
             key:"billingperiod"
         },
         {
             title:"Project POC",
             dataIndex:"projectpoc",
             key:"projectpoc"
         },
       ];
       setprojcol(columns);
 },[]);

 const [sidenav,setsidenav] = useState(false);
 const [sidenavToggle, setSidenavToggle] = useState(true);

return (
<>
    <section class="outer-wrapper edit-employee-main">
        <div class="top-nav-bar">
            <div className="Ham">
                <SideNavCustomMainMob />
                <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span>
            </div>
            </div>
            <div class="nav-bar-center">&nbsp;</div>
            <div class="nav-bar-right">
                <ul class="list-unstyled nav-right-menu">
                <li>
                <Dropdown id="notification-dropdown">
                        <Dropdown.Toggle id="dropdown-basic">
                        <i class="fa fa-bell"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="">
                                <div className="notification-item">
                                    <h4>Notification 1!!</h4>
                                    <p>21 hours ago..</p>
                                </div>
                            </Dropdown.Item>
                            <hr />
                            <Dropdown.Item href="" style={{backgroundColor:"#85C1E9"}}>
                                <div className="notification-item" >
                                    <h4>Notification 2!!</h4>
                                    <p>8 hours ago..</p>
                                </div>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                    </li>

                    <li class="dropdown">
                        <button onClick={()=>{console.log("hiii");setsidenav(!sidenav);}} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1">
                            <span class="profile-pic"><img src="images/profile-pic.jpeg" alt=""/></span>
                            <span class="profile-name">HR</span>
                        </button>



                        <ul style={{display:sidenav?"block":"none"}} class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a href="/profile">Profile</a></li>

                            <li><a href="/">Log Out</a></li>
                        </ul>

                    </li>
                </ul>
            </div>
            <div class="clearfix"></div>
        </div>

        <div className="Common-Row-Div">
                <SideNavCustomMain />
                <div className="Common-mt-64">
                <Breadcrumb>
                <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                <Breadcrumb.Item>
                <a href="/team-members">Team Members</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                <a href="/edit-employee">Edit Team Members</a>
                </Breadcrumb.Item>
            </Breadcrumb>
                <div class="row">
                    <div class="col-sm-5 pad-lzero">
                        <div class="main-title">PROJECT DETAILS AND UTILIZATION</div>
                    </div>
                    <div class="col-sm-7 add-new-btnw">
                        
                    </div>
                </div>
                <div class="row">
                    <div class="common-filter">
                        <ul class="filter-fields tab-project-list">
                            <li>
                                <select>
                                    <option value="12">Last 12 months</option>
                                    <option value="1">Jan</option>
                                    <option value="2">Feb</option>
                                    <option value="3">Mar</option>
                                    <option value="4">Apr</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">Aug</option>
                                    <option value="9">Sept</option>
                                </select>
                            </li>
                            <li style={{marginLeft:24+'px'}}><button class="outline-btn" onClick={()=>handleModal()}>Custom</button></li>
                        </ul>
                    </div>
                </div>
                

                

                <div class="common-table">
                    <div className="row">
                        <div className="col-md-2">
                            <div id="piechart">
                            <Chart chartType="PieChart" data={piedata} options={pieOptions} graph_id="PieChart" width={"100%"} height={"400px"} legend_toggle/>
                            <div>
                                <div class="rect green"></div>
                                <div class="pie-content">Utilised</div>
                            </div>
                            
                            <div>
                                <div class="rect red"></div>
                                <div class="pie-content">Not Utilised</div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-10">
                        <div class="data-export">   
                            <button class="outline-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Export
                                                </button>
                                                <div class="dropdown-menu " aria-labelledby="dropdownMenuButton">
                                                    <a class=" dropdown-content" href="#">Excel</a>
                                                    <a class="dropdown-content" href="#">CSV</a>
                                                    <a class="dropdown-content" href="#">Sheets</a>

                                                </div>
                               
                            </div>
                            <Table id="sample" columns={projcol} dataSource={ProjList} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:[ "bottomRight"]}} />
                        </div>
                    </div>
                </div>
                </div>
            </div>
      

    </section>
    <Modal show={show} onHide={()=>handleModal()} className="edit-employee-modal date-modal">  
        <Modal.Header closeButton>Choose Data Range</Modal.Header>  
        <Modal.Body>
            <div class="common-wrapper">

                <div class="common-wcard">

                    <div class="common-form-fields">

                        <div class="add-user">
                            {/* <div class="form-wrappers">
                                <label>From Date</label>
                                <input type="date" name="" placeholder="" />
                            </div>

                            <div class="form-wrappers">
                                <label>To Date</label>
                                <input type="date" name="" placeholder="" />
                            </div> */}
                            <DateRangeCustom/>

                        </div>
                    </div>
                </div>

            </div>
        </Modal.Body>  
        <Modal.Footer>  
        <Button onClick={()=>handleModal()}>Close</Button>  
        <Button onClick={()=>handleModal()}>Save</Button>  
        </Modal.Footer>  
    </Modal> 
          
</>
);
}
function DateRangeCustom(props){
    const ref = useRef()
    const [values, setValues] = useState([
        new DateObject().setDay(4).subtract(1, "month"),
        new DateObject().setDay(4).add(1, "month")
      ])
    const [headValues, setHeadValues] = useState([
        new DateObject().setDay(4).subtract(1, "month"),
        new DateObject().setDay(4).add(1, "month")
      ])
    const [open, setOpen] = useState(false);
    const [head1,setHead1]= useState(headValues[0].format())
    const [head2,setHead2]= useState(headValues[1].format())
    const [checkBoxValue,setCheckBoxValue]= useState(false)
    function setheadvalues(){
        setHead1(values[0].format())
        setHead2(values[1].format())
    }
    useEffect(() => {
        const checkIfClickedOutside = e => {
        if (open && ref.current && !ref.current.contains(e.target)) {
            setOpen(false)
        }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [open])
    return(
        <>
            <div ref={ref} class="calendar-main">
                        <div className="add-new-btnw">
                            <button className="outline-btn-boderless" style={{width:"250px"}} onClick={() => setOpen(!open)} >
                                {head1}&nbsp;-&nbsp;{head2}&nbsp;&nbsp;
                                <i class="fa fa-chevron-down drop"></i>
                            </button>
                        </div>
                        
                        {open && (
                            <div id="example-collapse-text-calendar">
                                <Card body className="daterange-picker-card  mt-2">
                                    <div className="row">
                                    
                                        <div className="col-lg-8 calendar-col">
                                            <Calendar
                                                className="custom-calendar"
                                                value={values}
                                                onChange={(e)=>{
                                                    setValues(e)
                                                }}
                                                range
                                                numberOfMonths={3}
                                                className="custom-calendar"
                                                showOtherDays
                                            />
                                        </div>
                                        <div className="col-lg-4 mt-3 mt-lg-0 text-center">
                                            <div className="row">
                                                <div className="col-6">
                                                    <label >Date Range</label>
                                                </div>
                                                <div className="col-5">
                                                    <select >
                                                        <option value="All">custom</option>
                                                        <option value="Contains">today</option>
                                                        <option>yesterday</option>
                                                        <option>last week</option>
                                                    </select>
                                                </div>
                                                <div className="col-1"></div>
                                            </div>
                                            <div className="row mt-3 text-center">
                                                <div className="col-5">
                                                    <input type="text" value={values[0].format()}/>
                                                </div>
                                                <div className="col-1">
                                                
                                                </div>
                                                <div className="col-5">
                                                    {
                                                        values.length==2?
                                                        <input type="text" value={values[1].format()}/> : <input type="text" value={"select"}/>
                                                    }
                                                </div>
                                                <div className="col-1"></div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-6 ">
                                                    <input type="checkbox" onChange={()=>{setCheckBoxValue(!checkBoxValue)}}/>
                                                    <label className="lable-compare">Compare to</label>
                                                </div>
                                                <div className="col-5">
                                                    <select >
                                                        <option value="All">previous period</option>
                                                        <option>yesterday</option>
                                                        <option>last week</option>
                                                    </select>
                                                </div>
                                                <div className="col-1"></div>
                                            </div>
                                            {
                                            checkBoxValue?
                                                <div className="row mt-3">
                                                    <div className="col-5">
                                                    <input type="text" value={head1}/>
                                                    </div>
                                                    <div className="col-1">
                                                    
                                                    </div>
                                                    <div className="col-5">
                                                        <input type="text" value={head2}/>
                                                    </div>
                                                    <div className="col-1"></div>
                                                </div>
                                                :
                                                <div  className="row mt-3">
                                                    <div className="col-5">
                                                    <input type="text" disabled value={head1}/>
                                                    </div>
                                                    <div className="col-1">
                                                    <h6 className="pt-2">-</h6>
                                                    </div>
                                                    <div className="col-5">
                                                        <input type="text" disabled value={head2}/>
                                                    </div>
                                                    <div className="col-1"></div>
                                                </div>
                                            }
                                            <hr/>
                                            <div className="row mt-3">
                                                <div className="col-6">
                                                    <button onClick={()=>{setheadvalues();setOpen(!open)}}
                                                    className="outline-btn" >
                                                        Apply
                                                    </button>
                                                </div>
                                                <div className="col-6">
                                                <buton onClick={() => setOpen(!open)}
                                                className="outline-btn">
                                                        Cancel
                                                </buton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        )}
                        
                    </div>
        </>
    )
}
export default EditEmployee;