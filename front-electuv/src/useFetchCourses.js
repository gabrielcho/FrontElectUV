import {useState, useEffect} from 'react'

export default function useFetchCourses() {
    
    const [courses, setCourses] = useState(null);
    console.log()

    useEffect(() => {
        console.log(process.env.REACT_APP_API_ADDRESS + `courses`)
        fetch(process.env.REACT_APP_API_ADDRESS + `courses`,{
	        'mode': 'cors',
	        'headers': {
            	'Access-Control-Allow-Origin': '*',
        	}
    	})
        .then(res => {
            return res.json();
        }).then(data => {
            setCourses(data);
        });
    }, []);

    return courses;
}