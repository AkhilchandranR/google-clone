import { Link } from 'react-router-dom';
import React from 'react';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import './SearchPage.css';
import Search from '../components/Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
    const[{term},dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);
    console.log(data);

    //get the key from this site
    // https://developers.google.com/custom-search/v1/using_rest
    // api key =  AIzaSyCZqdGKAtpd7B38ZKOfP0t7nZwr8aStQRk
    
    //configure search engine from this
    // https://cse.google.com/cse/create/new
    // seid -  9d99b40ff4f5b4b12 

    return (
        <div className="searchpage">
            <div className="searchpage__header">
                <Link to="/">
                <img 
                className="searchpage__logo"
                src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
                 alt="google-logo"/>
                 </Link>
                 <div className="searchpage__headerbody">
                     <Search hideButtons/>
                 <div className="searchpage__options">
                     <div className="options__left">
                        <div className="searchpage__option">
                            <SearchIcon/>
                            <Link to="/all">All</Link>
                        </div>
                        <div className="searchpage__option">
                            <DescriptionIcon/>
                            <Link to="/news">News</Link>
                        </div>
                        <div className="searchpage__option">
                            <ImageIcon/>
                            <Link to="/images">Images</Link>
                        </div>
                        <div className="searchpage__option">
                            <LocalOfferIcon/>
                            <Link to="/shopping">shopping</Link>
                        </div>
                        <div className="searchpage__option">
                            <RoomIcon/>
                            <Link to="/maps">maps</Link>
                        </div>
                        <div className="searchpage__option">
                            <MoreVertIcon/>
                            <Link to="/more">more</Link>
                        </div>
                     </div>
                     <div className="options__right">
                     <div className="searchpage__option">
                            <Link to="/settings">Settings</Link>
                        </div>
                        <div className="searchpage__option">
                            <Link to="/tools">Tools</Link>
                        </div>
                     </div>
                 </div>
                 </div>
            </div>
            {term &&(
                <div className="searchpage__results">
                    <p className="searchpage__resultcount">
                        About {data?.searchInformation.formattedTotalResults} 
                        results ({data?.searchInformation.formattedSearchTime}
                         seconds) for {term}
                    </p>
                    {data?.items.map(item=>(
                        <div className="searchpage__result">
                            <a href={item.link}>
                            {item.displayLink}
                            </a>
                            <a className="searchpage__title" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchpage__resultsnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
            
        </div>
    )
}

export default SearchPage
