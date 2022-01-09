import React, { useEffect } from "react";
import {useState} from "react";
import $, { event } from 'jquery';
import {Dropdown} from 'react-bootstrap'
import {Breadcrumb} from 'antd'
import { useLocation } from "react-router-dom";
import { SideNavBarCustom, SideNavBarCustomClosed } from '.';
import SideNavCustomMain from "./SideNavCustomMain";
import SideNavCustomMainMob from "./SideNavCustomMainMob";

function EditClientDir() {
    const [sidenavToggle, setSidenavToggle] = useState(true);

    const search = useLocation().search;
const id = new URLSearchParams(search).get("id");
    const [clientid, setclientid] = useState(id);
    const [sidenav,setsidenav] = useState(false);
    const [filelist,setfilelist] = useState([]);
    const [phonecode, setphonecode] = useState("+91");
    const [countrycodes, setcountrycodes] = useState([]);
    useEffect(()=>{
        var data = [
            {
                country:"India",
                code:"+91"
            },
            {
                country:"USA",
                code:"+1"
            }
        ];
        setcountrycodes(data);
    },[])
    function setcountry(e){
        var c = e.target.value;
        countrycodes.map((i)=>{
            if(i.country == c){
                setphonecode(i.code)
            }
        })
    }
    function updateList() {
        var input = document.getElementById('myfile');
        var output = document.getElementById('fileList');
        var data=[];
        var children = "";
        for (var i = 0; i < input.files.length; ++i) {
            children += '<li id=filename'+i+'>' + input.files.item(i).name + '<i class="fa fa-trash" id="filenametrash'+i+'"></i></li>';
            data.push(input.files.item(i).name);
        }
        setfilelist(data);
        output.innerHTML = '<ul>'+children+'</ul>';
    }
    function removeItem(event){
        console.log(event)
    }
return (
<>
    <section class="outer-wrapper">
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
                            <span class="profile-name">Director</span>
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
            {!clientid 
                    ?
                        <>
                         <Breadcrumb>
                            <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                            <Breadcrumb.Item><a href="/dashboard">Dashboard</a></Breadcrumb.Item>
                            <Breadcrumb.Item>
                            <a href="/clinets-sales-dir">Clients</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                            <a href="/edit-client-dir">Create Clients</a>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                          <div class="row">
                            <div class="col-sm-5 pad-lzero">
                                <div class="main-title">CREATE NEW CLIENTS</div>
                            </div>
                            <div class="col-sm-7 add-new-btnw">
                            </div>
                        </div>

                        <div class="common-wrapper">

                            <div class="common-wcard">

                                <div class="common-form-fields">

                                    <div class="add-user">
                                        <div class="form-wrappers">
                                            <label>Client</label>
                                            <input type="text" name="" placeholder="Enter Client" />
                                        </div>

                                        <div class="form-wrappers">
                                            <label>Client Code</label>
                                            <input type="text" name="" placeholder="Enter Client Code" />
                                        </div>

                                        {/* <div class="form-wrappers">
                                            <label>Organization</label>
                                            <input type="text" name="" placeholder="Enter Organization" />
                                        </div> */}

                                        <div class="form-wrappers">
                                            <label>Key Point of Contact</label>
                                            <input type="text" name="" placeholder="Enter Key Point of Contact" />
                                        </div>

                                        <div class="form-wrappers">
                                            <label>Status</label>
                                            <select>
                                                <option>Active</option>
                                                <option>Lead</option>
                                                <option value="">Prospect</option>
                                            </select>
                                        </div>

                                        <div class="form-wrappers">
                                            <label>Country</label>
                                            <select onChange={setcountry} >
                                                <option value="India">India</option>
                                                <option value="USA">USA</option>
                                            </select>
                                        </div>

                                        <div class="form-wrappers">
                                            <label>State</label>
                                            <input type="text" name="" placeholder="Enter State" />
                                        </div>

                                        <div class="form-wrappers">
                                            <label>City</label>
                                            <input type="text" name="" placeholder="Enter City" />
                                        </div>


                                        <div class="form-wrappers">
                                            <label>Phone Number</label>
                                            <br />
                                            <div style={{display:"flex"}}>
                                                <input type="text" value={phonecode} style={{width:15+'%', marginRight:16+'px'}} />
                                                <input type="text" name="" placeholder="Enter Phone Number" />
                                            </div>
                                        </div>

                                        <div class="form-wrappers">
                                            <label>Created By</label>
                                            <input type="text" name="" placeholder="Rahul" disabled />
                                        </div>

                                        <div className="form-wrappers">
                                            <label>Account Activation</label>
                                            <br />
                                            <label  class="switch"><input data-onstyle="success" type="checkbox" /><span  class="slider round"></span></label>
                                        </div>

                                        <div class="form-wrappers">
                                            <label>Document Upload</label>
                                            <br />
                                            <input type="file" id="myfile" name="myfile" multiple onChange={updateList} /><label id="fileLabel">{filelist.length>0?`${filelist.length} files`:""}</label>
                                        </div>
                                        <div id="fileList">
                                            <ul>
                                            {filelist && filelist.map((i, index)=>{
                                                return(
                                                    <li id={i}>{i} <i class="fa fa-trash" onClick={()=>{removeItem(i)}}></i></li>
                                                )
                                            })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <ul class="form-action-wrapper">
                                <li><a href="#" class="ol-btn">Cancel</a></li>
                                <li><a href="#" class="outline-btn">Save</a></li>
                            </ul>
                        </div>  
                        </>
                    :
                        <>
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                                <Breadcrumb.Item><a href="/dashboard">Dashboard</a></Breadcrumb.Item>
                                <Breadcrumb.Item>
                                <a href="/clinets-sales-dir">Clients</a>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                <a href="/edit-client-dir">Edit Clients</a>
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <div class="row">
                                <div class="col-sm-5 pad-lzero">
                                    <div class="main-title">EDIT Clients</div>
                                </div>
                                <div class="col-sm-7 add-new-btnw">
                                </div>
                            </div>
                            <div class="common-wrapper">

                                <div class="common-wcard">

                                    <div class="common-form-fields">

                                        <div class="add-user">
                                            <div class="form-wrappers">
                                                <label>Client</label>
                                                <input type="text" name="" placeholder="Myntra" disabled />
                                            </div>

                                            <div class="form-wrappers">
                                                <label>Client Code</label>
                                                <input type="text" name="" placeholder="10001" disabled />
                                            </div>

                                            <div class="form-wrappers">
                                                <label>Organization</label>
                                                <input type="text" name="" placeholder="Myntra" disabled />
                                            </div>

                                            <div class="form-wrappers">
                                                <label>Key Point of Contact</label>
                                                <input type="text" name="" placeholder="Raj" disabled />
                                            </div>

                                            <div class="form-wrappers">
                                                <label>Status</label>
                                                <select value="Active" disabled>
                                                    <option>Active</option>
                                                    <option>Lead</option>
                                                    <option value="">Prospect</option>
                                                </select>
                                            </div>

                                            <div class="form-wrappers">
                                                <label>Country</label>
                                                <select value="India" disabled >
                                                    <option value="India">India</option>
                                                    <option value="USA">USA</option>
                                                </select>
                                            </div>

                                            <div class="form-wrappers">
                                                <label>State</label>
                                                <input type="text" name="" placeholder="Karnataka" disabled />
                                            </div>

                                            <div class="form-wrappers">
                                                <label>City</label>
                                                <input type="text" name="" placeholder="Bangalore" disabled />
                                            </div>


                                            <div class="form-wrappers">
                                                <label>Phone Number</label>
                                                <br />
                                                <div style={{display:"flex"}}>
                                                    <input type="text" value="+91" style={{width:15+'%', marginRight:16+'px'}} />
                                                    <input type="text" name="" placeholder="8905675841" disabled />
                                                </div>
                                            </div>

                                            <div class="form-wrappers">
                                                <label>Created By</label>
                                                <input type="text" name="" placeholder="Rahul" disabled />
                                            </div>

                                            <div class="form-wrappers">
                                                <label>Document Upload</label>
                                                <br />
                                                <input type="file" id="myfile" name="myfile" multiple onChange={updateList} /><label id="fileLabel">{filelist.length>0?`${filelist.length} files`:""}</label>
                                            </div>
                                            <div id="fileList">
                                                <ul>
                                                {filelist && filelist.map((i, index)=>{
                                                    return(
                                                        <li id={i}>{i} <i class="fa fa-trash" onClick={()=>{removeItem(i)}}></i></li>
                                                    )
                                                })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <ul class="form-action-wrapper">
                                    <li><a href="#" class="ol-btn">Cancel</a></li>
                                    <li><a href="#" class="outline-btn">Save</a></li>
                                </ul>
                            </div>
                        </>
                }
            </div>
        </div>
        {/* <div class="content-wrapper">
            <div class="dashboard-wrapper">

            </div>
        </div> */}
    </section>
</>
);
}

export default EditClientDir;