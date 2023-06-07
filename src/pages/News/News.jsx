import {useEffect, useState} from "react";
import PageContainer from "../../components/PageContainer/PageContainer.jsx";
import {Pagination, Stack} from "@mui/material";
import NewsItem from "../../components/NewsItem/NewsItem.jsx";
import axios from "axios";

function cleanSourceInTitle(obj) {
    const regexString = `\\s-\\s${obj.source}`;
    const sourceRegEx = new RegExp(regexString, 'g');
    const title = obj.title.replace(sourceRegEx, '');
    return {...obj, title: title};
}

function cleanTitles(news) {
    return news.map(cleanSourceInTitle);
}

async function getNews() {
    try {
        const response = await axios.get('/webapi/news?asc=false');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default function News() {
    const newsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await getNews(currentPage, newsPerPage);
            console.log(result);
            setNews(cleanTitles(result));
        }

        fetchData();
    }, [currentPage]);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

    return (
        <PageContainer
            title="Notícias"
            subtitle="Tudo o que está acontecento pelo mundo no combate a fome">
            <Stack spacing={2}>
                {currentNews.map((newsItem, index) => (
                    <NewsItem key={index} title={newsItem.title} source={newsItem.source} content={newsItem.description}
                              link={newsItem.link} thumbnail={newsItem.thumbnail}/>
                ))}
            </Stack>
            <Pagination
                count={Math.ceil(news.length / newsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                sx={{marginTop: 2, display: "flex", justifyContent: "center"}}
            />
        </PageContainer>
    );
}
