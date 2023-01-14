import React from 'react';

const AlbumItem = ({item,onDel}) => {
    const {id,song,artist,image}=item
    return (
        <li>
            <p className='albumcover'>
                <img src={image} alt={song}/>
            </p>       
            <div className="visualtxt">
                <strong>Title : {song}</strong>
                <span>Artist : {artist}</span>
                <button onClick={()=>onDel(id)}>삭제</button>
            </div>
        </li>
    );
};

export default AlbumItem;