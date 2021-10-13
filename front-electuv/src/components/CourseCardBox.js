import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useState, useEffect} from 'react';
import useFetchCourses from '../useFetchCourses';
import CourseCard from './CourseCard';






export default function CourseCardBox(){
    
    const {courses} = useFetchCourses();

    return (
        <Box>
            <Grid container>
                {
                    courses ? courses.map((course, counter) =>  {
                        return (
                            <CourseCard 
                            key={counter}
                            courseName={course.coursename} 
                            courseFaculty={course.faculty} 
                            courseCode={course.coursecode} 
                            courseId={course.id} 
                            courseRating={course.rating}
                            reviewCount={course.reviewcount}
                            courseDescription={course.description} />
                        )
                    }) : <div> No se pudo obtener datos de los cursos</div>
                }
            </Grid>
        </Box>
    )
}