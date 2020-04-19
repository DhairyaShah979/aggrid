import React, { Component } from 'react'

class FilterBox extends Component {
    render() {
        const { onFilterTextBoxChanged } = this.props

        return (
            <div>
            <input  type="text" id="filter-text-box" placeholder="Filter..." onInput={onFilterTextBoxChanged}/>

                {/* <input className="p-2 m-2 " type="text" onInput={searchData} placeholder="Search" /> */}

            </div>
        )
    }
}

export default FilterBox