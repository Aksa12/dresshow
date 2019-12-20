import React, {Component} from 'react';
import styles from 'materialize-css';

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
      <ul className="pagination container center">
        {currentPage == 1 ?<li class="disabled" style={{pointerEvents:"none"}}><a href="#!"><i class="material-icons">chevron_left</i></a></li>:<li class="waves-effect"><a onClick ={() => paginate(currentPage-1)} href='#'><i class="material-icons">chevron_left</i></a></li>
        }
        {pageNumbers.map(number => (
          currentPage == number ? <li key={number} className="active waves-effect">
            <a onClick ={() => paginate(number)} href='#'>
              {number}
            </a>
          </li> : <li key={number} className="waves-effect">
            <a onClick ={() => paginate(number)} href='#'>
              {number}
            </a>
          </li>      
        ))}
        {currentPage == pageNumbers[pageNumbers.length-1] ?<li class="disabled"><a href="#!"><i class="material-icons">chevron_right</i></a></li>:<li class="waves-effect"><a onClick ={() => paginate(currentPage+1)} href='#'><i class="material-icons">chevron_right</i></a></li>
        }
      </ul>
  );
};

export default Pagination;