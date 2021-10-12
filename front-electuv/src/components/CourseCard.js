import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Chip from "@mui/material/Chip";
import CommentIcon from "@mui/icons-material/Comment";
import Grid from "@mui/material/Grid";

export default function CourseCard({courseName, courseCode, courseId, courseRating, reviewCount, courseDescription, courseFaculty}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography
            align="center"
            mb={"4px"}
            gutterBottom
            variant="h3"
            component="div"
          >
            {courseName}
          </Typography>

          <Typography
            mb={"10px"}
            align="center"
            variant="subtitle1"
            color="text.secondary"
          >
            {courseCode}
          </Typography>

          <Typography paragraph="true" variant="body1" color="text.secondary">
            {courseDescription}
          </Typography>
          <Grid container spacing={4} >
            <Grid item>
              <Chip className="chipCourseRating" label={courseRating} icon={<StarIcon />} />
            </Grid>

            <Grid className="chipReviewCount" item>
              <Chip label={reviewCount} icon={<CommentIcon />} />
            </Grid>

            <Grid item>
              <Chip variant="outlined" color="info" label={courseFaculty} />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
