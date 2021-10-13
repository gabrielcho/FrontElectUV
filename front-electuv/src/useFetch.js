import {useState, useEffect} from 'react'

export default function useFetch(courseId) {
    
    const [review, setReview] = useState(null);
    console.log()

    useEffect(() => {
        console.log(process.env.REACT_APP_API_ADDRESS + `reviews/${courseId}`)
        fetch('https://' + process.env.REACT_APP_API_ADDRESS + `reviews/${courseId}`)
        .then(res => {
            return res.text();
        }).then(data => {
            console.log(data)
            setReview(data);
        });
    }, []);

    return review;
}