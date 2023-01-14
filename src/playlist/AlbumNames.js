import React from 'react';
import AlbumNameItem from './AlbumNameItem';
import dataList1 from '../assets/api/unSelected';

const AlbumNames = () => {
    return (
        <div className="music-list">
            
            <ul className="buyinglist">
                {
                    dataList1.map(item=><AlbumNameItem key={item.id} item={item}/>)
                }
            </ul>
        </div>
    );
};

export default AlbumNames;