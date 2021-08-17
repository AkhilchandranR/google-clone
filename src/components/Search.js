import React,{ useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionType } from '../reducer';

function Search({hideButtons = false}) {
    const[input,setInput] = useState('');
    const history = useHistory()
    const[state,dispatch] = useStateValue();

    const search = (e) =>{
        e.preventDefault();
        //dispatches the action with the search term
        dispatch({
            type:actionType.SET_SEARCH_TERM,
            term:input,
        })
        //push to the search page
        history.push('/search');
    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputicon"/>
                <input value={input} onChange={e=>setInput(e.target.value)}/>
                <MicIcon/>
            </div>
            {!hideButtons?(
            <div className="search__buttons">
                <Button variant="outlined" onClick={search} type="submit">Google search</Button>
                <Button variant="outlined">I'm feeling lucky</Button>
            </div>
            ):(
            <div className="search__buttons">
            <Button variant="outlined" onClick={search} type="submit" className="search__buttonshidden">Google search</Button>
            <Button variant="outlined" className="search__buttonshidden">I'm feeling lucky</Button>
            </div>
            )}
        </form>
    )
}

export default Search
