import React from "react";
import './Pagination.css';
const Pagination = ({itemsPerPage, totalItems, paginate}) => {

    const itemsNumbers = [];

    for(let i =1; i <= Math.ceil(totalItems / itemsPerPage); i++){
        itemsNumbers.push(i);        
    }
    return(
        
            <>
              <ul className="pagination">
                {itemsNumbers.map( (number) => (
                    <li className="page-item" key={number}>
                        <a href="!#" className="page-link" onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))}
              </ul>
            </>        
    )
}

export default Pagination;