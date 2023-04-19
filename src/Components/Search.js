import { useState, useEffect } from 'react';

const Search = () => {
    const [search, setSearch] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        fetchSearchResult();
    },[search]);

    const fetchSearchResult = async () => {
        const URL = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${search}`;
        const searchData = await fetch(URL);
        const searchDataJson = await searchData.json();
        console.log('Search Result',searchDataJson);
        setSuggestions(searchDataJson[1]);
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center relative">
            <div className="h-12 flex justify-center items-center fixed">
                <input type='search' placeholder="search" className="w-96 h-full text-center border-4 rounded-l-3xl" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button className="text-2xl w-24 font-extrabold h-full border-4 rounded-r-3xl border-l-0">🔍</button>
            </div>
            <ul className='relative top-36 h-auto w-96 shadow-lg rounded-b-3xl px-8'>
                {
                    suggestions.length > 0 && 
                    suggestions.map((ele, index) => (
                        <li key={index}>{ele}</li>
                    )) 
                }
            </ul>
        </div>
    )
};

export default Search;