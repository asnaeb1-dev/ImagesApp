import React, { useEffect, useState } from 'react'
import './photoapp.css';
import { APP_TITLE } from '../../api/strings';

import Title from '../Title/Title';
import SearchBar from '../SearchBar/SearchBar';

const PhotoApp = () => {
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        console.log(searchText);
    }, [searchText]);

    return (
        <div className='photo-app-main'>
            <Title AppTitle={APP_TITLE}/>
            <SearchBar getSearchText={text => setSearchText(text)} />
        </div>
    )
}

export default PhotoApp