// import React, { Component } from 'react'
// import { EuiPopover, EuiSwitch, EuiSpacer, EuiButtonIcon } from '@elastic/eui';

// export class Popover extends Component {
 
//     render() {
//         const {
//             isFirstName, isLastName, isBranch, isContact, isEmail, isAction, isTags, PopOver, closePopover, displayColumn, isOpen } = this.props;
//         console.log(PopOver)
//         return (
//             <EuiPopover
//                     ownFocus
//                     button={<EuiButtonIcon
//                         iconType="managementApp"
//                         iconSize="original"
//                         onClick={PopOver}
//                     > 
//                     </EuiButtonIcon>}
//                     isOpen={isOpen}
//                     closePopover={closePopover}
//                     >
//                     <div>
//                         <EuiSwitch
//                             label="FirstName"
//                             checked={isFirstName}
//                             onChange={e => displayColumn(e.target.checked, 'firstname', "isFirstName")}
//                         />
//                         <EuiSpacer size="s" />
//                         <EuiSwitch
//                             label="LastName"
//                             checked={isLastName}
//                             onChange={e => displayColumn(e.target.checked, 'lastname', "isLastName")}
//                         />
//                         <EuiSpacer size="s" />
//                         <EuiSwitch
//                             label="Branch"
//                             checked={isBranch}
//                             onChange={e => displayColumn(e.target.checked, 'branch', "isBranch")}
//                         />
                        
//                         <EuiSpacer size="s" />
//                         <EuiSwitch
//                             label="Contact"
//                             checked={isContact}
//                             onChange={e => displayColumn(e.target.checked, 'contact', "isContact")}
//                         />
//                         <EuiSpacer size="s" />
//                         <EuiSwitch
//                             label="Email"
//                             checked={isEmail}
//                             onChange={e => displayColumn(e.target.checked, 'email', "isEmail")}
//                         />
//                         <EuiSpacer size="s" />
//                         <EuiSwitch
//                             label="Action"
//                             checked={isAction}
//                             onChange={e => displayColumn(e.target.checked, 'action', "isAction")}
//                         />
//                         <EuiSpacer size="s" />
//                         <EuiSwitch
//                             label="Tags"
//                             checked={isTags}
//                             onChange={e => displayColumn(e.target.checked, 'tags', "isTags")}
//                         />
//                     </div >
//                 </EuiPopover>
//         )
//     }
// }
// export default Popover;





import React, { Component } from 'react'
import {
 EuiFormRow,
 EuiPopover,
 EuiButtonToggle, EuiButton,EuiButtonIcon,
 } from "@elastic/eui";

 class PopOver extends Component {
constructor(props) {
  super(props)
 
 
  this.state={
   isPopoverOpen:false,
   toggle:[] 
  }
 
}
onButtonClick=()=>{
 this.setState({
   isPopoverOpen:!this.state.isPopoverOpen,
 
 })
}

closePopover=()=>{
 this.setState({
   isPopoverOpen: false,
 })
}
  

//show Hide functionality
hideColumnBtn=(i,column_name,flag)=>{
const{hideOrShowColumn}=this.props
 console.log(i,column_name,flag)

 const arr=this.state.toggle
 console.log(arr[i])
arr[i]=true
 if(arr[i]==true && flag==false){
   arr[i]=false
}
if(arr[i]==false && flag==true){
    arr[i]=true

}
 this.setState({
         toggle:arr
       });
       hideOrShowColumn(column_name,!flag)
} 

componentDidMount=()=>{
    console.log(this.props)
    const {columnDefs}=this.props
    const arr=[]
    const value=true
    let i=0;
    if(i,i<columnDefs.length ,i++){
      arr.push(value)
    }
    this.setState({
      toggle:arr  
    },()=>console.log(this.state))

}
render() {
  const {columnDefs}=this.props
  let newArray=this.state.toggle
  // console.log(columnDefs)
   const button = (
     <EuiButton
       iconType="gear"
       iconSide="right"
       onClick={()=>this.onButtonClick()}
      />
   )
    return (

 <div> 
 <EuiPopover 
         className="pul-right button"
         iconSide="right"
         ownFocus
         button={button}
         isOpen={this.state.isPopoverOpen}
         closePopover={this.closePopover}
     > 
     {
         columnDefs.map((column,index)=>{
      
 console.log(newArray[index])
     if(newArray[index]!=='undefined'){
      
        return( 
                <div key={index}>
               <EuiFormRow
                id="asdf"
                hasChildLabel={true}>
               <EuiButtonToggle 
                label={column.field}     
                iconType={newArray[index] ? 'eyeClosed' : 'eye'}
                iconSide="left"
                onChange={(e)=>this.hideColumnBtn(index,column.field,e.target.checked)}
               
            />
            </EuiFormRow>
            </div>)
     }
         })
        
     }
    
 </EuiPopover>
      </div>
  
)
  }
}

export default PopOver

