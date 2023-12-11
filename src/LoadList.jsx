import React, {useState, useEffect} from "react";
import Pagination from './Pagination';
import './LoadList.css';

const LoadList = () => {

    const [list, setList] = useState([]);
    const [curentIndex, setCurentIndex] = useState(1);
    const [itemsPerPage] = useState(10); 

   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())   
      .then(data => localStorage.setItem('data', JSON.stringify(data)))
       }, []);   
    

   const lastItemIndex = curentIndex * itemsPerPage;
   const firstItemIndex = lastItemIndex - itemsPerPage;
   const curentItem = list.slice(firstItemIndex, lastItemIndex);

   const paginate = itemNumber => setCurentIndex(itemNumber);
   
const getListFromLS = () => {        
      return JSON.parse(localStorage.getItem('data'));
   };
    
   const clickHandler = () => {
       setList(getListFromLS());
   }

   const removeItem = (e) => {
      
      let newList = getListFromLS().filter((el) => {
         console.log(el.id,+e.target.parentNode.id )
          return el.id !== Number(e.target.parentNode.id)
      });
       localStorage.setItem('data', JSON.stringify(newList))
    
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
   }
        
return (

 <div className="wrapper">
    
    <button onClick = {clickHandler}>Get List</button>
    <ul>      
       {curentItem.map((el) => <li key = {el.id} id={el.id} className={`${el.completed ? "done" : "" }`}> 
                           <input type="checkbox" className="checkbox" onChange={handleChange}></input>
                             {el.title}
                           <button onClick={removeItem}>Delete item</button>
                        </li>
               )}       
    </ul>
     
     <Pagination
       itemsPerPage = {itemsPerPage}
       totalItems= {list.length}
       paginate = {paginate}
     />
</div> 
 )
}

export default LoadList;