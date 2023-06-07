import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from "@mui/material";
import axios from "axios";
import QuestionCard from "../../components/QuestionCard/QuestionCard.jsx";
import PageContainer from "../../components/PageContainer/PageContainer.jsx";

async function getQuestionsAndAnswers() {
    try {
        const response = await axios.get("/webapi/questions");
        return response.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
    } catch (error) {
        console.error(error);
    }
}

async function makeQuestion(question, author, mail) {
    const data = {
        question,
        askedBy: author,
        mail,
    };

    try {
        await axios.post("/webapi/questions", data);
        return true;
    } catch (error) {
        return false;
    }
}

export default function QuestionsAndAnswers() {
    const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
    const [openForm, setOpenForm] = useState(false);
    const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
    const [openErrorDialog, setOpenErrorDialog] = useState(false);
    const {register, handleSubmit, reset, formState, clearErrors} = useForm();

    const {errors} = formState;

    const handleOpenForm = () => {
        setOpenForm(true);
        reset();
        clearErrors();
    };

    const handleCloseForm = () => {
        setOpenForm(false);
    };

    const handleMakeQuestion = async (data) => {
        const {question, author, mail} = data;
        const success = await makeQuestion(question, author, mail);
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
    };

    useEffect(() => {
        async function fetchData() {
            const result = await getQuestionsAndAnswers();
            setQuestionsAndAnswers(result);
        }

        fetchData().then((r) => r).catch((e) => e);
    }, []);

    return (
        <PageContainer
            title="Perguntas e respostas"
            subtitle="Perguntas e respostas sobre a Feeding Tomorrow e o combate a fome"
        >
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <Button variant="contained" onClick={handleOpenForm}>
                    Fazer uma pergunta
                </Button>
            </Box>
            <Box sx={{width: 1}}>
                {questionsAndAnswers?.map((questionAndAnswer, index) => {
                    return <QuestionCard key={index} {...questionAndAnswer} />;
                })}
            </Box>
            <Dialog open={openForm} onClose={handleCloseForm}>
                <DialogTitle>Fazer uma pergunta</DialogTitle>
                <form onSubmit={handleSubmit(handleMakeQuestion)}>
                    <DialogContent>
                        <DialogContentText>
                            Digite abaixo a pergunta desejada e o mais rápido possível vamos
                            responder ela.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="author"
                            label="Seu nome"
                            type="text"
                            fullWidth
                            variant="standard"
                            {...register("author", {required: "Este campo é obrigatório"})}
                            error={!!errors.author}
                            helperText={errors.author && errors.author.message}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="mail"
                            label="Seu email"
                            type="email"
                            fullWidth
                            variant="standard"
                            {...register("mail", {
                                required: "Este campo é obrigatório",
                                pattern: {
                                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                    message: "Digite um e-mail válido",
                                },
                            })}
                            error={!!errors.mail}
                            helperText={errors.mail && errors.mail.message}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="question"
                            label="Pergunta"
                            type="text"
                            fullWidth
                            variant="standard"
                            {...register("question", {required: "Este campo é obrigatório"})}
                            error={!!errors.question}
                            helperText={errors.question && errors.question.message}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseForm}>Cancelar</Button>
                        <Button type="submit" disabled={formState.isSubmitting}>
                            Enviar
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
            <Dialog
                open={openSuccessDialog}
                onClose={() => setOpenSuccessDialog(false)}
            >
                <DialogTitle>Sucesso</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Sua pergunta foi enviada com sucesso!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenSuccessDialog(false)}>Fechar</Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={openErrorDialog}
                onClose={() => setOpenErrorDialog(false)}
            >
                <DialogTitle>Erro</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Ocorreu um erro ao enviar a pergunta. Por favor, tente novamente
                        mais tarde.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenErrorDialog(false)}>Fechar</Button>
                </DialogActions>
            </Dialog>
        </PageContainer>
    );
}
