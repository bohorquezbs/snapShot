import React, { useEffect, useState } from 'react'
import Button from './Button';
async function fetchData(url) {
    const data = await fetch(url);
    const json = await data.json()
    return json
}

function Api() {
    const [search, setSearch] = useState('Pictures')
    const [results, setResults] = useState([])
    function getData() {
        const key = `63add3460cefd0a5212be6628bc88a11`
        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${search}&per_page=24&format=json&nojsoncallback=1`

        fetchData(url)
            .then(data => setResults(data.photos.photo))
    }
    

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='w-full'>
            <div className='flex flex-wrap gap-8'>
                {
                    results &&
                    results.map((data) =>
                        <Photo key={data.id} image={data} />
                    )
                }
            </div>
        </div>
    )
}
function Photo({ image: { farm, server, id, secret, title } }) {
    return (
        <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`} alt={title} />
    )
}

export default Api
