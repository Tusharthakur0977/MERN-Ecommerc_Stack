import { Avatar, Box, Paper, Rating, Typography } from "@mui/material";
import React from "react";

const Review_card = ({ review }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        height: "40vh",
        minWidth: "25vw",
        padding: " 15px",
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
        background: "#EDEEF0",
      }}
    >
      <Box
        sx={{
          minHeight: "35%",
          maxHeight: "35%",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "15px",
        }}
      >
        <Avatar
          sx={{
            gridColumn: "1",
            gridRow: 1,
            justifySelf: "center",
            mb: "5px",
          }}
          src="/static/images/avatar/2.jpg"
        />
        <Typography
          textTransform={"uppercase"}
          variant="caption"
          sx={{ gridColumn: "1 ", gridRow: 2, justifySelf: "center" }}
        >
          {review.name}
        </Typography>
        <Rating
          sx={{
            gridColumn: "1",
            gridRow: 3,
            justifySelf: "center",
          }}
          precision={0.5}
          readOnly
          value={review.rating}
          size="small"
          name="simple-controlled"
        />
      </Box>
      <Box sx={{ minHeight: "70%", maxHeight: "70%", padding: "0px 10px" }}>
        <Typography
          textAlign="center"
          sx={{
            justifySelf: "center",
          }}
          variant="caption"
        >
          {review.comment}
        </Typography>
      </Box>
    </Paper>
  );
};

export default Review_card;
