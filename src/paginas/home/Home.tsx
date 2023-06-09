import React, { useEffect } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import TabPostagem from "../../components/postagens/tabPostagem/TabPostagem";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { useNavigate } from "react-router";
import { TokenState } from "../../store/tokens/TokensReducer";
import { useSelector } from "react-redux";
import "./Home.css";

function Home() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="caixa"
    >
      <Grid alignItems="center" item xs={6}>
        <Box paddingX={20}>
          <Typography
            variant="h3"
            gutterBottom
            color="textPrimary"
            component="h3"
            align="center"
            className="titulo"
          >
            Seja bem vindo(a)!
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h5"
            align="center"
            className="titulo"
          >
            Expresse aqui os seus pensamentos e opiniões!
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box marginRight={1}>
            <ModalPostagem />
          </Box>
          <Button variant="outlined" className="botao">
            Ver Postagens
          </Button>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <img src="src/assets/img/mamaco.png" />
      </Grid>
      <Grid xs={12} className="postagens">
        <TabPostagem />
      </Grid>
    </Grid>
  );
}

export default Home;
