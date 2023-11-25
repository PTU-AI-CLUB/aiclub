import React from "react";
import MuiCard from "./MuiCard";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    gridContainer: {
        marginLeft: "10px",
        marginRight: "10px",
        justifyContent: "center",
        paddingLeft: "10px",
        paddingRight: "10px",
    },
});

const Projects = () => {
    const classes = useStyles();
    return (
        <div id="projects" className=" bg-black pb-20">
            <div className="w-full py-16 text-white">
                <h1 className="md:text-6xl sm:text-5xl text-2xl font-bold flex flex-col items-center justify-center">Projects</h1>
            </div>
            <Grid container spacing={4} className={classes.gridContainer}>
                <Grid item xs={12} sm={6} md={4}>
                    <MuiCard role="Raahul Krishna D, Abhishek, Rishabhan" title="DATON" content="The main aim of our project is to build a Vehicle number plate detection system for our PTU campus to track the vehicles entering and leaving the PTU campus." />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MuiCard role="Vijitha Mittapalli, Sagala Lekhya, Tamiri Mounya Krishna, Pratyusha Talari" title="EntertainAI" content="The objective of the project is to develop an end-to-end model for Automatic Music Generation." />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <MuiCard role="Chandra Harsha K, Sandeep GVS, Yuvarani VD" title="OCR" content="We are focusing on developing a model that can recognize and assess human handwriting and convert it into computer text." />
                </Grid>
            </Grid>
        </div>
    );
};

export default Projects;
