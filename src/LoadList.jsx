import React, {useState, useEffect} from "react";
import './LoadList.css';

const LoadList = () => {

    const [list, setList] = useState([]);    

   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())   
      .then(data => localStorage.setItem('data', JSON.stringify(data)))
       }, []);   
    
   //  console.log(ls_list, typeof ls_list);

   const getListFromLS = () => {        
      return JSON.parse(localStorage.getItem('data'));
   };
    
   const clickHandler = () => {
       setList(getListFromLS());
   }

   const removeItem = (e) => {
      console.log('i am work',e.target.parentNode.id);
      let newList = getListFromLS().filter((el) => {
         console.log(el.id,+e.target.parentNode.id )
          return el.id !== Number(e.target.parentNode.id)
      })
       localStorage.setItem('data', JSON.stringify(newList))
      //  console.log(newList);
       clickHandler();
   };
   
   const handleChange = (event) => {   
      
      let newList = getListFromLS().filter((el) => {

         if(el.id === Number(event.target.parentNode.id) && event.target.checked) {
             el.completed = true;
         } else  if (el.id === Number(event.target.parentNode.id) && !event.target.checked){
              el.completed = false
         }     
      
          return el;
      })
       localStorage.setItem('data', JSON.stringify(newList))
   
       clickHandler();
         // console.log(newList);     
   }
        
return (

 <div className="wrapper">
    <button onClick = {clickHandler}>Get List</button>
    <ul>      
       {list.map((el) => <li key = {el.id} id={el.id} className={`${el.completed ? "done" : "" }`}> 
                           <input type="checkbox" className="checkbox" onChange={handleChange}></input>
                             {el.title}
                           <button onClick={removeItem}>Delete item</button>
                        </li>
               )}       
    </ul> 
</div> 
 )
}

export default LoadList;