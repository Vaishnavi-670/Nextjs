'use client'
import React from 'react'

const Eventhandling = () => {

    const previewImage =(e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (data) => {
            const img = new Image();
            img.src = data.target.result;
            document.body.appendChild(img);
        }
        reader.readAsDataURL(file);
    }
    return (
        <div className='max-w-3xl mx-auto my-10 border' 
        onMouseMove={e => {
            document.getElementById('circle').style.left = e.clientX-20 + 'px';
            document.getElementById('circle').style.top = e.clientY-20 + 'px';
        }}>
            <div id='circle'
            onMouseDown={(e)=> {e.target.style.height='30px';e.target.style.width='30px'}}
            onMouseUp={(e)=> {e.target.style.height='46px';e.target.style.width='46px'}}
             className='absolute duration-300 border rounded-full size-12 border-black'></div>
            <h1>Event Handling</h1>
            <button onClick={() => { alert("button was clicked") }} className='border rounded bg-gray-200 hover:bg-white px-3 py-1'>click me</button>

            <input onChange={(e) => { console.log(e.target.value); }} className='mt-5 border border-black px-3 py-1 rounded w-full' type="text" />

            <input onChange={(e) => {console.log(document.body.style.backgroundColor = e.target.value);}} className='mt-5 block' type="color" />

            <input onChange={(e) => { console.log(e.target.value);}} className='mt-5' multiple type="file" />
            <label htmlFor="">Upload Image</label>
            <input type="file" accept='image/*' onChange={previewImage}/>

            <input type="text" className='border w-full mt-5'
            onKeyDown={(e) => {console.log(e.code);}} />

        </div>
    )
}

export default Eventhandling;