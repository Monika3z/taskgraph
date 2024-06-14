import React from "react";
import { useSelector } from "react-redux";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import { useState } from "react";
import papa from 'papaparse';
import { useEffect } from "react";
import Data from './sampledata.csv'


const SideProduct = () =>{
    const products = useSelector((state) =>state.allProducts.products);

    const [data,setData] = useState([]);

    // filter----------------------------------


    // const handleFileUpload = (e)=>{
    //     const file = e.target.files[0];
    //     papa.parse(file,{header:true,complete:(results)=>{
    //         setData(results.data);
    //     }})
    // };

    // const{ id,title } = products[0];

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch(Data);
            const reader = response.body.getReader();
            const result = await reader.read();
            const decoder = new TextDecoder("utf-8");
            const csvData = decoder.decode(result.value);
            const parsedData = papa.parse(csvData,{
               header:true,
               skipEmptyLines:true
            }).data;
            setData(parsedData);

        };
      fetchData();
    },[]);

    return(


    <div className="four column wide"> <br /> <br />

    {/* <input type="file" accept=".csv" onChange={handleFileUpload} />
    {data.length ? ( 

        <table className="table">
            <thead>
                <tr>
                   <th>condition</th> 
                   <th>description</th>
                   <th>title</th>
                   <th>brand</th>
                   <th>price</th>
                   <th>product_type</th>
                   <th>coutomer_label</th>
                   <th>timestamp</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row,index)=>(
                    <tr key={index}>
                      <td>{row.condition}</td> 
                      <td>{row.description}</td>
                      <td>{row.title}</td> 
                      <td>{row.brand}</td> 
                      <td>{row.price}</td> 
                      <td>{row.product_type}</td> 
                      <td>{row.coutomer_label}</td> 
                      <td>{row.timestamp}</td> 

                    </tr>
                ))}
            </tbody>

        </table>

    ):null} */}

    <Button variant="warning">
      #New Unit <Badge bg="secondary">379</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button> <span></span>  <span></span>

    <Button variant="warning">
      #New MSRP <Badge bg="secondary">$13,024,466</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button> <span></span> <span></span>

    <Button variant="warning">
      #Used Units <Badge bg="secondary">67</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button> <span></span> <span></span>

    <Button variant="warning">
      #Used Avg MSRP <Badge bg="secondary">$23,351</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button> <span></span> <span></span>

    <Button variant="warning">
      #CPO Units <Badge bg="secondary">1</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button> <span></span> <span></span>

    <Button variant="warning">
      #CPO MSRP <Badge bg="secondary">$31,200</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button> <span></span> <span></span>



    <div>
        <br /> <br />
      <h4>inventory Count</h4>
     <Button variant="warning">NEW</Button>{' '}
     <Button variant="outline-danger">USED</Button>{' '}
     <Button variant="outline-success">CPO</Button>{' '}
     </div>
     <br />

        <div className="cards">
            <div className="card">
            <div className="image"></div>
            <div className="content">
            <div className="header"></div>

    <div>
      <ProgressBar striped variant="success" now={40} />
      <br /> <p>01/01/24</p>
      <ProgressBar striped variant="info" now={20} />
      <p>02/02/24</p><br />
      <ProgressBar striped variant="warning" now={60} />
      <p>04/01/24</p> <br />
      <ProgressBar striped variant="danger" now={80} />
      <p>03/01/24</p>

    </div>
    <br />
    <br />

            {/* <div className="header"> {title}</div>    */}
            </div>
         </div>
        </div>
        <br /> <br />
        
        <div>
      <h4>Average MSRP in USD</h4>
     <Button variant="warning">NEW</Button>{' '}
     <Button variant="outline-danger">USED</Button>{' '}
     <Button variant="outline-success">CPO</Button>{' '}
     </div>
     <br />

        
        <div className="cards">
            <div className="card">
            <div className="image"></div>
            <div className="content">
            <div className="header"></div>

    <div>
      <ProgressBar striped variant="success" now={30} />
      <p>01/01/24</p><br />
      <ProgressBar striped variant="info" now={50} />
      <p>02/02/24</p> <br />
      <ProgressBar striped variant="warning" now={70} />
      <p>04/01/24</p> <br />
      <ProgressBar striped variant="danger" now={60} />
      <p>03/01/24</p>
    </div>
    <br />
    <br />

            {/* <div className="header"> {title}</div>    */}
            </div>
         </div>
        </div>
     <div>
        <br />


{/* <input type="file" accept=".csv" onChange={handleFileUpload} /> */}

 <div><h2>History Log</h2></div> <hr />
    {data.length ? ( 

        <table className="table">
            <thead>
                <tr>
                   <th>condition</th> 
                   <th>description</th>
                   <th>title</th>
                   <th>brand</th>
                   <th>price</th>
                   <th>product_type</th>
                   <th>coutomer_label</th>
                   <th>timestamp</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row,index)=>(
                    <tr key={index}>
                      <td>{row.condition}</td> 
                      <td>{row.description}</td>
                      <td>{row.title}</td> 
                      <td>{row.brand}</td> 
                      <td>{row.price}</td> 
                      <td>{row.product_type}</td> 
                      <td>{row.coutomer_label}</td> 
                      <td>{row.timestamp}</td> 

                    </tr>
                ))}
            </tbody>

        </table>

    ):null}



     </div>
        
    </div>
    

    )
}
export default SideProduct