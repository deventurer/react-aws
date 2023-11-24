import db from "./db.json";
import "./db.css"
import DataGrid from 'react-data-grid';
import dbLogo from '../../assets/db.jpg'
import 'react-data-grid/lib/styles.css'

const columns = [
    { key: 'rno', name: 'Roll no' },
    { key: 'name', name: 'Name' },
    { key: 'details', name: 'Details' },
    { key: 'birth', name: 'Birth day' }
];

const rows = db.content;

function DB91() {
 return (
    <div className="parent">
        <img src={dbLogo} width={100} height={100}/>
        <h2 className="dbHeader"> <u>Don Bosco High School, Guwahati - Batch of 1991</u></h2>
        <p className="intro">Welcome to the home page of the Don Bosco High School Alumni (Guwahati edition) - Class of
         1991. This page attempts to capture all the highlights and details of the exemplary students who were a part of
         that batch and rekindle fond memories of friends, past and present.</p>
        <p>
            <i>Do you really mean to tell me that you never heard of us,<br/>
            The boys of Don Bosco School<br/>
            For the fame of our school has spread far and wide,<br/>
            For we like to study here...
        </i></p>


        <DataGrid columns={columns} rows={rows} />
    </div>

 )
}

export default DB91