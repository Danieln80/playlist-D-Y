import { useEffect, useState } from "react";
function Search() {
const [search,setSearch] = useState('eyal');
const [rest,setRes] = useState([]);
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com',
        'X-RapidAPI-Key': '85c5ca6ec1mshbb8a4e82360bfcdp14b850jsnb8b31b073b21'
    }
};

useEffect(() => {
    
    fetch(`https://simple-youtube-search.p.rapidapi.com/search?query=${search}&safesearch=false`, options)
    .then(response => response.json())
    .then(response => setRes(response.results))
    .catch(err => console.error(err));
}, [search])
    console.log(rest);
 
        return <>
            <div>
                <input className="search" type="search" placeholder="search" onChange={(e) => { setSearch( e.target.value )}} />
            </div>
                <div id="res" onClick={()=>{rest.live = true}}>{(!rest) ? "loding...": rest.map((v)=>{
                    return<div className="res" 
                    style={{ backgroundImage: `url(${v.thumbnail.url})`,cursor: 'pointer'}} >
                      <label> {v.channel.name}</label>
                      </div>    
                      })}
                </div>
        </>
    }

export default Search