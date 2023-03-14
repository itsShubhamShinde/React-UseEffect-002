import React from 'react'
import './Search.css'

const Search = ({ inputvalue, setInputvalue, value, setValue }) => {

    return (
        <div className='Search' style={{position:"sticky",top:"0" , left:"0"}}>
            <div className='name'> 
                <h2>Movie Search App</h2>
            </div>
          
            <div className='inputDiv'>
            <input type="text" onChange={(e) => {
                setValue(e.currentTarget.value)
            }} />

            <button onClick={(e) => {
                setInputvalue(value)
            }
            }>Submit</button>

            </div>
        </div>
    )
}

export default Search;