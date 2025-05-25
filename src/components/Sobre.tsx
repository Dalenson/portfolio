import { Box, Typography } from "@mui/material";
import linkedinIcon from "../assets/linkedinwhite.svg"
import callIcon from "../assets/call.svg"
import gitHubIcon from "../assets/githubwhite.svg"
import emailIcon from "../assets/email.svg"


function Sobre() {
    const logos = {width: "40px", height: "40px"};
    const boxContato = {display: "flex", flexDirection: "column", alignItems: "center", marginRight: "15px"};
    return(
        <>
        <Box
        sx={{
            width: '100%',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            // marginTop: "200px"
          }}
        >
            <Box id="sobre" sx={{padding: "10px 10px 10px 10px", backgroundColor: "#446361", width: "70%", marginBottom: "-60px", zIndex: 1, height: "100px", borderRadius: "15px", display: "flex", flexDirection: "row", alignItems: "center"}}>
                <Typography sx={{width: "50%", fontSize: "1.8rem", color: "white", textAlign: "center"}}>
                    Vamos conversar?
                </Typography>
                <Typography sx={{ fontSize: "1rem", color: "white", width: "40%", textAlign: "center"}}>
                    Se você tem um projeto em mente, que tal batermos um papo? A primeira rodada de café é por minha conta.
                </Typography>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    minHeight: "400px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    backgroundColor: "primary.main"
                  }}>
                    <Box sx={{width: "50%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <a href="https://www.linkedin.com/in/dalenconcolares/" target="_blank" style={{ textDecoration: 'none' }}>
                        <Box sx={boxContato}>
                            <Box sx={{width: "60px", height: "60px", borderRadius: "50px", border: "1px solid white", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                                <img src={linkedinIcon} style={logos} />
                            </Box>
                            {/* <Typography sx={{ fontSize: "1.3rem", color: "white"}}>
                                @dalenconcolares
                            </Typography> */}
                        </Box>
                    </a>
                    
                    <a href="tel:+55048999673479" target="_blank" style={{ textDecoration: 'none' }}>
                        <Box sx={boxContato}>
                            <Box sx={{width: "60px", height: "60px", borderRadius: "50px", border: "1px solid white", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                                <img src={callIcon} style={logos}/>
                            </Box>
                            {/* <Typography sx={{ fontSize: "1.3rem", color: "white"}}>
                                (48) 9 9967-3479
                            </Typography> */}
                        </Box>
                    </a>
                    <a href="https://github.com/Dalenson" target="_blank" style={{ textDecoration: 'none' }}>
                        <Box sx={boxContato}>
                            <Box sx={{width: "60px", height: "60px", borderRadius: "50px", border: "1px solid white", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                                <img src={gitHubIcon} style={logos}/>
                            </Box>
                            {/* <Typography sx={{ fontSize: "1.3rem", color: "white"}}>
                                @Dalenson
                            </Typography> */}
                        </Box>
                    </a>
                    <a href="mailto:dal.colares@gmail.com" target="_blank" style={{ textDecoration: 'none' }}>
                        <Box sx={boxContato}>
                            <Box sx={{width: "60px", height: "60px", borderRadius: "50px", border: "1px solid white", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                                <img src={emailIcon} style={logos}/>
                            </Box>
                            {/* <Typography sx={{ fontSize: "1.3rem", color: "white"}}>
                                dal.colares@gmail.com
                            </Typography> */}
                        </Box>
                    </a>
                </Box>
            </Box>
        </Box>
        </>
    )}

export default Sobre;