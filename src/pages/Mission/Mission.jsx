import ArticleContent from "../../components/ArticleContent/ArticleContent.jsx";
import image from "../../assets/page_images/mission.jpg";

const pageContent = {
    title: "A missão",
    subtitle: "A colaboração de todos e a tecnologia juntos a serviço no combate a fome e a insegurança alimentar",
    image: image,
    content:
        "O Feeding Tomorrow tem como objetivo principal combater a fome e a insegurança alimentar por meio de doações de alimentos, trata-se de uma plataforma online que permite às pessoas doarem alimentos e também se cadastrarem para receber doações. Esse site é de extrema importância, pois utiliza a tecnologia para facilitar o processo de doação e garantir que aqueles que mais necessitam tenham acesso a alimentos básicos.\r\n" +
        "Uma das principais vantagens de utilizar a tecnologia nesse contexto é a facilidade de conexão entre doadores e beneficiários, através do Feeding Tomorrow é possível estabelecer uma rede de solidariedade de forma eficiente e ágil. As pessoas podem fazer doações com apenas alguns cliques, sem a necessidade de deslocamento físico, o que reduz barreiras e amplia o alcance das ações.\r\n" +
        "Além disso, a tecnologia permite o acompanhamento e a gestão efetiva das doações onde o Feeding Tomorrow pode registrar as informações sobre os alimentos doados e sua distribuição, garantindo transparência e controle sobre o processo. Isso também ajuda na identificação de áreas com maior necessidade e no planejamento de ações para atender a essas demandas de maneira mais eficaz.\r\n" +
        "Outro aspecto importante é a conscientização e a mobilização da sociedade, onde pode-se oferecer recursos informativos, como artigos e estatísticas sobre a fome e a insegurança alimentar, incentivando as pessoas a se envolverem nessa causa. Além disso, a plataforma pode promover campanhas de arrecadação específicas, engajando a comunidade em ações coletivas para enfrentar esse problema.\r\n" +
        "Em suma, o Feeding Tomorrow desempenha um papel crucial no combate à fome e à insegurança alimentar, utilizando a tecnologia para facilitar as doações e conectar doadores e beneficiários de forma eficiente. Através dessa plataforma, é possível ampliar o alcance das ações solidárias, promover a transparência e o controle das doações e conscientizar a sociedade sobre a importância de enfrentar esse desafio social. Com o auxílio da tecnologia, é possível criar um impacto positivo e construir um futuro melhor para todos, onde a fome seja erradicada e a segurança alimentar seja uma realidade."
};

export default function Mission() {
    return (
        <ArticleContent {...pageContent}/>
    );
}
