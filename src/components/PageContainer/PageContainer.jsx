import {Box, Divider, Paper, Typography} from "@mui/material";
import PropTypes from "prop-types";

export default function PageContainer({title, subtitle, image, children}) {
    return (
        <Paper elevation={8}
               sx={{
                   width: "fill-available",
                   maxWidth: {xs: 1, md: "md"},
                   my: 2,
                   flexGrow: 1,
                   py: 2,
                   px: 5,
                   mx: "auto",
                   backgroundColor: "rgba(255, 255, 255, 0.6)"
               }}>
            <Typography align="center" variant="h3">{title}</Typography>
            {subtitle && <Typography variant="subtitle1" sx={{px: 2, mt: 1, color: "gray"}}>{subtitle}</Typography>}
            <Divider variant="middle" sx={{mt: 2}}/>
            {image && <Box component="img" src={image} alt={`Imagem da página ${title}`}
                           sx={{width: 1, maxHeight: 400, objectFit: "cover", mt: 3}}/>}
            <Box sx={{mt: 2}}>
                {children}
            </Box>
        </Paper>
    );
}

PageContainer.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    children: PropTypes.node
};
