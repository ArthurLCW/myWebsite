import React from "react";
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
        
        <div className="user">
          <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago.</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt=""/>
            </Link>

            <img src={Delete} alt=""/>
            
          </div>

        </div>
        <h1>Forza Roma!!!</h1>

        <p>
          By 1965 the IBM System/360 mainframe was well established as a large centralized computer system for many corporations. It could use up to one megabyte of 32-bit word memory and could store many programs in memory at the same time, with OS/360 options for time-sharing.
          <br/><br/>
          In the later 1960s, semiconductor technology spawned the minicomputer era: small, fast and inexpensive machines, but still too difficult for end-users. Companies such as DEC, Prime and Data Central built minicomputers. Cray Research Corporation introduced the best cost/performance supercomputer, the Cray-1, in 1976.
          <br/><br/>
          By the mid 1980s, personal computers PCs or desktops were common and local area networks LANs of powerful desktops and workstations began to replace mainframes and minis by 1990. The network of workstations was typically 10 times less cost, with comparable performance. In the 1990s, several supercomputers were built, using thousands of processors with a dedicated interconnection network.E.g., Sequent Symmetry, Intel iPSC, nCUBE, Intel Paragon, Thinking Machines CM-2, CM-5, MasPar MP and Fujitsu VPP500.
          <br/><br/>
        </p>  
      </div>
      <div className="menu"><Menu/></div>
    </div>
  )
}

export default Single