import React, {useState}from 'react'

const ToDoList = () => {
    const [activity, setActivity] = useState('');
    const [listData, setListData] = useState([]);
    const addActivity = ()=>{
        setListData((listData) =>{
            const newList = [...listData, activity];
            console.log(newList);
            setActivity('');
            return newList;
        })

    }
    const removeActivity =(index)=>{
        const updatedList = listData.filter((list, key)=>{
           return index !== key;
        })
        setListData(updatedList);
    }

    const removeAllActivity =()=>{
        setListData([]);
    }
    const addToList = (e) =>{
        if(e.key === 'Enter') {
            addActivity();
        } 
    }
    return (
        <>
            <div className='container'> 
                <h1><span>TO</span><span>DO</span><span>LIST</span></h1>
                <input type= 'text' placeholder='ADD TODO`S' value={activity} onChange = {(e)=> setActivity(e.target.value)} onKeyDown={addToList}/>
                <button onClick={addActivity}>ADD</button>
                {listData.length >= 1 && <p className='list-heading'>YOU MUST DO</p>}
            {listData !== [] && listData.map((list,index)=>{
                return (
                    <>
                        <p key={index}>
                            <div className='listData'>{list}</div>
                            <div className='btn-position'><button className='btn-remove' onClick={() =>removeActivity(index)}>REMOVE</button></div>
        
                        </p>
                    </>
                )
            })}
            {listData.length >= 1 && <button className='btn-remove-all' onClick={removeAllActivity}>REMOVE ALL</button>}
            </div>
        </>
    );
 };

export default ToDoList