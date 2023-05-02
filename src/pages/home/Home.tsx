import React, { useEffect } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { Link } from 'react-router-dom';

function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            alert("Ops...você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    return (

        <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
            <Grid alignItems="center" item xs={6}>
                <Box paddingX={20} >
                    <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Olá, é bom ter você aqui! ღ</Typography>
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Não deixe de expressar seus pensamentos e ideias!</Typography>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Box marginRight={1}>
                        <ModalPostagem />
                    </Box>
                    <Link to='/postagens'>
                        <Button variant="outlined" className="botao">Ver Postagens</Button>
                    </Link>
                </Box>
            </Grid>
            <Grid item xs={6} >
                <img src="https://i.pinimg.com/564x/37/4c/ab/374cabd44e5e158f14cd6e3b70f721c1.jpg" />
            </Grid>
            <Grid xs={12} className='postagens'>
                <TabPostagem />
            </Grid>
        </Grid>

    );
}

export default Home;