import {useState, useEffect} from 'react'

export default function useFetchCourses() {
    
    const [courses, setCourses] = useState(null);
    console.log()

    useEffect(() => {
        console.log(process.env.REACT_APP_API_ADDRESS + `cursos`)
        fetch(process.env.REACT_APP_API_ADDRESS + `cursos`,{
	        'mode': 'cors',
	        'headers': {
            	'Access-Control-Allow-Origin': '*',
        	}
    	})
        .then(res => {
            return res.json();
        }).then(data => {
            console.log(data[0]);
            setCourses(data);
        });
    }, []);

    return {courses};
}