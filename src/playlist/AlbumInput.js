import React,{useRef,useState} from 'react';

const AlbumInput = ({onAdd}) => {
    const [form,setForm]=useState({
        song:'',artist:'',image:''
    })
    const nameRef=useRef();
    const {song,artist,image}=form
    const changeInput=(e)=>{
        const {name,value}=e.target
        setForm({
            ...form,
            [name]:value
        })
    }
    const onSubmit=(e)=>{
        e.preventDefault()
        onAdd(song,artist,image)
        setForm({song:'',artist:'',image:''})
        nameRef.current.focus()
    }
    return (
        <form className="formadd" onSubmit={onSubmit}>
            <p>
                <label>Title</label>
                <input type="text" name="song" value={song} onChange={changeInput} ref={nameRef}/>
            </p>
            <p>
                <label>Artist</label>
                <input type="text" name="artist" value={artist} onChange={changeInput}/>
            </p>
            <p>
                <label>Album Cover</label>
                <input type="text" name="image" value={image} onChange={changeInput} />
            </p>
            <p>
                <button type="submit">담기</button>
            </p>
        </form>
    );
};

export default AlbumInput;