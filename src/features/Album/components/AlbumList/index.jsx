import React from 'react';
import PropTypes from 'prop-types';
import Album from '../album'
import './styles.scss'

AlbumList.propTypes = {
    albumList: PropTypes.array
};

function AlbumList({albumList}) {
    return (
      <div className="album__wapper">
        <ul className="album-list">
           {albumList.map(data => <li key={data.id}>
               <Album album={data}/>
           </li>)}
       </ul>
      </div>
    );
}

export default AlbumList;