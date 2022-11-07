import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io'

function Search({ searchTerm, setSearchTerm }) {
    const navigate = useNavigate();

    return (
        <form>
            <div className="what">
                <div className="input-group">
                    <input 
                        type="text" 
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="searchInput"
                        value={searchTerm}
                        placeholder="Search"
                        onFocus={() => navigate('/search')}
                        />
                </div>
            </div>
        </form>
        
    )
}

export default Search