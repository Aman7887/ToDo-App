import React, { useState } from 'react'
import './Todo.css'

export const Todo = () => {
    const [data, setData] = useState('');
    const [data1, setData1] = useState('');
    const [time, setTime] = useState();
    const [store, setStore] = useState([]);

    const handleClick = () => {
        setStore([
            ...store,
            { data, data1, time }
        ])
        setData('')
        setData1('')
        setTime('dd-mm-yyyy')
    }

    const handleRemove = (index) => {
        const hello = store
        hello.splice(index, 1)
        setStore([...hello])
    }
    return (
        <>
            <div className='list'>
                <input className='list1' onChange={(e) => { setData(e.target.value) }} value={data} type='text' />
                <input className='lists' onChange={(e) => { setData1(e.target.value) }} value={data1} type='text' />
                <input className='list2' onChange={(e) => { setTime(e.target.value) }} type='date' />
                <button onClick={handleClick} className='list3'>Add</button>
            </div>
            <div className='hello'>
                <div className='data'>Products</div>
                <div className='data'>Kg || L</div>
                <div className='date'>Date</div>
                
            </div>
            {
                store.map((element, index) => {

                    return (
                        <div className='hello' key={index}>
                            <div className='data'>{element.data}</div>
                            <div className='data'>{element.data1}</div>
                            <div className='data'>{element.time}</div>
                            <button onClick={handleRemove} className='removeBtn'>Remove</button>
                        </div>
                    )
                })
            }
        </>
    )
}
