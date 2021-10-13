import React from "react";
import useFetch from '../useFetch';
import {useState} from 'react';

export default function ReviewList({courseId}) {

    const [reviews, setReviews] = useState(null);
    const data = useFetch(courseId);

    useState(() => {
        setReviews(data);
        console.log(`Reviews ${reviews}`)
    },[]);
    return (
        <div>
        adsdas
        desarrolladoads
        </div>
    )
}