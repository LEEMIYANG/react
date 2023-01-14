import React from 'react';

const AlbumNameItem = ({item}) => {
    const {id,song, artist,image}=item
    return (
        <li>
            <span>{id}</span>
            <strong>{song}</strong>
            <em>Artist <b>{artist}</b></em>
            <span>커버이미지 : {image}</span>
        </li>
    );
};

export default AlbumNameItem;