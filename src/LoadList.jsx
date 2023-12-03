import React, {useState, useEffect} from "react";

const LoadList = () => {

    const [list, setList] = useState([]); 

   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())   
      .then(data => localStorage.setItem('data', JSON.stringify(data)))
       }, []);

    let ls_list = localStorage.getItem('data');
   
    ls_list = JSON.parse(ls_list);
    
    console.log(ls_list, typeof ls_list);
    
   const clickHandler = () => {
       setList(ls_list);
   }
   
       
        
return (

 <>
    <button onClick = {clickHandler}>Get List</button>
    <ul>      
       {list.map((el) => <li key = {el.id}>{el.title} <button>Delete item</button></li> )}       
    </ul> 
</> 
 )
}

export default LoadList;