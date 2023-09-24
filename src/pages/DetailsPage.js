import React from "react";
import { useParams } from "react-router-dom";
import { useList } from "../util/ListContext";
import { Button, Typography, Paper, Box } from "@mui/material";
import { Link } from "react-router-dom";

function DetailsPage() {
  // Use data from context
  const { listData } = useList();
  const { id } = useParams();

  // Find the details of the current item based on the id
  const details = listData.find((item) => item.id === parseInt(id, 10));

  // Get the primary location (assuming locations is an array in the details)
  const primaryLocation = details.locations ? details.locations[0] : {};

  const fullAddress = [
    primaryLocation.address_line_1,
    primaryLocation.address_line_2,
    `${primaryLocation.city}, ${primaryLocation.state} ${primaryLocation.zipcode}`,
  ]
    .filter(Boolean) // Remove any empty or null values
    .join(", "); // Join into a single string

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
        backgroundColor: "#f2f2f2",
        height: "100vh",
      }}
    >
      <Paper elevation={3}>
        <Box p={3}>
          {/* Displaying the Name */}
          <Typography variant="h4" component="div" gutterBottom>
            {details.name}
          </Typography>

          {/* Displaying Primary Location details */}
          <Typography variant="h6" component="div">
            Primary Location:
          </Typography>
          <Typography>Address: {fullAddress}</Typography>
          <Typography variant="h6" component="div">
            Notes:
          </Typography>

          {/* Button to go back to the list */}
          <Box mt={2}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary">
                Back to List
              </Button>
            </Link>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default DetailsPage;
