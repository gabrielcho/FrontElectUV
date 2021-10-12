import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";

export default function Review({reviewId, rating, authorName, teacherName, reviewPeriod, reviewDate, reviewTitle, reviewContent }) {
  return (
    <Card align="center" sx={{ maxWidth: 900}}>
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
              {reviewTitle}
            </Typography>
          </Grid>

          <Grid item>
            <Chip size="small" label={rating} icon={<StarIcon />} />
          </Grid>
        </Grid>

        <Grid container spacing={4}>

          <Grid item>
            {teacherName}
          </Grid>

          <Grid item>
            {reviewPeriod}
          </Grid>
        </Grid>


        <Typography mt={"20px"} paragraph="true" variant="body1" color="text.secondary">
          {reviewContent}
        </Typography>

        <Typography align="right" mb={"1px"} mt={"20px"} paragraph="true" variant="body1" color="text.secondary">
          {authorName}
        </Typography>

        <Typography align="right" mb={"0px"} paragraph="true" variant="body1" color="text.secondary">
          {reviewDate}
        </Typography>

      </CardContent>

    </Card>
  );
}
