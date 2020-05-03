import React from 'react'

export default function Searchbar(props) {
    return (
        <div>
            <label name="search">Search food</label>
            <input className="input"type="text" name="search" value={props.search} onChange={props.function}/>
        </div>
    )
}
