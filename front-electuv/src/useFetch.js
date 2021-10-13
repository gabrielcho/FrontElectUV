import {useState, useEffect} from 'react'

export default function useFetch(courseId) {
    
    const [reviews, setReviews] = useState(null);
    useEffect(() => {
        console.log(process.env.REACT_APP_API_ADDRESS + `reviews/${courseId}`)
        fetch(process.env.REACT_APP_API_ADDRESS + `reviews/${courseId}`, {
	        'mode': 'cors',
	        'headers': {
            	'Access-Control-Allow-Origin': '*',
        	}
    	})
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setReviews(data);
            return data;
        });
    }, []);

    return {reviews}
}