import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { Typography, Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import './Footer.css';

function Footer() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box className="box1">
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                className="textos"
              >
                Siga-me nas redes sociais.{" "}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a
                href="https://www.facebook.com/diego.geraldo.5688"
                target="_blank"
              >
                <FacebookIcon className="redes"/>
              </a>
              <a
                href="https://github.com/Diegorossato"
                target="_blank"
              >
                
                <GitHubIcon className="git"/>
              </a>

              <a
                href="https://www.instagram.com/diego.ross1206/"
                target="_blank"
              >
                
                <InstagramIcon className="redes"/>
              </a>
              <a
                href="https://wa.me/5519998334201"
                target="_blank"
              >

                <WhatsAppIcon className="redes" />
              </a>
              <a
                href="https://www.linkedin.com/in/diego-rossato-geraldo-505243234/"
                target="_blank"
              >
                <LinkedInIcon className="redes" />
              </a>
            </Box>
          </Box>
          <Box className="box2">
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                className="textos"
              >
                <h2>© 2023 Copyright:</h2>
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://brasil.generation.org">
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  className="textos"
                  align="center"
                >
                </Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
