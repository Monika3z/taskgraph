import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Header = () =>{

        const [searchTerm, setSearchTerm] = React.useState('');
      
        const handleChange = e => {
          setSearchTerm(e.target.value);
        };
      
    return(
      <div className="ui bg-dark fixed menu">
        <div className="ui container center">
        <div className="justify-content-between"><h2 className="text-white text-left">Admin Console</h2></div>
        <div> 

        </div>
        </div>
        <input className="rounded " onChange={handleChange}
        type="search"
        placeholder="Search..."
        value={searchTerm}/> 

        <div> 
            <span></span>
        <DropdownButton id="dropdown-basic-button" title="Filter Data By">
      <Dropdown.Item href="#/action-1">DURATION</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Last Month</Dropdown.Item>
      <Dropdown.Item href="#/action-3">This Month</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Last 6 Month</Dropdown.Item>

    </DropdownButton>
        </div>

      </div>
    )
};
export default Header