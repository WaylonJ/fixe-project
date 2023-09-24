import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Button,
  Paper,
  Box,
} from "@mui/material";
import { useList } from "../util/ListContext";

function MyListPage() {
  // Used to populate the columns of the table
  const headers = ["Id", "Name", "Email", "Creation Date", "Location Count"];

  // State to hold the data from the API
  const [showInactive, setShowInactive] = useState(false);

  // Fetch data from the API
  const { listData, setListData } = useList();
  useEffect(() => {
    if (!listData || listData.length === 0) {
      axios
        .get(
          "https://dcxgxxl3oym6r3wslpzpmrpac40fjebf.lambda-url.us-east-1.on.aws/"
        )
        .then((response) => {
          setListData(response.data.data);
        })
        .catch((error) => {
          console.error("Something went wrong fetching data: ", error);
        });
    }
  });

  // Data that's filtered by "status" and sorted by id
  const sortedAndFilteredData = listData
    .filter((item) => showInactive || item.status === "active")
    .sort((a, b) => a.id - b.id);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        height: "100vh",
      }}
    >
      <Paper
        elevation={5} // adds a slight shadow
        sx={{
          width: "80%",
          maxHeight: 800,
          // -- Scrollbar Settings --
          overflow: "auto", // Enable scrolling
          "&::-webkit-scrollbar": {
            width: "12px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell key={header}>
                  <Typography variant="h6" fontWeight="bold">
                    {header}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedAndFilteredData.map((item, index) => (
              <TableRow
                key={item.id || index}
                sx={{
                  backgroundColor:
                    item.status === "inactive" ? "#ffe6e6" : "inherit",
                }}
              >
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.createdOn}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.locations.length}</TableCell>{" "}
                <TableCell>
                  <Link
                    to={{
                      pathname: `/details/${item.id}`,
                      state: { itemDetails: item },
                    }}
                  >
                    <Button variant="contained" color="primary">
                      More Details
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <div style={{ textAlign: "right", marginTop: 16 }}>
        <label>
          Show Inactive Locations
          <input
            type="checkbox"
            checked={showInactive}
            onChange={() => setShowInactive(!showInactive)}
          />
        </label>
      </div>
    </Box>
  );
}

export default MyListPage;
