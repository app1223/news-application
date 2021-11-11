import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import './App.css';
import Cards from './components/Cards';
import wordsToNumbers from 'words-to-numbers'

function App() {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticles, setActiveArticles] = useState(-1);
    const apiKey = `${process.env.REACT_APP_API}`;
    useEffect(() => {
        console.log(`${process.env.REACT_APP_API}`)
        alanBtn({
            key:apiKey,
            onCommand:({command , articles,number})=>{
                if(command==='newHeadlines'){
                    setNewsArticles(articles)
                    setActiveArticles(-1)
                }
                else if(command==='highlight'){
                    setActiveArticles((prevArticles)=> prevArticles+1)
                }
                else if(command==='open'){
                    const parsedNumber = number.length > 2 ? wordsToNumbers((number) ,{fuzzy:true}): number
                    const article = articles[parsedNumber - 1];

                    if (parsedNumber > articles.length) {
                        alanBtn().playText('Please try that again...');
                    } else if (article) {
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening...');
                    } else {
                        alanBtn().playText('Please try that again...');
                    }
                }

            }
        })
    }, [])
    return (
        <div className='app'>
            {newsArticles.length ? 
            (<div className='app_container'>
                <div className='app_article'>
                    <strong>Try Saying:</strong>
                     <p>Go Back</p>
                </div>
            <div>
                <div className='app_article'>
                    <strong>Try Saying:</strong> 
                    <p>Open article number[1]</p>
                </div>
                
            </div>
            </div>):null}
            <Cards articles={newsArticles} activeArticles={activeArticles}/>
        </div>
    )
}

export default App
