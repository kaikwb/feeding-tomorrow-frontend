import {Box, Button, Container, Typography} from "@mui/material";

export default function Home() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                p: 5,
                boxSizing: "border-box"
            }}
        >
            <Container maxWidth="sm">
                <Typography
                    variant="h2"
                    align="center"
                    sx={{
                        mb: 4
                    }}
                >
                    Entre nessa luta e ajude a alimentar o futuro!
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    sx={{
                        mb: 6
                    }}
                >
                    Juntos podemos fazer a diferença!
                </Typography>
                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            py: 2,
                            px: 4,
                            borderRadius: "999px",
                            fontWeight: "bold",
                            fontSize: "1.2rem"
                        }}
                    >
                        Doe Agora
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
