import React, {useState, useEffect} from "react";

const LoadList = () => {

    const [list, setList] = useState([]); 

   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
     .then(data => setList(data))},[]);

return (
    <ul>
       {list.map((el) => <li key = {el.id}>{el.title}</li> )}
      </ul> 
    
) 

}

export default LoadList;