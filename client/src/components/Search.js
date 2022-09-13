import React from 'react'

function Search() {
    return (
        <form>
            <div>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search"></input>
                    <button type="button" className="btn btn-success"><i className="bi-search"></i></button>
                </div>
            </div>
        </form>
        
    )
}

export default Search