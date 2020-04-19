import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '@elastic/eui/dist/eui_theme_light.css'
import { EuiIcon, EuiButtonIcon, EuiPopover, EuiSwitch, EuiSpacer } from '@elastic/eui';
import Pagination from './Components/Pagination';
import ComboBox from './Components/ComboBox';
import Delete from './Components/Delete';
import FilterBox from './Components/FilterBox';
import Popover from './Components/Popover';
let api = '';
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
          sizePage:2,
          pageCount:10,
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
    headerName: "Contact", field: "contact"
  }, 
 

  {
    headerName: "Tags", field: "tags", cellRendererFramework: function(params) {
       return(
      <ComboBox />
      )
    }

  }, 
  {
    headerName: "Email", field: "email"
  },{
                headerName: "Actions", field: "action",
                cellRendererFramework: (params) => <Delete delete={this.deleteRow} /> 
            }
            ],
            defaultColDef: {
                width: 150,
                height: 100,
                editable: true,
                resizable: true,
                sortable: true,
                filter: true,
                colResizeDefault: 'shift',
                autoHeight: true,
                rowHeight: 500
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
        };
    }
onGridReady = params => {
      api = params.api;
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
    
}
onButtonClick = e => {
    const selectedNodes = api.getSelectedNodes()
    const selectedData = selectedNodes.map(node => node.data)
    const selectedDataStringPresentation = selectedData.map(a => a.firstName + ' ' + a.lastName + ' From ' + a.branch).join('\n ')
    alert(`Selected nodes: ${'\n'}${selectedDataStringPresentation}`)
}
onFilterTextBoxChanged = () => {

  api.setQuickFilter(document.getElementById('filter-text-box').value)
}
 hideOrShowColumn= (field,flag)=>{
    console.log(this.columnApi)
          this.columnApi.setColumnVisible(field,flag)
       }
deleteRow = () => {
        const selectedData = api.getSelectedRows();
        api.updateRowData({ remove: selectedData });
    }
closePopover() {
    this.setState({
        isPopoverOpen: false,
    });
}
PopOver = () => {
    this.setState({
        isPopoverOpen: !this.state.isPopoverOpen,
    });
}

totalPages=()=>
{
  this.setState({
    pageCount:this.gridApi.paginationGetTotalPages()
  })
}
goToPage = (params) => {
    this.gridApi.paginationGoToPage(params);
  };

pageSize=(number)=>
{
  this.setState({
      sizePage: number,
    },() => {
    this.gridApi.paginationSetPageSize(number);
    // console.log(this.state.sizePage);
    this.totalPages();

    });
}


render() {
    const button = (
        <EuiButtonIcon
            iconType="managementApp"
            iconSize="original"

            onClick={this.PopOver.bind(this)}
        >
        </EuiButtonIcon>
    );
    const { columnDefs, defaultColDef, rowData, isFirstName, isLastName,
        isAction, isBranch, isContact, isEmail, isTags, } = this.state
    return (
        <div
            className="ag-theme-balham"
            style={{
                height: '45vh',
                width: '100%'
            }}
        >
            <h2 className="bg-dark display-4 text-light" >Ag-Grid</h2>
            <div style={{ float: 'right' }}>
                
          <Popover
          columnDefs={columnDefs}
          hideOrShowColumn={this.hideOrShowColumn}
           
           />
                    
            </div>
            <FilterBox onFilterTextBoxChanged={this.onFilterTextBoxChanged} />
              
            {/* <input className="p-2 m-2 " type="text" onChange={this.searchData} placeholder="Search" /> */}
            <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}
                defaultColDef={defaultColDef}
                rowDataChangeDetectionStrategy='IdentityCheck'
                onGridReady={this.onGridReady}
                rowSelection="multiple"
                enableCellChangeFlash={true}
                onDragStopped={e => this.updatePopOver(e)}
                pagination={true}
                // paginationPageSize={this.state.sizePage}

            >
            </AgGridReact>
            <Pagination pageSize={this.pageSize}
            // totalPages={this.totalPages}
          pageCount={this.state.pageCount}
          goToPage={this.goToPage}
          sizePage={this.state.sizePage} />
            <button className=" btn btn-primary p-2 m-2 " onClick={this.onButtonClick}>Get selected rows</button>

        </div >
    );
}
}

export default App

