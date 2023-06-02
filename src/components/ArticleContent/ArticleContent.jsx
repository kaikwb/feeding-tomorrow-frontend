import {Typography} from "@mui/material";
import PropTypes from "prop-types";
import PageContainer from "../PageContainer/PageContainer.jsx";

export default function ArticleContent({title, subtitle, content, image}) {
    const paragraphs = content.split("\r\n");

    return (
        <PageContainer title={title} subtitle={subtitle} image={image}>
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
        </PageContainer>
    );
}

ArticleContent.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string
};
