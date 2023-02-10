import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Table from './Table';

const Home = () => {

    const [countries, setCountries] = useState([]);
    const [fetchComplete, setfetchComplete] = useState(false)

    useEffect(() => {

    axios
        .get(`https://restcountries.com/v3.1/all`)
        .then(function (response) {
            if (response.data && response.data.length > 0) {
                let number = 0;
                const tabledata = []

                response.data.forEach((item) => {
                    let countryData = {};
                    countryData.flag = item.flags.png;
                    countryData.name = item.name.common;
                    countryData.region = item.region;
                    countryData.population = item.population;
                    countryData.languages = []
                    if (item.languages !== undefined) {
                        Object.keys(item.languages).forEach(function (key){
                            countryData.languages.push(item.languages[key]);
                        })
                    } else {
                        countryData.languages.push('');
                    }
                    countryData.id = number;
                    number++
                    tabledata.push(countryData);
                    })
                setCountries(tabledata)
                setfetchComplete(true);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);
  
    if (fetchComplete) { 
        return (
            <>
                <Navbar />
                <div className='container'>
                    <Table countries={countries} />
                </div>
            </>
        )
    } else {
        return <h1>Loading...</h1>;
    } 
    
}

export default Home;