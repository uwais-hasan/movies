import './Pagination.css'
import {useState} from "react";

const Pagination=({page,setPage,totalPages})=>{

    let maxPages = totalPages;
    let items = [];
    let leftSide = page - 2;
    if(leftSide <= 0 ) leftSide=1;
    let rightSide = page + 2;
    if(rightSide>maxPages) rightSide = maxPages;
    for (let number = leftSide ; number <= rightSide; number++) {
        items.push(
            <div key={number} className={(number === page ? 'round-effect active' : 'round-effect')} onClick={()=>{ setPage(number)}}>
                {number}
            </div>,
        );
    }
    const nextPage = () => {
        if(page<maxPages){
            setPage(page+1)
            window.scroll(0,0)
        }
    }

    const prevPage = () => {
        if(page>1){
            setPage(page-1)
            window.scroll(0,0)
        }
    }
    return(
        <div className="flex-container">

            <div className="paginate-ctn">
                <div className="round-effect" onClick={prevPage}> &lsaquo; </div>
                {items}
                <div className="round-effect" onClick={nextPage}> &rsaquo; </div>
            </div>
        </div>
    )
}
export default Pagination

