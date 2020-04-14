import React, { Component } from 'react'
import './App.css'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

let gridApi = ''

export class App extends Component {

constructor(props) {
  super(props)

this.state = {
columnDefs: [
   {
    headerName: "FirstName", field: "firstname", 
    getQuickFilterText: function(params){
      return params.value.firstname
    }
  }, {
    headerName: "LastName", field: "lastname"
  }, 
   {
    headerName: "Branch", field: "branch"
  }, {
    headerName: "Contact", field: "contact"
  }, 
  {
    headerName: "Email", field: "email"
  },
  {
    headerName: "Actions", field: "action",

  }
 
],
defaultColDef: { 
          resizable: true,
          sortable: true, 
          filter: true 
  },
rowData: [{
  firstname: "Dhairya",
  lastname: "Shah",
  branch: "IT",
  contact: 9429020011,
  email: "dhairya.shah@rapidops.com"
},

{
  firstname: "Meet",
  lastname: "Shah",
  branch: "CS",
  contact: 7982124770,
  email: "meet.shah@rapidops.com"
},
{
  firstname: "Darshan",
  lastname: "Raval",
  branch: "IT",
  contact: 9870912667,
  email: "darshan.raval@gmail.com"
},
{
  
  firstname: "Hardik",
  lastname: "Motwani",
  branch: "CS",
  contact: 9870912668,
  email: "hardik.motwani@gmail.com"
},
{

  firstname: "Brijesh",
  lastname: "Shah",
  branch: "CS",
  contact: 9870912669,
  email: "Brijesh.shah@rapidops.com"
},
{
 
  firstname: "Malay",
  lastname: 'Shah',
  branch: "IT",
  contact: 9870912660,
  email: "malay.shah@gmail.com"
},
{
  
  firstname: "Jatin",
  lastname: "Jain",
  branch: "IT",
  contact: 9870912610,
  email: "darshan.raval@gmail.com"
},
{
  firstname: "Dhairya",
  lastname: "Shah",
  branch: "ME",
  contact: 9870912611,
  email: "darshan.raval@gmail.com"
},
{
  firstname: "Ravi",
  lastname: "Pathekar",
  branch: "IT",
  contact: 9870912612,
  email: "darshan.raval@gmail.com"
},
{
  firstname: "Hardik",
  lastname: "Motwani",
  branch: "ME",
  contact: 9870912613,
  email: "darshan.raval@gmail.com"
},
{
  firstname: "Darshan",
  lastname: "vesatiya",
  branch: "IT",
  contact: 9870912667,
  email: "darshan.raval@gmail.com"
},{
  
  firstname: "Dhairya",
  lastname: "Shah",
  branch: "IT",
  contact: 9870912667,
  email: "darshan.raval@gmail.com"
},
{
  
  firstname: "Jatin",
  lastname: "Jain",
  branch: "IT",
  contact: 9870912610,
  email: "darshan.raval@gmail.com"
},
{
  firstname: "Dhairya",
  lastname: "Shah",
  branch: "ME",
  contact: 9870912611,
  email: "darshan.raval@gmail.com"
},
{
  firstname: "Ravi",
  lastname: "Pathekar",
  branch: "IT",
  contact: 9870912612,
  email: "darshan.raval@gmail.com"
},
{
  firstname: "Hardik",
  lastname: "Motwani",
  branch: "ME",
  contact: 9870912613,
  email: "darshan.raval@gmail.com"
},
{
  firstname: "Darshan",
  lastname: "vesatiya",
  branch: "IT",
  contact: 9870912667,
  email: "darshan.raval@gmail.com"
},
],
}
}

onGridReady = params => {
  console.log(params)
  gridApi = params.api
  this.gridColumnApi = params.columnApi
}



onFilterTextBoxChanged = () => {

  gridApi.setQuickFilter(document.getElementById('filter-text-box').value)
}

render() {
  return (
    <div
      className="ag-theme-alpine container"
      style={{ width: 1000, height: 400 }}>
      <input  type="text" id="filter-text-box" placeholder="Filter..." onInput={this.onFilterTextBoxChanged}/>
           <AgGridReact
        columnDefs={this.state.columnDefs}
        rowData={this.state.rowData}
        defaultColDef={this.state.defaultColDef}
        rowSelection="multiple"
        onGridReady={this.onGridReady}
        pagination={true}
        paginationPageSize={10}

    >                           
  </AgGridReact>
</div>
  )
}
}

export default App

