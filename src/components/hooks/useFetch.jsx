import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null); // To store the data.
    const [isPending, setIsPending] = useState(true); // To store whether the fetch fucntion is waiting for data.
    const [error, setError] = useState(null); // To store the error message.


    useEffect(() => { // activate every time this component is rendered. 
        setTimeout(() => { // Timeout funtion to simulate the effect of loading times (remove when building a actual app).
            fetch(url) // Make a get request to the Json Data file.
            .then(res =>  { // Check for response
                console.log(res);
                if(!res.ok) {
                    throw Error('The requested data was: ' + res.statusText); // Throw an error if there is no data found.
                }
                return res.json(); // Return the json of that response
            })
            .then(data => { // If data is in that response.
                setData(data); // Set data with the retrieved data.
                setIsPending(false); // Set pending to false since the data is loaded.
                setError(null); // Set error to null since there is no error.
            })
            .catch(err => { // If an error occurs then set then catch it.
                setIsPending(false); // Set pending to false since there is an error that occured.
                setError(err.message); // Set error with the message of that error.
            })
        }, 1000); // Set timeout to be 1 sec (1000ms).
    }, [url]); 

    return {data, isPending, error} // Return all the data into an object. 
}
 
export default useFetch;