import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useState, useEffect} from 'react';

const [courses, setCourses] = useState(null);

const data = useFetchCourses();

useEffect(() => {
    setCourses(data);
}, []);


export default function CourseCardBox(){
    return (
        <Box>
            <Grid container>
                
            </Grid>
        </Box>
    )
}