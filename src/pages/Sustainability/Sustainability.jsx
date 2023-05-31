import ArticleContent from "../../components/ArticleContent/ArticleContent.jsx";
import image from "../../assets/page_images/sustainability.webp";

const pageContent = {
    title: "Desenvolvimento sustentável",
    subtitle: "A tecnologia como aliada na busca por um futuro mais justo e sustentável",
    image: image,
    content:
        "Alcançar uma agricultura sustentável é fundamental não apenas para superar a fome, mas também para preservar o meio ambiente e garantir a segurança alimentar a longo prazo. Diversas tecnologias inovadoras desempenham um papel crucial nesse objetivo. Uma delas é a agricultura vertical, que consiste no cultivo de plantas em camadas empilhadas verticalmente. Essa técnica permite o aproveitamento máximo do espaço e a produção em ambientes urbanos, reduzindo a necessidade de desmatamento e transporte de alimentos.\r\n" +
        "Outra tecnologia relevante é a aquaponia, um sistema que combina a criação de peixes com o cultivo de plantas em um ambiente simbiótico. Nesse sistema, os resíduos dos peixes são utilizados como nutrientes para as plantas, que, por sua vez, filtram a água para retorná-la aos peixes em um ciclo contínuo. A aquaponia reduz o consumo de água em comparação com os métodos tradicionais de cultivo e aumenta a eficiência produtiva.\r\n" +
        "A agricultura de precisão também desempenha um papel fundamental na agricultura sustentável. Ela utiliza tecnologias como GPS, sensoriamento remoto e drones para mapear as características do solo, monitorar o crescimento das plantas e aplicar insumos agrícolas de forma precisa e localizada. Isso resulta em um uso mais eficiente de recursos como água, fertilizantes e pesticidas, reduzindo os impactos ambientais e os custos de produção.\r\n" +
        "Outras tecnologias inovadoras que merecem destaque incluem as smart farms, que combinam automação, análise de dados e conectividade para otimizar o manejo agrícola, aprimorando a eficiência e a sustentabilidade; a Internet das Coisas (IoT), que permite o monitoramento em tempo real de variáveis como temperatura, umidade e qualidade do solo, auxiliando na tomada de decisões precisas; e as melhorias genéticas em sementes, que visam desenvolver variedades mais resistentes a doenças, pragas e condições climáticas adversas.\r\n" +
        "Em resumo, alcançar uma agricultura sustentável requer a adoção de tecnologias inovadoras que promovam a eficiência produtiva, a redução de impactos ambientais e o uso racional de recursos. A agricultura vertical, a aquaponia, a agricultura de precisão, as smart farms, a IoT e as melhorias genéticas em sementes são apenas algumas das tecnologias que podem impulsionar essa transformação. Ao investir nessas soluções, é possível avançar em direção a um sistema agrícola mais resiliente, capaz de suprir as demandas alimentares globais de forma sustentável e garantir um futuro mais seguro para as gerações futuras.\r\n"
};

export default function Sustainability() {
    return (
        <ArticleContent {...pageContent}/>
    );
}
