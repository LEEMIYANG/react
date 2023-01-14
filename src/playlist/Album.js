import React,{useState,useRef} from 'react';
import AlbumList from './AlbumList';
import AlbumInput from './AlbumInput';
import AlbumNames from './AlbumNames';
import SelectMusic from '../assets/api/Selected'

import './style.css'



const Album = () => {
    const [data,setData]=useState(SelectMusic)
    
    const no=useRef(data.length+1)
    const onDel=(id)=>{
        setData(data.filter(item=>item.id!==id))

    }
    // 고객삭제
    const onRemove=()=>{
        setData([])
    }
    // 고객초기화
    const onReset=()=>{
        setData(SelectMusic)
    }
    const onAdd=(name,age,image)=>{
        setData([
            ...data,
            {
                id:no.current++,
                song:name,
                artist:age,
                image:image
            }
        ])
    }
    
    
    return (
        <div className="wrap">
            <div className="left">
            <h1>My Play List <span>{data.length}</span><i class="xi-music"></i></h1>
            
           
            
            <AlbumList data={data} onDel={onDel} />
            <p className="btn">
                <button onClick={onRemove}>전체삭제</button>
                <button onClick={onReset}>처음재생목록</button>

            </p>
            </div>

            <div className="buyingmusic">
            <h2>추가 목록</h2>
                <div className="musiclist"><AlbumNames /></div>
                
                <div className="addlist"><AlbumInput onAdd={onAdd}/></div>
               
                
            </div>
            
        </div>
    );
};

export default Album;