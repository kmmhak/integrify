import Button from './Button';
import * as MdIcons from "react-icons/md";

const Pagination = ({
    nextPage, 
    previousPage, 
    canPreviousPage, 
    canNextPage,
    pageIndex,
    pageOptions,
    setPageSize,
    pageSize
}) => {

    return(
        <div className='pagination'>
            <div className='pagination_item'>
                Rows per page:{' '} 
                <select 
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                >
                    {[5, 10, 20, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            {pageSize}
                        </option>
                    ))}
                </select>
            </div>
            <div className='pagination_item'>
                {pageIndex + 1} - {pageOptions.length}
            </div>
        
            <div className='pagination_item'>
                <Button 
                    disabled={!canPreviousPage}
                    onClick={previousPage} 
                    icon={<MdIcons.MdOutlineKeyboardArrowLeft />}
                    
                    />
                <Button 
                    onClick={nextPage} 
                    icon={<MdIcons.MdOutlineKeyboardArrowRight />}
                    disabled={!canNextPage}
                    />
            </div>
        </div>
    )

}

export default Pagination;