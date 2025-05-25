import { Box, Typography } from "@mui/material";
import pytonUrl from '../assets/pyton.svg';
import javaUrl from '../assets/java.svg';
import typeScriptUrl from '../assets/typescript.svg';
import javaScriptUrl from '../assets/javascript.svg';
import ionicUrl from '../assets/ionic.svg';
import angularJsUrl from '../assets/angularjs.svg';
import reactUrl from '../assets/react.svg';
import nodeJsUrl from '../assets/nodejs.svg';
import springboot from '../assets/springboot.svg';
import postgreesUrl from '../assets/postgrees.svg';
import mongodbUrl from '../assets/mongo.svg';
import mysqlUrl from '../assets/mysql.svg';
import sqliteUrl from '../assets/sqlite.svg';
import dockerUrl from '../assets/docker.svg';
import kubernetsUrl from '../assets/kubernets.svg';
import awsUrl from '../assets/aws.svg';
import gitlabUrl from '../assets/gitlab.svg';
import githubUrl from '../assets/github.svg';


function Habilidades() {
    const boxIcones = {
            width: "70px",
            height: "70px",
            border: "4px solid rgb(69, 155, 149)", 
            borderRadius: "5px",
            backgroundColor: "white",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
    }

    const logos = {width: "60px", height: "60px"};

    const boxIconesColumns = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

    return(
        <>
        <Box
        sx={{
            width: '100%',
            // backgroundColor: '#060826'
          }}
        >
            {/* <Typography sx={{ fontSize: "1.5rem", color: "#8C1AD9", position: "absolute", marginTop: "5%", marginLeft: "5%" }}>
              Habilidades
            </Typography> */}

            {/* <Typography sx={{ fontSize: "2rem", color: "black", fontWeight: 'bold', fontFamily: '"Eurostile", sans-serif', textAlign: "center", marginTop: "5%" }}>
                Quadro de habilidades
            </Typography> */}

            <Box sx={{
                marginTop: "100px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
                <Box sx={{display: "flex", width: "60%", justifyContent: "space-evenly", marginBottom: "100px"}}>
                    <Box sx={boxIconesColumns}>
                        <Box sx={boxIcones}>
                            <img style={logos} src={javaUrl} alt="Logo Java" />
                        </Box>
                        <Box sx={boxIcones}>
                            <img style={logos} src={pytonUrl} alt="Logo Python" />
                        </Box>
                        <Box sx={boxIcones}>
                            <img style={logos} src={typeScriptUrl} alt="Logo TypeScript" />
                        </Box>
                        <Box sx={boxIcones}>
                            <img style={logos} src={javaScriptUrl} alt="Logo JavaScript" />
                        </Box>
                    </Box>
                    <Box sx={boxIconesColumns}>
                        <Box sx={boxIcones}>
                            <img style={logos} src={ionicUrl} alt="Logo JavaScript" />
                        </Box>
                        <Box sx={boxIcones}>
                            <img style={logos} src={angularJsUrl} alt="Logo JavaScript" />
                        </Box>
                        <Box sx={boxIcones}>
                            <img style={logos} src={reactUrl} alt="Logo JavaScript" />
                        </Box>
                    </Box>
                    <Box sx={boxIconesColumns}>
                        <Box sx={boxIcones}>
                            <img style={logos} src={nodeJsUrl} alt="Logo JavaScript" />
                        </Box>
                        <Box sx={boxIcones}>
                            <img style={logos} src={springboot} alt="Logo JavaScript" />
                        </Box>
                    </Box>
                    <Box sx={boxIconesColumns}>
                        <Box sx={boxIcones}>
                            <img style={logos} src={postgreesUrl} alt="Logo JavaScript" />
                        </Box>
                        <Box sx={boxIcones}>
                            <img style={logos} src={mongodbUrl} alt="Logo JavaScript" />
                        </Box>
                        <Box sx={boxIcones}>
                            <img style={logos} src={mysqlUrl} alt="Logo JavaScript" />
                        </Box>
                        <Box sx={boxIcones}>
                            <img style={logos} src={sqliteUrl} alt="Logo JavaScript" />
                        </Box>
                    </Box>
                    <Box sx={boxIconesColumns}>
                        <Box sx={boxIcones}>
                            <img style={logos} src={dockerUrl} alt="Logo JavaScript" />
                        </Box>
                        <Box sx={boxIcones}>
                            <img style={logos} src={kubernetsUrl} alt="Logo JavaScript" />
                        </Box>
                        <Box sx={boxIcones}>
                            <img style={logos} src={awsUrl} alt="Logo JavaScript" />
                        </Box>
                    </Box>
                    <Box sx={boxIconesColumns}>
                        <Box sx={boxIcones}>
                            <img style={logos} src={gitlabUrl} alt="Logo JavaScript" />
                        </Box>
                        <Box sx={boxIcones}>
                            <img style={logos} src={githubUrl} alt="Logo JavaScript" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
        </>
    );
}

export default Habilidades;