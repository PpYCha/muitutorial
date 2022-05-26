import { Box, Container, createTheme, Stack } from "@mui/material";
import { Feed } from "./components/Feed";
import { Navbar } from "./components/Navbar";
import { Rightbar } from "./components/Rightbar";
import { Sidebar } from "./components/Sidebar";
import { Add } from "./components/Add";
import { ThemeProvider } from "styled-components";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Pages from "./components/Pages";
import Groups from "./components/Groups";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages" element={<Feed />} />
          <Route path="/groups" element={<Groups />} />
        </Routes>
        <Rightbar />
        {/* <Sidebar />
        <Feed />
        <Rightbar /> */}
        {/* <Rightbar /> */}
      </Stack>
      <Add />
    </Box>
  );
}

export default App;
