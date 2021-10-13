
import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import CourseInfo from '../components/CourseInfo';
import ReviewList from '../components/ReviewList';
import '../styles/CoursePage.css'
import {useLocation} from 'react-router-dom';
import useFetch from '../useFetch';

export default function CoursePage(){
    
    const [course, setCourse] = useState(null);
    const {id} = useParams()

    const location = useLocation();
    const {courseName, courseCode, courseId, courseRating, reviewCount, courseDescription, courseFaculty} = location.state

    

    



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
            <ReviewList courseId={1}/>    
        </div>
    )
}
//<ReviewList  courseId={courseId} className='g f2'/>