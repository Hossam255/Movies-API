import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';
import {getPage} from '../redux/action/movieAction'


const Paginate = ()=> {

    const [pageCount, setPageCount] = useState(0)
    const dispatch = useDispatch()
    const pages = useSelector((state) => state.pageCount)

    useEffect(()=> {
        setPageCount(pages)
        
    
    },[])

    const handlePageClick = (data) => {
        dispatch(getPage(data.selected + 1))
    }
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="التالى"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="السابق"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    )
}

export default Paginate