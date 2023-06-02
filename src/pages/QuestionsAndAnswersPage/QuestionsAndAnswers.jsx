import {useEffect, useState} from "react";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@mui/material";
import axios from "axios";
import QuestionCard from "../../components/QuestionCard/QuestionCard.jsx";
import PageContainer from "../../components/PageContainer/PageContainer.jsx";

async function getQuestionsAndAnswers() {
    try {
        const response = await axios.get('/webapi/questions');
        return response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } catch (error) {
        console.error(error);
    }
}

async function makeQuestion(question, author) {
    const data = {
        question,
        askedBy: author
    };

    try {
        await axios.post('/webapi/questions', data);
        return true;
    } catch (error) {
        return false;
    }
}

export default function QuestionsAndAnswers() {
    const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
    const [openForm, setOpenForm] = useState(false);
    const [question, setQuestion] = useState("");
    const [author, setAuthor] = useState("");
    const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
    const [openErrorDialog, setOpenErrorDialog] = useState(false);

    const handleOpenForm = () => {
        setOpenForm(true);
    }

    const handleCloseForm = () => {
        setOpenForm(false);
    }

    const handleMakeQuestion = async () => {
        const success = await makeQuestion(question, author);
        setOpenForm(false);

        if (success) {
            setOpenSuccessDialog(true);
        } else {
            setOpenErrorDialog(true);
        }

        try {
            const result = await getQuestionsAndAnswers();
            setQuestionsAndAnswers(result);
        } catch (error) {
            console.error(error);
        }
    }

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    }

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    }

    useEffect(() => {
        async function fetchData() {
            const result = await getQuestionsAndAnswers();
            setQuestionsAndAnswers(result);
        }

        fetchData().then(r => r).catch(e => e);
    }, []);

    return (
        <PageContainer title="Perguntas e respostas"
                       subtitle="Perguntas e respostas sobre a Feeding Tomorrow e o combate a fome">
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <Button variant="contained" onClick={handleOpenForm}>Fazer uma pergunta</Button>
            </Box>
            <Box sx={{width: 1}}>
                {questionsAndAnswers?.map((questionAndAnswer, index) => {
                    return (
                        <QuestionCard key={index} {...questionAndAnswer}/>
                    );
                })}
            </Box>
            <Dialog open={openForm} onClose={handleCloseForm}>
                <DialogTitle>Fazer uma pergunta</DialogTitle>
                <DialogContent>
                    <DialogContentText>Digite abaixo a pergunta desejada e o mais rápido possível vamos responder
                        ela.</DialogContentText>
                    <TextField autoFocus margin="dense" id="author" label="Seu nome" type="text" fullWidth
                               variant="standard" onChange={handleAuthorChange}/>
                    <TextField autoFocus margin="dense" id="question" label="Pergunta" type="text" fullWidth
                               variant="standard" onChange={handleQuestionChange}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseForm}>Cancelar</Button>
                    <Button onClick={handleMakeQuestion}>Enviar</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={openSuccessDialog} onClose={() => setOpenSuccessDialog(false)}>
                <DialogTitle>Sucesso</DialogTitle>
                <DialogContent>
                    <DialogContentText>Sua pergunta foi enviada com sucesso!</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenSuccessDialog(false)}>Fechar</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={openErrorDialog} onClose={() => setOpenErrorDialog(false)}>
                <DialogTitle>Erro</DialogTitle>
                <DialogContent>
                    <DialogContentText>Ocorreu um erro ao enviar a pergunta. Por favor, tente novamente mais
                        tarde.</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenErrorDialog(false)}>Fechar</Button>
                </DialogActions>
            </Dialog>
        </PageContainer>
    );
}
