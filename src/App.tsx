import { Box, Typography } from "@mui/material";
import Header from "./components/Header";
import persona from "../src/assets/persona.png";
import Habilidades from "./components/Habilidades";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";

function App() {
  return (
    <>
      <Box id="inicio"
        sx={{
          width: {xs: '100vh', md: '100%' },
          display: 'flex',
          justifyContent: {md: 'center'},
          alignItems: 'center',
          backgroundColor: 'white'
        }}
      >
        <Header />
        <Box
          sx={{
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            width: "100%"
          }}>
          <Box sx={{ height: "400px", marginTop: "300px", width: "100%" }}>
            {/* <BackgroundAnimation></BackgroundAnimation> */}
            <Box
              sx={{
                position: "absolute",
                width: "100%",
              }}>
              <Typography sx={{ fontSize: {xs: "2.5rem", md: "4rem"}, color: "black", fontWeight: 'bold', fontFamily: '"Eurostile", sans-serif', textAlign: "center" }}>
                Full-Stack Developer & Tech Lead
              </Typography>
              <Typography sx={{ fontSize: "1.5rem", color: "primary.contrastText", fontFamily: '"Europa", sans-serif', textAlign: "center" }}>
                Onde a lógica encontra a criatividade, é aí que a magia do desenvolvimento acontece.
              </Typography>
            </Box>
          </Box>
          <Box id="habilidades" sx={{ padding: "20px 20px 20px 20px", height: "40%", display: "flex", alignItems: "center", textAlign: "justify", flexDirection: "row", backgroundColor: "primary.main" }}>
            <Box sx={{ width: "60%", display: "flex", alignItems: "center", flexDirection: "column" }}>
              <Typography sx={{ fontSize: "2rem", color: "white", fontWeight: 600, fontFamily: 'Europa-Bold, sans-serif' }}>
                Olá, meu nome é Dalençon!
              </Typography>
              <Typography sx={{ color: "white", fontSize: "1.25rem", width: "80%", fontFamily: 'Europa-Bold, sans-serif', fontWeight: "400" }}>
                Sou desenvolvedor full-stack com mais de 5 anos de experiência no desenvolvimento de soluções robustas e escaláveis. Atualmente curso pós-graduação em Arquitetura de Software, fortalecendo minha atuação como desenvolvedor sênior e líder técnico. Tenho paixão por tecnologia, foco em excelência técnica e atuo diretamente na definição de arquiteturas, liderança de times e entrega de projetos de alto impacto.
              </Typography>
            </Box>
            <Box
              sx={{ width: "40%", display: "flex", alignItems: "center", flexDirection: "column" }}>
              <img src={persona} alt="Persona" style={{ width: "300px" }}></img>
            </Box>
          </Box>
          <Box sx={{ width: "100%", height: "200px", backgroundColor: "primary.main" }}>

          </Box>
          <Box sx={{ width: "80%", height: "500px", backgroundColor: "white", borderRadius: "15px", marginTop: "-150px", boxShadow: "0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8;" }}>
            <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", flexWrap: "nowrap" }}>
              <Box sx={{ padding: "30px 30px 30px 30px", display: "flex", flexDirection: "column", alignItems: "center", width: "35%", margin: 0, borderRight: "1px solid #E6ECF8" }}>
                <Typography sx={{ fontSize: "2rem", color: "black", fontWeight: 600, fontFamily: 'Europa-Bold, sans-serif' }}>
                  Back-End
                </Typography>
                <Typography sx={{ fontSize: "1rem", color: "black", fontFamily: 'Europa-Bold, sans-serif', textAlign: "center", marginTop: "40px" }}>
                  Valorizo a construção de bases escaláveis e bem organizadas, conectando dados de maneira eficiente com o frontend
                </Typography>
                <Typography sx={{ fontSize: "1.3rem", color: "primary.contrastText", fontWeight: 600, fontFamily: 'Europa-Bold, sans-serif', textAlign: "center", marginTop: "50px" }}>
                  Tecnologias mais utilizadas são:
                </Typography>
                <Typography sx={{ fontSize: "1rem", color: "black", fontFamily: 'Europa-Bold, sans-serif', textAlign: "center" }}>
                  Mensageria, Java, SpringBoot
                </Typography>
                <Typography sx={{ fontSize: "1.3rem", color: "primary.contrastText", fontWeight: 600, fontFamily: 'Europa-Bold, sans-serif', textAlign: "center", marginTop: "50px" }}>
                  Experiência com:
                </Typography>
                <Typography sx={{ fontSize: "1rem", color: "black", fontFamily: 'Europa-Bold, sans-serif', textAlign: "center" }}>
                  Integrações, microsserviços, API's, arquitetura de sistemas
                </Typography>
              </Box>

              <Box sx={{ padding: "30px 30px 30px 30px", display: "flex", flexDirection: "column", alignItems: "center", width: "35%", margin: 0, borderRight: "1px solid #E6ECF8" }}>
                <Typography sx={{ fontSize: "2rem", color: "black", fontWeight: 600, fontFamily: 'Europa-Bold, sans-serif' }}>
                  Front-End
                </Typography>
                <Typography sx={{ fontSize: "1rem", color: "black", fontFamily: 'Europa-Bold, sans-serif', textAlign: "center", marginTop: "40px" }}>
                  Gosto de transformar ideias em interfaces práticas, bem projetadas, escaláveis e focadas na melhor experiência do usuário.
                </Typography>
                <Typography sx={{ fontSize: "1.3rem", color: "primary.contrastText", fontWeight: 600, fontFamily: 'Europa-Bold, sans-serif', textAlign: "center", marginTop: "50px" }}>
                  Tecnologias mais utilizadas são:
                </Typography>
                <Typography sx={{ fontSize: "1rem", color: "black", fontFamily: 'Europa-Bold, sans-serif', textAlign: "center" }}>
                  Mensageria, Java, SpringBoot
                </Typography>
                <Typography sx={{ fontSize: "1.3rem", color: "primary.contrastText", fontWeight: 600, fontFamily: 'Europa-Bold, sans-serif', textAlign: "center", marginTop: "50px" }}>
                  Experiência com:
                </Typography>
                <Typography sx={{ fontSize: "1rem", color: "black", fontFamily: 'Europa-Bold, sans-serif', textAlign: "center" }}>
                  HTML, CSS, AngularJs, React, Ionic
                </Typography>
              </Box>

              <Box sx={{ padding: "30px 30px 30px 30px", display: "flex", flexDirection: "column", alignItems: "center", width: "35%", margin: 0, }}>
                <Typography sx={{ fontSize: "2rem", color: "black", fontWeight: 600, fontFamily: 'Europa-Bold, sans-serif' }}>
                  Liderança
                </Typography>
                <Typography sx={{ fontSize: "1rem", color: "black", fontFamily: 'Europa-Bold, sans-serif', textAlign: "center", marginTop: "40px" }}>
                  Atuo como líder técnico, focando no crescimento da equipe, na qualidade do código e no desenvolvimento de carreira dos profissionais.
                </Typography>
                <Typography sx={{ fontSize: "1.3rem", color: "primary.contrastText", fontWeight: 600, fontFamily: 'Europa-Bold, sans-serif', textAlign: "center", marginTop: "50px" }}>
                  Áreas de atuação:
                </Typography>
                <Typography sx={{ fontSize: "1rem", color: "black", fontFamily: 'Europa-Bold, sans-serif', textAlign: "center" }}>
                  Gestão técnica, Mentoria, Feedbacks de carreira, Melhoria contínua de processos
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Habilidades />
      <Projetos />
      <Sobre />
    </>
  )
}
export default App;