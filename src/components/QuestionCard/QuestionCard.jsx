import {Card, CardContent, Typography} from "@mui/material";
import PropTypes from "prop-types";

export default function QuestionCard(props) {
    const {question, askedBy, answer, answeredBy} = props;

    return (
        <Card sx={{margin: 2}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {question}
                </Typography>
                <Typography sx={{mb: 3}} color="text.secondary">
                    Pergunta de: {askedBy}
                </Typography>
                {answer &&
                    <>
                        <Typography variant="body1">
                            {answer}
                        </Typography>
                        <Typography color="text.secondary">
                            Respondido por: {answeredBy ? answeredBy : "Desconhecido"}
                        </Typography>
                    </>
                }
                {!answer && <Typography variant="body1">Ainda não respondida</Typography>}
            </CardContent>
        </Card>
    );
}

QuestionCard.propTypes = {
    question: PropTypes.string,
    askedBy: PropTypes.string,
    answer: PropTypes.string,
    answeredBy: PropTypes.string,
    date: PropTypes.string
}
