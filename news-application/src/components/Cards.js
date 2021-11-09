import React from 'react'
import NewsCard from './NewsCard';
import styled from 'styled-components';
import '../App.css';



const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    height:100vh ;
    padding:2%;
    `; 
 const Head = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    text-align:center;
    width:100%;
    height:50vh;
    background-color:white;
    border-radius:10px;
    padding:20px;
    margin:0.5%;
    box-shadow:0 8px 14px -2px lightgray;
    transition:transform 0.3s ease;
    &:hover{
        transform:scale(1.02);
        border:2px solid gray;
        
    }

    `;
const Title = styled.h1`
    font-size:1.5rem;
    font-weight:600;
    font-style:bold`;
const Info =styled.p`
    margin-top:10px;
    font-size:1.1rem;
    font-weight:500;
`;
const Span = styled.p`
    font-size:1.1rem;
    font-weight:500`;
const Text = styled.span`
    font-size:1.1rem;
    font-weight:600;
    font-style:bold;
    `;
const Strong = styled.strong`
    font-size:1.3rem;`;
const Article= styled.div`
    padding:10px;
   
    `;


function Cards({articles,activeArticles}) {
    const infoCards=[
        { id:'01', title: 'Latest News', text: 'Give me the latest news' },
        { id:'02', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
        { id:'03', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
        { id:'04', title: 'News by Sources', info: 'Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from BBC News' },]
    if(!articles.length){
        return(
            <Container>
                    <h1 className="heading">ALAN AI</h1>
                <div className='frontpage'>
                    {infoCards.map((infoCard)=>(
                        <Head key={infoCard.id}>
                            <Title>{infoCard.title}</Title>
                            {infoCard.info ? <Info><Strong>{infoCard.title.split(' ')[2]}</Strong>: <br />{infoCard.info}</Info> : null}
                            <Span><Text>Try Saying:</Text> <br />{infoCard.text}</Span>
                        </Head>
                        
                    ))}
                </div>
            </Container>
        )
    }
    
    return (
        <div className='card' style={{margin:'0', width:'100%', justifyContent:'center' ,display:'flex', flexWrap:'wrap'}}>
            {articles?.map((article,i)=>(
                <Article>
                    <NewsCard article={article} key={i} i={i} activeArticle={activeArticles} />
                </Article>
            ))}
        </div>
    )}

export default Cards
