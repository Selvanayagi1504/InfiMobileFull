import React from "react";
import Chart from "react-google-charts";
import {useState, useEffect, useRef} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button,Modal} from 'react-bootstrap';  

import "antd/dist/antd.css";
import { Table, Input,  Row,  Col ,Breadcrumb} from "antd";
import {Dropdown, Card} from 'react-bootstrap'
import DatePicker,{ DateObject } from "react-multi-date-picker"
import { Calendar } from "react-multi-date-picker"
import {ModuleExpandTickets, SideNavBarCustom, SideNavBarCustomClosed} from './index';
import { default as RSelect } from "react-select";
import { components } from "react-select";
import makeAnimated from 'react-select/animated'
import PropTypes from 'prop-types'
import SideNavCustomMain from "./SideNavCustomMain";
import SideNavCustomMainMob from "./SideNavCustomMainMob";

const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };
  const animatedComponents = makeAnimated()
  const MultiValue = props => (
    <components.MultiValue {...props}>
      <span>{props.data.label}</span>
    </components.MultiValue>
  )
  
  const ReactSelect = props => {
    if (props.allowSelectAll) {
      return (
        <RSelect
          {...props}
          components={{ Option, MultiValue, animatedComponents, ...props.components }}
          options={[props.allOption, ...props.options]}
          onChange={(selected, event) => {
            if (selected !== null && selected.length > 0) {
              if (selected[selected.length - 1].value === props.allOption.value) {
                return props.onChange([props.allOption, ...props.options])
              }
              let result = []
              if (selected.length === props.options.length) {
                if (selected.includes(props.allOption)) {
                  result = selected.filter(option => option.value !== props.allOption.value)
                } else if (event.action === 'select-option') {
                  result = [props.allOption, ...props.options]
                }
                return props.onChange(result)
              }
            }
  
            return props.onChange(selected)
          }}
        />
      )
    }
  
    return <RSelect {...props} />
  }
  
  ReactSelect.propTypes = {
    options: PropTypes.array,
    value: PropTypes.any,
    onChange: PropTypes.func,
    allowSelectAll: PropTypes.bool,
    allOption: PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  }
  
  ReactSelect.defaultProps = {
    allOption: {
      label: 'Select all',
      value: '',
    },
  }
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };


