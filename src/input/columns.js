import Button from '../components/Button'
import * as MdIcons from "react-icons/md";

export const COLUMNS = [
    {
        Header: 'Flag',
        accessor: 'flag',
        Cell: tableProps => (
            <img
                src={tableProps.row.original.flag}
                width={150}
                alt='Flag'
            />
        )
    },
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Region',
        accessor: 'region',
    },
    {
        Header: 'Population',
        accessor: 'population',
    },
    {
        Header: 'Languages',
        accessor: 'languages',
        Cell: tableProps => {
            return (
                tableProps.row.original.languages.map((language) => 
                    <ul>
                        <li>{language}</li>
                    </ul>
                )
            )
        }
            

    },
    {
        Header: ' ',
        Cell: tableProps => {
            return (
                <Button icon={<MdIcons.MdOutlineKeyboardArrowRight />} url={`/name/${tableProps.row.original.name}`}/>
            )
        }
    }

]