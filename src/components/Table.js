import  { COLUMNS } from '../input/columns';
import React, { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import Pagination from './Pagination';


const Table = ({ countries }) => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo (() => countries, [countries])
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        setPageSize,
        prepareRow
    } = useTable({
        columns,
        data
    },
    usePagination
    )

    const { pageIndex, pageSize } = state;

    return (
        <>
            <table {...getTableProps()} className='table'>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell => {
                                        return <td {...cell.getCellProps}>{cell.render('Cell')}</td>
                                    })
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Pagination 
                nextPage={() => nextPage()} 
                previousPage={() => previousPage()} 
                canPreviousPage={canPreviousPage}
                canNextPage={canNextPage}
                pageIndex={pageIndex}
                pageOptions={pageOptions}
                pageSize={pageSize}
                setPageSize={setPageSize}

            />
        </>
    );
};

export default Table;