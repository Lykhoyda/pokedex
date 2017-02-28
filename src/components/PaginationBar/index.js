import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import styles from './styles.css';

const PaginationBar = ({ total, onClick, defaultPageSize }) => { 
    return (
        <div className="align-center">
            <Pagination total={total} defaultPageSize={12} onChange={onClick} />
        </div>
    )
}


export default PaginationBar;