function ModuleExpandSiteUptime() {

    const [urlSelectbottom, seturlSelectbottom] = useState(null);
    function handleChangeURLSelectedBottom(selected){
        seturlSelectbottom(selected);
    };
    const [UrloptionBottom, setUrloptionBottom] = useState([]);

    const [FiledselectBottom, setFiledselectBottom] = useState(null);
    function handleChangeFieldSelectBottom(selected){
        setFiledselectBottom(selected);
    };
    const [FieldOptionsBottom, setFieldOptionsBottom] = useState([]);

    const [optionSelected1, setoptionSelected1] = useState(null);
    function handleChange1(selected){
        setoptionSelected1(selected);
    };
    const [colourOptions1, setcolor1] = useState([]);

    const [optionSelected, setoptionSelected] = useState(null);
    function handleChange(selected){
        setoptionSelected(selected);
    };
    const [colourOptions, setcolor] = useState([]);
    const [sidenav,setsidenav] = useState(false);
    const [teamlist, setteamList] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [teamcol,setteamcol] = useState([]);
    const [show,setshow]= useState(false);
    const [keytablelist, setkeytablelist] = useState([]);
    const [selectionTypeKeyTable, setSelectionTypeKeyTable] = useState('checkbox');
    const [keyTableCol,setkeyTableCol] = useState([]);
    const [chartdata, setchartdata] = useState([]);
    const [URL, setURL] = useState([]);
    const [displayTable, setDisplayTable] = useState(false);
    
    

    useEffect(()=>{
        var data=[]
        var color=[
            { value: "https://www.infidigit.com/", label: "https://www.infidigit.com/" },
            { value: "https://www.infidigit.com/seo-search-engine-optimization/", label: "https://www.infidigit.com/seo-search-engine-optimization/" },
            { value: "https://www.infidigit.com/digital-marketing-services/", label: "https://www.infidigit.com/digital-marketing-services/" },
            { value: "https://www.ezrankings.org/", label: "https://www.ezrankings.org/" },
            { value: "https://www.ezrankings.org/seo-packages.html", label: "https://www.ezrankings.org/seo-packages.html" }
        ];
        setcolor(color);
        setUrloptionBottom(color);
        color = [
            {value:"Meta Title", label:"Meta Title"},
            {value:"Meta Description", label:"Meta Description"},
            {value:"Canonical on the page", label:"Canonical on the page"},
            {value:"NoIndex", label:"NoIndex"},
            {value:"NoFollow", label:"NoFollow"},
            {value:"Redirection", label:"Redirection"},
            {value:"Status Code", label:"Status Code"}
        ]
        setcolor1(color);
        setFieldOptionsBottom(color);
        var columns = [
            {
                title:"Fields",
                dataIndex:"fields",
                key:"fields"
            },
          ];
          setteamcol(columns);
          columns = [
            {
                title:"URL",
                dataIndex:"url",
                key:"url"
            },
            {
                title:"1 Aug",
                dataIndex:"aug1",
                key:"aug1"
            },
            {
                title:"2 Aug",
                dataIndex:"aug2",
                key:"aug2"
            },
            {
                title:"3 Aug",
                dataIndex:"aug3",
                key:"aug3"
            },
            {
                title:"4 Aug",
                dataIndex:"aug4",
                key:"aug4"
            },
            {
                title:"5 Aug",
                dataIndex:"aug5",
                key:"aug5"
            },
            
          ]
          setkeyTableCol(columns);
          
          data=[
            ['x', 'score'],
            ["Aug 1", 1],
            ["Aug 2", 0],
            ["Aug 3", 1],
            ["Aug 4", 1],
            ["Aug 5", 0],
            
        ];
        setchartdata(data);
        setteamList([{
            key:0,
            fields:"Meta Title"
        }])
        setkeytablelist([{
            url:"https://www.infidigit.com/",
            aug1:"0",
            aug2:"1",
            aug3:"1",
            aug4:"0",
            aug5:"0",
            aug6:"1"
        }])
        setDisplayTable(true);
    },[])
    function handleModal(){
        setshow(!show);
    }
    function generatereport1(){
        if(optionSelected1 && optionSelected){
            var a = [{
                title:"Fields",
                dataIndex:"fields",
                key:"fields",
                width:"1%"
            }];
            var b = [];
            setFiledselectBottom(optionSelected1);
            seturlSelectbottom(optionSelected);
            optionSelected.map((i)=>{
                a.push({
                    title:i.value,
                    dataIndex:i.value,
                    key:i.value,
                    width:"5%"
                });
                b.push({
                    url:i.value,
                    aug1:"25",
                    aug2:"36",
                    aug3:"47",
                    aug4:"32",
                    aug5:"20",
                    aug6:"57"
                });
            })
            var x = (optionSelected.length*5)+1;
            if(x < 100){
                x = 100-x;
            }
            else{
                x=5;
            }
            a.push({
                title:"",
                dataIndex:"",
                key:"",
                width:x+'%'
            })
            setteamcol(a);
            var data=[];
            optionSelected1.map((i, index)=>{
                data.push({
                    key:index,
                    fields:i.value,
                })
            })
            data.map((i,index)=>{
                optionSelected.map((j)=>{
                    var x = j.value; 
                    console.log(i.fields + "index")
                    if(i.fields == "Meta Title")
                     data[index][x] = "Shoes For Men";
                    else if(i.fields == "Meta Description")
                    data[index][x] = "Men Shoes";
                })  
            })
            console.log(data)
            setkeytablelist(b)
            setteamList(data);
            setDisplayTable(true);
            // if(optionSelected.length == 1){
            //     data=[
            //         ['x', 'score'],
            //         ["Aug 1", 25],
            //         ["Aug 2", 36],
            //         ["Aug 3", 47],
            //         ["Aug 4", 32],
            //         ["Aug 5", 20],
            //         ["Aug 6", 57],
            //     ];
            //     setchartdata(data);
            // }
            // else if(optionSelected.length > 1){
            //     var sample=['x','score',optionSelected[0].value];
            //     data=[
            //         sample,
            //         [0, 0, 0],
            //         [1, 10, 5],
            //         [2, 23, 15],
            //         [3, 17, 9],
            //         [4, 18, 10],
            //         [5, 9, 5],
            //         [6, 11, 3],
            //         [7, 27, 19],
            //     ];
            //     setchartdata(data);
            // }
        }
        else{
            alert("please choose url and fields")
        }
        
    }
    function generatereport2(){
        var b= [];
        urlSelectbottom.map((i)=>{
            b.push({
                key:i,
                url:i.value,
                aug1:"1",
                aug2:"0",
                aug3:"0",
                aug4:"1",
                aug5:"0",
                aug6:"1"
            });
        })
        setkeytablelist(b);
        console.log(b)
        var data= []
        // if(urlSelectbottom.length == 1){
        //     data=[
        //         ['x', 'score'],
        //         ["Aug 1", 25],
        //         ["Aug 2", 36],
        //         ["Aug 3", 47],
        //         ["Aug 4", 32],
        //         ["Aug 5", 20],
        //         ["Aug 6", 57],
        //     ];
        //     setchartdata(data);
        // }
        // else if(urlSelectbottom.length > 1){
        //     var sample=['x','score',urlSelectbottom[0].value];
        //     data=[
        //         sample,
        //         [0, 0, 0],
        //         [1, 10, 5],
        //         [2, 23, 15],
        //         [3, 17, 9],
        //         [4, 18, 10],
        //         [5, 9, 5],
        //         [6, 11, 3],
        //         [7, 27, 19],
        //     ];
        //     setchartdata(data);
        // }
    }
    const [fre,setfre] = useState(false);
    const [clientchosen, setclientchosen] = useState([
  
        {
          projname:"Myntra - Shoes"
        },
        {
          projname:"Myntra - Loafers"
        }
  ]);
  const [projectslisttop, setprojectslisttop] = useState([
    {
      title:"Myntra",
      projects:[
        {
          projname:"Myntra - Shoes"
        },
        {
          projname:"Myntra - Loafers"
        }
      ]
    },
    {
      title:"Amazon",
      projects:[
        {
          projname:"Amazon - Fashion"
        },
        {
          projname:"Amazon - Jewellery"
        }
      ]
    }
  ])
  function showProjects(a){
    var proj = projectslisttop.filter(item => item.title == a);
    console.log(proj[0].projects)
    setclientchosen(proj[0].projects)
  }
    const ref = useRef()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(() => {
        const checkIfClickedOutside = e => {
        if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
            setIsMenuOpen(false)
        }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen])
    const [sidenavToggle, setSidenavToggle] = useState(true);
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
    const u = localStorage.getItem('state');
    const [usertype, setusertype] = useState(u);
    return (
        <>
            <section class="outer-wrapper module-expand-site-uptime dashboard-seo">
            {
                usertype == "SEO" ?<div class="top-nav-bar">
                <div className="Ham">
                    <SideNavCustomMainMob />
                    <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span>
                </div>
                <div className="wrapper dashboard-seo-dropdown" ref={ref}>
                    <button
                        className="button"
                        onClick={() => setIsMenuOpen(oldState => !oldState)}
                    >
                        All data View <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </button>
                    {isMenuOpen && (
                    <div className="row">
                        <div className="col-md-6" style={{borderRight:'1px solid rgba(0,0,0,.15)'}}>
                            
                            <ul className="Clients-list">
                            <li  onClick={()=>{showProjects("Myntra")}}><span>Myntra</span> <i class="fa fa-angle-right"></i></li>
                            <li  onClick={()=>{showProjects("Amazon")}}><span>Amazon</span> <i class="fa fa-angle-right"></i></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                        <ul class="projectsList">
                        {clientchosen.map((i)=>{
                            return(
                            <li onClick={()=>{setIsMenuOpen(false)}}><a style={{color:"inherit"}} href={`dashboard-seo?id=${i.projname}`}>{i.projname}</a></li>
                            )
                        })}
                        </ul>
                        </div>
                    </div>

                    )}
                    </div> 
                </div>
                {/* <div class="nav-bar-center">&nbsp;</div> */}
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
                                <span class="profile-name">SEO</span>
                            </button>



                                <ul style={{display:sidenav?"block":"none"}} class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a href="/profile">Profile</a></li>

                                <li><a href="/">Log Out</a></li>
                                </ul>

                        </li>
                    </ul>
                </div>
                <div class="clearfix"></div>
            </div> :
             <div class="top-nav-bar">
             <div className="Ham">
                 <SideNavCustomMainMob />
                 <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span></div>
             </div>
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
                   <button onClick={()=>{setsidenav(!sidenav);}} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1">
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
            }
            <div className="Common-Row-Div">
                <SideNavCustomMain />
                <div className="Common-mt-64">
                    
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <a href="/sub-projects">Projects</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <a href="/module-expand-site-uptime">Site Uptime</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
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
                    <Tabs>
                        <TabList>
                            <Tab>Site Uptime Monitor</Tab>
                            <Tab>Tickets</Tab>
                        </TabList>

                        <TabPanel>
                        <div className="Rank-track-top" style={{display:"flex",float:"right", marginBottom:24+'px'}}>
                                <label className="common-label" style={{marginRight:24+'px',marginTop:5+'px'}}>Update Frequency</label>
                                <select className="common-height-30-padding" name="" id="device-type" style={{marginRight:24+'px'}} disabled>
                                    <option value="Daily">Daily</option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Fornightly">Fornightly</option>
                                </select>
                                <i class="fa fa-edit" style={{marginTop:10+'px', marginRight:24+'px'}} onClick={()=>{document.getElementById('device-type').disabled=!fre;setfre(!fre)}}></i>
                                <div>
                                    <select className="common-height-30-padding" id="export" name="export">
                                        <option value="Export">Export</option>
                                        <option value="PDF">Excel</option>
                                        <option value="WORD">CSV</option>
                                        <option value="Sheets">Sheets</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div className="site-uptime-input" style={{display:"flex", marginTop:48+'px', width:"100%"}}>
                                {/* <label htmlFor="" style={{marginRight:24+'px',marginTop:5+'px'}}>Select URL's</label>
                                <ReactSelect
                                    className="da-pa-search"
                                    options={colourOptions}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    components={{
                                        Option
                                    }}
                                    onChange={handleChange}
                                    allowSelectAll={true}
                                    value={optionSelected}
                                /> */}
                                {/* <ExtendedMultiSelect
                                    key={'key'}
                                    options={colourOptions} //Check https://react-select.com/home
                                    isMulti
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    onChange={handleChange}
                                    allowSelectAll={true}
                                    value={optionSelected}
                                    ></ExtendedMultiSelect> */}
                                <label className="common-label" htmlFor="" style={{marginRight:24+'px',marginTop:5+'px', marginLeft:24+'px'}}>Select Fields</label>
                                <ReactSelect
                                    className="da-pa-search"
                                    options={colourOptions1}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    components={{
                                        Option
                                    }}
                                    onChange={handleChange1}
                                    allowSelectAll={true}
                                    value={optionSelected1}
                                />
                                {/* <button style={{marginLeft:24+"px", height:38+'px'}} class="outline-btn common-height-30-padding" onClick={generatereport1}>Generate</button> */}
                            </div>
                            <hr class="common-mt-24 common-mb-24" />
                            
                            {
                                displayTable
                                ? 
                                    <>
                                        
                                        <div className="site-uptime-box common-mb-24">
                                            <div className="row">
                                                {/* <div className="col-md-1"></div> */}
                                                <div className="col-md-2">
                                                    <div className="box-outer">
                                                        <h4 className="box-heading">Total Test Executed</h4>
                                                        <p className="box-value">59</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="box-outer">
                                                        <h4 className="box-heading">Total Passed</h4>
                                                        <p className="box-value">57</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="box-outer">
                                                        <h4 className="box-heading">Total Failed</h4>
                                                        <p className="box-value">2</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="box-outer">
                                                        <h4 className="box-heading">Overall Result</h4>
                                                        <p className="box-value">Fail</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="box-outer">
                                                        <h4 className="box-heading">Total test with other status</h4>
                                                        <p className="box-value">0</p>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <hr class="common-mt-24" />
                                        <div className="row ">
                                            <div className="col-md-12">
                                                <div className="rank-track-graph" style={{display:"flex", marginTop:24+'px', justifyContent:"space-around"}}>
                                                    <div style={{display:"flex"}}>
                                                    <label className="common-label" htmlFor="" style={{marginRight:24+'px',marginTop:5+'px'}}>URL's</label>
                                                    <ReactSelect
                                                        className="da-pa-search"
                                                        options={UrloptionBottom}
                                                        isMulti
                                                        closeMenuOnSelect={false}
                                                        hideSelectedOptions={false}
                                                        components={{
                                                            Option
                                                        }}
                                                        onChange={handleChangeURLSelectedBottom}
                                                        allowSelectAll={true}
                                                        value={urlSelectbottom}
                                                    />
                                                    </div>
                                                    <div style={{display:"flex"}} className="rank-track-graph-input-2">
                                                    <label className="common-label" htmlFor="" style={{marginRight:24+'px',marginTop:5+'px', marginLeft:24+'px'}}>Fields</label>
                                                    <ReactSelect
                                                        className="da-pa-search"
                                                        options={FieldOptionsBottom}
                                                        isMulti
                                                        closeMenuOnSelect={false}
                                                        hideSelectedOptions={false}
                                                        components={{
                                                            Option
                                                        }}
                                                        onChange={handleChangeFieldSelectBottom}
                                                        allowSelectAll={true}
                                                        value={FiledselectBottom}
                                                    />
                                                    </div>
                                                    <div className="add-new-btnw">
                                                        <div>
                                                            <Dropdown>
                                                                <Dropdown.Toggle id="dropdown-basic">
                                                                <i className="fa fa-download"></i>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href="">Download All Charts</Dropdown.Item>
                                                                    <Dropdown.Item href="">Download this only</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </div>
                                                    {/* <button style={{height:38+'px'}} class="outline-btn" onClick={generatereport2}>Generate</button> */}
                                                </div>
                                                <div className="row common-mt-24">
                                                    <div className="col-md-12">
                                                        
                                                    </div>
                                                    {/* <div className="col-md-12 add-new-btnw">
                                                        <div>
                                                            <Dropdown>
                                                                <Dropdown.Toggle id="dropdown-basic">
                                                                <i className="fa fa-download"></i>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href="">Download All Charts</Dropdown.Item>
                                                                    <Dropdown.Item href="">Download this only</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </div> */}
                                                    <div className="col-md-1"></div>
                                                </div>
                                                <Chart
                                                    className="line-graph"
                                                    
                                                    height={'400px'}
                                                    chartType="LineChart"
                                                    data={chartdata}
                                                    
                                                    options={{
                                                        hAxis: {
                                                        title: "Pass/ Fail",
                                                        baselineColor:"red"
                                                        },
                                                        vAxis: {
                                                        title: "https://www.metroshoes.net/",
                                                        },
                                                        legend:{
                                                            position:"bottom"
                                                        }
                                                    }}
                                                    rootProps={{ 'data-testid': '1' }}
                                                />
                                            </div>
                                            <div className="col-md-12 table-graph-modules" style={{width:'100% !important'}}>
                                                <Table id="sample" columns={keyTableCol} dataSource={[...keytablelist]} rowSelection={{type: selectionTypeKeyTable,...rowSelection,}} pagination={{position:[]}} />
                                            </div>
                                        </div>
                                        <hr />
                                        
                                        <Table id="sample-module-expand" columns={teamcol} dataSource={teamlist} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:[]}} />
                                    </> 
                                : 
                                    <>
                                    </>
                            }
                        </TabPanel>
                        <TabPanel>
                            <ModuleExpandTickets/>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </section>
        <Modal show={show} onHide={()=>handleModal()} className="edit-employee-modal">  
            <Modal.Header closeButton>Choose Data Range</Modal.Header>  
            <Modal.Body>
                <div class="common-wrapper">

                    <div class="common-wcard">

                        <div class="common-form-fields">

                            <div class="add-user">
                                <div class="form-wrappers">
                                    <label>From Date</label>
                                    <input type="date" name="" placeholder="" />
                                </div>

                                <div class="form-wrappers">
                                    <label>To Date</label>
                                    <input type="date" name="" placeholder="" />
                                </div>

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

export default ModuleExpandSiteUptime;
