import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as MdIcons from "react-icons/md";
import Button from './Button';

const Country = () => {

    let { countryName } = useParams();
    const [data, setData] = useState({});
    const [fetchComplete, setFetchComplete] = useState(false)

    useEffect(() => {

    axios
        .get(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(function (response){
            if (response.data && response.data.length > 0) {
                setData(response.data[0])
                setFetchComplete(true)
            }
        })
        .catch(function (error){
            console.log(error)
        });

    }, [countryName])


    console.log(data);

    if(fetchComplete) {
        return (
            <div className='container'>
                <h1>{data.name.common}</h1>
                <h3>{data.capital}</h3>
                <div className='flag'>
                    <img
                        src={data.flags.png}
                        width={500}
                        alt={data.flags.alt}
                        />
                </div>
                <div className='description'>
                    The country belongs to <span>{data.region}</span> region and <span>{data.subregion}</span> subregion. 
                    Located at the <span>{data.latlng[0]}</span> °N and <span>{data.latlng[1]}</span> °W, 
                    this country has a population of <span>{data.population}</span> and it has gained 
                    the independent, according to the CIA World Factbook.
                </div>
                <Button icon={<MdIcons.MdOutlineKeyboardArrowLeft />} url={`/`}/>
            </div>
        )

    } else {
        return <h1>Loading...</h1>;
    }
        
    
}

export default Country;