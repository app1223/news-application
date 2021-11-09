import React, { useEffect, useState, createRef } from 'react';
import styled from 'styled-components';
import {Button} from '@mui/material'
import '../App.css'



const Anchor = styled.a`
    text-decoration:none
    `;
const Source = styled.div`
    display:flex;
    justify-content:space-between;
    padding:10px;
    color:gray;
`;
const Title = styled.h1`
    font-size:1.5rem;
    color:black;
    padding:10px;
`;
const Description = styled.p`
    color:black;
    padding:10px;`;
const Bottom = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    padding:10px;
`;

function NewsCard({article:{description,urlToImage,url,title,source,publishedAt},i,activeArticle}) {
    const [elRefs, setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

        useEffect(() => {
            window.scroll(0, 0);

            setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
        }, []);

        useEffect(() => {
        if (i === activeArticle && elRefs[activeArticle]) {
            scrollToRef(elRefs[activeArticle]);
        }
        }, [i, activeArticle, elRefs]);
    return (
        <div ref={elRefs[i]} className={ activeArticle === i ? 'activenewscards':'newscards'}>
            <Anchor href={url} target='_blank' rel='noreferrer'>
                    <img style={{width:'100%',objectFit:'contain' ,height:'250px' }} src={urlToImage} alt="newspicture"  />
                <Source>
                    <p>{(new Date(publishedAt)).toDateString()}</p>
                    <p>{source.name}</p>
                </Source>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
            </Anchor>
                <Bottom>
                    <Button href={url}>Learn More</Button>
                    <h2 style={{fontSize:'1.2rem'}}>{i+1}</h2> 
                </Bottom>
        </div>
    )
}

export default NewsCard
