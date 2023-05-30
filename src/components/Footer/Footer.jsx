import React from "react";
import {Box, Container, Grid, Link, Typography} from "@mui/material";
import PropTypes from "prop-types";

export default function Footer(props) {
    const {members, siteMap, socialNetworks, address, copyrightYear, copyrightName} = props;

    return (
        <Box
            component="footer"
            sx={{
                py: 4,
                backgroundColor: "#f5f5f5",
                mt: "auto"
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Integrantes do Grupo
                        </Typography>
                        {members.map((member) => (
                            <Box
                                key={member.id}
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between"
                                }}
                            >
                                <Typography>{member.name}</Typography>
                                <Typography>{member.id}</Typography>
                            </Box>
                        ))}
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{display: "flex", flexDirection: "column"}}>
                            <Typography variant="h6" gutterBottom>
                                Mapa do Site
                            </Typography>
                            {siteMap.map((item) => (
                                <Typography component={Link} href={item.link} key={item.label}
                                            sx={{textDecoration: "none"}}>
                                    {item.label}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{display: "flex", flexDirection: "column"}}>
                            <Typography variant="h6" gutterBottom>
                                Redes Sociais
                            </Typography>
                            {socialNetworks.map((network) => (
                                <Link
                                    key={network.name}
                                    href={network.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        textDecoration: "none",
                                        gap: "0.5rem"
                                    }}
                                >
                                    {React.createElement(network.icon)}
                                    <Typography>{network.name}</Typography>
                                </Link>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Endereço
                        </Typography>
                        <Typography>
                            {address.street}, {address.number}
                        </Typography>
                        <Typography>{address.address2}</Typography>
                        <Typography>
                            {address.neighborhood}, {address.postalCode}
                        </Typography>
                        <Typography>
                            {address.city} - {address.state}
                        </Typography>
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography variant="body2" color="textSecondary" align="center">
                        © {copyrightYear} {copyrightName}. Todos os direitos reservados.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

Footer.propTypes = {
    members: PropTypes.arrayOf(PropTypes.object),
    siteMap: PropTypes.arrayOf(PropTypes.object),
    socialNetworks: PropTypes.arrayOf(PropTypes.object),
    address: PropTypes.object,
    copyrightName: PropTypes.string,
    copyrightYear: PropTypes.string
};
