import { Box, Button, Modal, Typography } from "@mui/material";
import users from "../assets/applications/usuarios.png";
import previsaotempo from "../assets/applications/previsaotempo.png";
import extensaochrome from "../assets/applications/extensaochrome.png";
import gamepalavras from "../assets/applications/gamepalavras.png";
import listatelefonica from "../assets/applications/listatelefonica.png";
import gamepedrapapel from "../assets/applications/gamepedrapapel.png";
import * as React from 'react';
import icon from '../assets/aws.svg';
import iconRedirect from '../assets/redirect.svg';
import apiIcon from '../assets/api.svg';
import tempo from '../assets/tempo.svg';
import chrome from '../assets/chrome.svg';
import palavras from '../assets/palavras.svg';
import listaTelefonica from '../assets/listatelefonica.svg';
import gatway from '../assets/gatway.svg';
import s from '../assets/s.svg';
import picpay from '../assets/picpay.svg';


function Projetos() {
  type projeto = {
    nome: string;
    imagem: string;
    descricao: string;
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = (item: projeto) => {
    setOpen(true);
    setProjeto(item);
  }
  const handleClose = () => setOpen(false);
  const [projestoSelecionado, setProjeto] = React.useState<projeto | null>(null);
  const projetos = [
    {
      nome: "CRUD de pessoas",
      imagem: users,
      icon: apiIcon,
      descricao: "Projeto CRUD para cadastro e visualização de pessoas, com foco em demonstrar as tecnologias utilizadas.",
      urlProjeto: "",
      urlGitHub: "https://github.com/Dalenson/CRUD_pessoas"
    },
    {
      nome: "Previsão do tempo",
      imagem: previsaotempo,
      icon: tempo,
      descricao: "Projeto desenvolvido para praticar o consumo e uso de APIs, utilizando serviços como HG Brasil (previsão do tempo), ipify (consulta de IP), OpenStreetMap (localização).",
      urlProjeto: "",
      urlGitHub: "https://github.com/Dalenson/PrevisaoTempo"
    },
    {
      nome: "Extensão Chrome",
      imagem: extensaochrome,
      icon: chrome,
      descricao: 'Extensão desenvolvida para auxiliar na validação de informações repetitivas. Permite salvar dados no navegador, para armazenar hashes de forma rápida.',
      urlProjeto: "",
      urlGitHub: "https://github.com/Dalenson/ExtensaoCromeJS"
    },
    {
      nome: "Jogo de palavras",
      imagem: gamepalavras,
      icon: palavras,
      descricao: "Jogo desenvolvido como parte do estudo e prática de ferramentas como jQuery e Angular, anteriormente pouco exploradas.",
      urlProjeto: "",
      urlGitHub: "https://github.com/Dalenson/GamePalavrasComjQuery"
    },
    {
      nome: "Lista telefonica",
      imagem: listatelefonica,
      icon: listaTelefonica,
      descricao: "Lista telefônica desenvolvida para estudo e prática da ferramenta AngularJs.",
      urlProjeto: "",
      urlGitHub: "https://github.com/Dalenson/ListaTelefonicaComAngular"
    },
    {
      nome: "Gatway",
      imagem: gamepedrapapel,
      icon: gatway,
      descricao: "Projeto responsável por redirecionar requisições para seus respectivos microservices.",
      urlProjeto: "",
      urlGitHub: "https://github.com/Dalenson/GatwayMicroservice"
    },
    {
      nome: "Projeto avaliação Senior Sistemas",
      imagem: gamepedrapapel,
      icon: s,
      descricao: "Projeto realizado a fim de testar conhecimentos referente a processo seletivo na senior sistemas.",
      urlProjeto: "",
      urlGitHub: "https://github.com/Dalenson/SeniorProjectAvaliation"
    },
    {
      nome: "Desafio PicPay",
      imagem: gamepedrapapel,
      icon: picpay,
      descricao: "Projeto realizado a fim de testar conhecimentos referente a processo seletivo na senior sistemas.",
      urlProjeto: "",
      urlGitHub: "https://github.com/Dalenson/DesafioBackPicPay"
    }
  ]

  return (
    <>
      <Box id="projetos"
        sx={{
          width: '100%', display: "flex", flexDirection: "column"
        }}
      >
        <Box sx={{ width: "100%", height: "400px", backgroundColor: "primary.main", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "-130px"}}>
          <Box sx={{width: "60%", display: "flex", flexDirection: "column"}}>
            <Typography sx={{fontSize: "2rem", fontWeight: 800,  color: "white", fontFamily: 'Eurostile, sans-serif', textAlign: "center", marginTop: "50px" }}>
              Meus projetos
            </Typography>
            <Typography sx={{fontSize: "1.3rem", color: "white", fontWeight: 'bold', fontFamily: '"Eurostile", sans-serif', textAlign: "center", marginTop: "10px" }}>
              Projetos práticos criados para consolidar conhecimentos e explorar novas tecnologias
            </Typography>
          </Box>
        </Box>


        <Box sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row",
          flexWrap: "wrap"
        }}>

          <Box sx={{ display: "flex", width: "80%", justifyContent: "space-evenly", flexWrap: "wrap"}}>
            {projetos.map((item) => (
              <Box sx={{backgroundColor: "white",display: "flex", flexDirection: "column", alignItems: "center", borderRadius: "35px", padding: "20px 20px 20px 20px", width: "500px", height: "300px", marginBottom: "100px", position: "relative", boxShadow: "0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8"}}>
                <Box sx={{display: "flex", flexDirection: "row"}}>
                  <img src={item.icon} style={{marginRight: "40px", width: "80px", height: "80px"}}/>
                  <Typography sx={{marginTop: "20px", minHeight: "100px", fontSize: "1.8rem", color: "primary.contrastText", fontFamily: 'Anton, sans-serif', textAlign: "center" }}>
                    {item.nome}
                  </Typography>
                </Box>
                <Typography sx={{maxWidth: "400px", minHeight: "120px", fontSize: "1rem", color: "black", fontFamily: 'Europa-Bold, sans-serif', textAlign: "center" }}>
                  {item.descricao}
                </Typography>

                <Box sx={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "center"}}>
                  {item.urlProjeto != "" ?<a href={item.urlProjeto}  style={{height: "30px", padding: "5px 5px 5px 5px", textDecoration: "none", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "#ebf5ff", borderRadius: "5px"}}>
                    <img src={iconRedirect} style={{width: "20px", height: "20px"}} />
                    <p style={{marginLeft: "5px", color: "#1a8cff", fontFamily: 'Europa, sans-serif'}}>{item.urlProjeto}</p>
                  </a> : null}
                  <a href={item.urlGitHub} target="_blank" style={{marginLeft: "20px", height: "30px", padding: "5px 5px 5px 5px", textDecoration: "none", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "#ebf5ff", borderRadius: "5px"}}>
                    <img src={iconRedirect} style={{width: "20px", height: "20px"}} />
                    <p style={{marginLeft: "5px", color: "#1a8cff", fontFamily: 'Europa, sans-serif'}}>GitHub</p>
                  </a>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Projetos;