import React from 'react';
import AlbumItem from './AlbumItem'

const AlbumList = ({data,onDel}) => {
    return (
        <ul className="playlist">{
            data.map(item=><AlbumItem key={item.id} item={item} onDel={onDel}/>)
        }
        </ul>
    );
};

export default AlbumList;