import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Chip from "@mui/material/Chip";
import CommentIcon from "@mui/icons-material/Comment";
import Grid from "@mui/material/Grid";

export default function CourseInfo({courseName, courseCode, courseRating, reviewCount, courseDescription, courseFaculty}) {
  return (
    <Card sx={{ maxWidth: 850 }}>
      <CardContent>
        <Grid container spacing={4}>
          <Grid item>
            <Typography
              align="left"
              mb={"4px"}
              gutterBottom
              variant="h3"
              component="div"
            > 
              {courseName}
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              align="center"
              variant="h3"
              color="text.secondary"
            >
              {courseCode}
            </Typography>
          </Grid>
        </Grid>

        <Typography paragraph={true} variant="body1" color="text.secondary">
          {courseDescription}
        </Typography>
        <Grid container spacing={4}>
          <Grid item>
            <Chip label={courseRating} icon={<StarIcon />} />
          </Grid>

          <Grid item>
            <Chip label={reviewCount} icon={<CommentIcon />} />
          </Grid>

          <Grid item>
            <Chip variant="outlined" color="info" label={courseFaculty} />
          </Grid>
        </Grid>
      </CardContent>

    </Card>
  );
}
