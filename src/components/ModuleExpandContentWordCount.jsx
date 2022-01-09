import React from "react";
import Chart from "react-google-charts";
import {useState, useEffect, useRef} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button,Modal} from 'react-bootstrap';  
import { default as ReactSelect, createFilter } from "react-select";
import { components } from "react-select";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col,Breadcrumb } from "antd";
import {Dropdown, Card} from 'react-bootstrap'
import {ModuleExpandTickets, SideNavBarCustom, SideNavBarCustomClosed} from './index';

import DatePicker,{ DateObject } from "react-multi-date-picker"
import { Calendar } from "react-multi-date-picker"
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

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };
  const filterOption = createFilter({});

function ModuleExpandContentWordCount() {
    const u = localStorage.getItem('state');
    const [usertype, setusertype] = useState(u);
    const [allOptions, setallOptions] = useState([]);
    const filterAllOptions = (rawInput) => {
    const filteredOptions = allOptions.filter((o) => filterOption(o, rawInput));

        if (filteredOptions.length === 0) {
            filteredOptions.push({ value: rawInput, label: rawInput });
        }

        setcolor1(filteredOptions);
    };


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
    const [totalwordcount, settotalwordcount] = useState([]);
    const [chartdataContentWordCount, setchartdataContentWordCount] = useState([]);
    const [show,setshow]= useState(false);
    

    useEffect(()=>{
        var data=[]
        var color=[
            { value: "Shoes", label: "Shoes" },
            { value: "Rainy Shoes", label: "Rainy Shoes" },
            { value: "Formal Shoes for Men", label: "Formal Shoes for Men" },
            { value: "Casual Shoes", label: "Casual Shoes" }
        ];
        
        setcolor(color);
        
        color = [
            { value: "https://www.metroshoes.net/", label: "https://www.metroshoes.net/" },
            { value: "https://www.mochishoes.com/", label: "https://www.mochishoes.com/" },
            { value: "https://www.myntra.com/", label: "https://www.myntra.com/" },
            { value: "https://www.amazon.in/", label: "https://www.amazon.in/" }
        ]
        setcolor1(color);
        setallOptions(color);
        color = [
            {keyword:"Shoes" , count:"2000"},
            {keyword:"Rainy Shoes", count:"2500"},
            {keyword:"Formal Shoes for Men",count:"2364"},
            {keyword:"Casual Shoes", count:"1964"}
        ]
        settotalwordcount(color);
        var columns = [
            {
                title:"",
                children:[
                   { title:"List of Keywords",
                    dataIndex:"keyword",
                    key:"keyword"}
                ]
            },
          ];
          setteamcol(columns);
        setteamList([{
            key:0,
            keyword:"Shoes"
        }])
        var data=[
            ['x', 'https://www.amazon.in/'],
            ["Jan", 0.5],
            ["Feb", 0.75],
            ["Mar", 0.6],
        ];
        setchartdataContentWordCount(data);
    },[])
    function handleModal(){
        setshow(!show);
    }
    function generatereport1(){
        if(optionSelected1 && optionSelected){
            var a = [{
                title:"",
                children:[
                   { title:"List of Keywords",
                    dataIndex:"keyword",
                    key:"keyword",
                    width:"1%"
                    }
                ]
            }];
            var b = ['x'];
            
            console.log(optionSelected1)
            optionSelected1.map((i)=>{
                a.push({
                    title:`${i.value}`,
                    children:[
                        {
                            title:"Word Count",
                            dataIndex:"wordcount",
                            key:"wordcount"
                        },
                        {
                            title:"Keyword Density",
                            dataIndex:"keywordense",
                            key:"keywordense"
                        }
                    ],
                    width:"10%"
                });
                b.push(i.value);
            })
            var data = [];
            data.push(b);
            var vaxiz = [{value:"Jan"},{value:"Feb"},{value:"Mar"}];
            vaxiz.map((i)=>{
                var m = [];
                m.push(i.value);
                optionSelected1.map((j, index)=>{
                    var total = ((index+1)*2/2000)*100;
                    m.push(total);
                })
                data.push(m);
            })
            console.log(data)
            setchartdataContentWordCount(data)
            var x = (optionSelected1.length*10)+1;
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
            optionSelected.map((i, index)=>{
                data.push({
                    key:index,
                    keyword:i.value
                }) 
            })
            data.map((i,index)=>{
                optionSelected1.map((j)=>{
                    var x = totalwordcount.filter(item => item.keyword == i.keyword);
                    var total = x[0].count;
                    total = (5/total)*100;
                    data[index].wordcount = <div>5</div>;
                    data[index].keywordense = <div>{"("}{total}{")"}</div>;

                    
                })  
            })
            setteamList(data);
        }
        else{
            alert("please choose url and fields")
        }
        
    }
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
    return (
        <>
            <section class="outer-wrapper module-expand-site-uptime content-word-count dashboard-seo">
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
                 <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span></div></div>
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
                        <a href="/content-word-count">Content Word Count</a>
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
                            <Tab>Content Word Count</Tab>
                            <Tab>Tickets</Tab>
                        </TabList>
                        <TabPanel>
                            {/* <div className="row rank-tracking-top-select" style={{marginTop:48+'px'}}>
                                <div className="col-md-5">
                                    <label htmlFor="" style={{marginTop:5+'px'}}>Select Url</label>
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
                                        filterOption={() => true}
                                        onInputChange={(e) => filterAllOptions(e)}
                                    />
                                    
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="" style={{marginTop:5+'px'}}>Select Keywords</label>
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
                                        
                                    />
                                </div>
                                <div className="col-md-2">
                                    <button style={{marginLeft:24+"px", height:38+'px'}} class="outline-btn" onClick={generatereport1}>Generate</button>
                                </div>
                            </div>
                            <hr/> */}
                            <div className="row">
                                <div className="col-md-6">
                                    
                                        <div class="add-new-btnw">
                                            
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
                                        <Chart
                                            className="line-graph"
                                            height={'400px'}
                                            chartType="ColumnChart"
                                            data={chartdataContentWordCount}
                                            
                                            options={{
                                                hAxis: {
                                                title: "Months",
                                                },
                                                vAxis: {
                                                title: "Months",
                                                },
                                                legend:{position:"bottom"}
                                            }}
                                            rootProps={{ 'data-testid': '1' }}
                                        />
                                    
                                </div>
                                <div className="col-md-6">
                                    <div class="add-new-btnw">
                                        <a href="#" class="outline-btn">EXPORT</a>
                                    </div>
                                    <div class="common-mt-24">
                                        <Table id="sample" columns={teamcol} dataSource={teamlist} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:[]}} />
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            
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

export default ModuleExpandContentWordCount;
