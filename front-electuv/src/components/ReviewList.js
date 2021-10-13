import React from "react";
import useFetch from '../useFetch';
import {useState} from 'react';
import { Stack } from "@mui/material";
import Review from './Review'
export default function ReviewList({courseId}) {


    const {reviews} = useFetch(courseId);


    return (
        <Stack spacing={2}>
            { reviews ? reviews.map((review, counter) => {
                    console.log(review);
                    return (
                    <div key={counter}>
                        <Review 
                        key={counter}
                        rating={review.rating} 
                        authorName={review.author}
                        teacherName={review.teacher}
                        reviewPeriod={review.period}
                        reviewDate={review.createdAt}
                        reviewTitle={review.title}
                        reviewContent={review.content} />
                    </div>
                    )
                }) : <div>No se pudo obtener datos de reviews</div>
            }
        </Stack>
    )
}