import React, {useEffect, useState} from 'react';
import { SideNavBarCustom, SideNavBarCustomClosed } from ".";


function SideNavCustomMainMob(){
    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
    return(
        <div class="SideMob">

<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onClick={()=>{closeNav()}}>&times;</a>
  {/* <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a> */}
  <SideNavBarCustom />
</div>

<span style={{fontSize:"30px",cursor:"pointer"}} onClick={()=>{openNav()}}>&#9776; </span>
        </div>
    )
}
export default SideNavCustomMainMob