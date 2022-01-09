import React, {useEffect, useState} from 'react';
import { SideNavBarCustom, SideNavBarCustomClosed } from ".";


function SideNavCustomMain(){
  const [sidenavToggle, setSidenavToggle] = useState(true);
    return(
        <aside data-sticky="true">
            <div className={sidenavToggle?"custom-column-20-dashboard-seo":"custom-column-10-dashboard-seo"}>
            <div class="sidebar-nav-bar">
                {sidenavToggle 
                        ?
                        <>
                            <SideNavBarCustom />
                            <button class="control-toggle-dashboard-seo" onClick={()=>setSidenavToggle(!sidenavToggle)}>
                            <i class="fa fa-angle-left"></i>
                            </button>
                        </>
                        :
                        <>
                            <div><SideNavBarCustomClosed /></div>
                            <button class="control-toggle-dashboard-seo" onClick={()=>setSidenavToggle(!sidenavToggle)}>
                            <i class="fa fa-angle-right"></i>
                            </button>
                        </>
                    } 
            </div>
            </div>
        </aside>
    )
}

export default SideNavCustomMain