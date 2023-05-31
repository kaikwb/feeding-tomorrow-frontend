import {Box, Divider, Paper, Typography} from "@mui/material";
import PropTypes from "prop-types";

export default function ArticleContent(props) {
    const {title, subtitle, content, image} = props;
    const paragraphs = content.split("\r\n");

    return (
        <Paper elevation={8}
               sx={{
                   width: "auto",
                   maxWidth: {xs: 1, md: "md"},
                   my: 2,
                   flexGrow: 1,
                   py: 2,
                   px: 5,
                   mx: "auto",
                   backgroundColor: "rgba(255, 255, 255, 0.6)"
               }}>
            <Typography align="center" variant="h3">{title}</Typography>
            <Typography variant="subtitle1" sx={{px: 2, my: 3, color: "gray"}}>{subtitle}</Typography>
            <Divider variant="middle" sx={{mb: 6}}/>
            <Box component="img" src={image} alt={`Imagem da página ${title}`}
                 sx={{width: 1, maxHeight: 400, objectFit: "cover", mb: 3}}/>
            {paragraphs.map((paragraph, index) =>
                <Typography variant="body1" key={index} sx={{
                    px: 2,
                    textAlign: "justify",
                    lineHeight: "2.5rem",
                    mb: 3,
                    textIndent: "5rem"
                }}>
                    {paragraph}
                </Typography>)}
        </Paper>
    );
}

ArticleContent.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string
};
