import {Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography} from "@mui/material";
import PropTypes from "prop-types";

export default function NewsItem({title, source, content, link, thumbnail}) {
    return (
        <Card>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <CardMedia component="img" sx={{height: 1, objectFit: "cover"}} image={thumbnail}
                               alt={title}/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <CardHeader title={title} subheader={`Via: ${source}`}/>
                    <CardContent>
                        <Typography>{content}</Typography>
                    </CardContent>
                    <CardActions sx={{justifyContent: "flex-end"}}>
                        <Button size="large" href={link}>Leia agora</Button>
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    );
}

NewsItem.propTypes = {
    title: PropTypes.string,
    source: PropTypes.string,
    content: PropTypes.string,
    link: PropTypes.string,
    thumbnail: PropTypes.string
};
