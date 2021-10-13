
import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import CourseInfo from '../components/CourseInfo';
import ReviewList from '../components/ReviewList';
import '../styles/CoursePage.css'
import {useLocation} from 'react-router-dom';

export default function CoursePage(){
    
    const [course, setCourse] = useState(null);
    const {id} = useParams()

    const location = useLocation();
    const {courseName, courseCode, courseId, courseRating, reviewCount, courseDescription, courseFaculty} = location.state

    useEffect(() => {
        console.log(process.env.REACT_APP_API_ADDRESS + `${id}`)
        fetch(process.env.API_ADDRESS + `${id}`)
        .then(res => {
            return res.json();
        }).then(data => {
            console.log(data)
            setCourse(data);
        });
    }, []);

    return (
        <div className='CourseDiv'>
            <CourseInfo 
            courseName={courseName} 
            courseCode={courseCode} 
            courseId={courseId}  
            courseRating={courseRating}
            reviewCount={reviewCount}
            courseDescription={courseDescription}
            courseFaculty={courseFaculty}
            className='g f1'/>
            <ReviewList  courseId={id} className='g f2'/>
        </div>
    )
}