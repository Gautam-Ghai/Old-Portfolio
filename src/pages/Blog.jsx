import React, { Component } from 'react';
import axios from "axios";
import styled from "styled-components";
import BlogCard from "../components/BlogCard"

//Material-UI
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const MainConatiner = styled.div`
    height: auto;
    width: 100vw;
`

const CardDisplay = styled(Paper)`
&& {
    background-color: ${({ theme }) => theme.cardColor};
  }

`

class Blog extends Component {
    state = {
        articles: []
    }

    componentDidMount(){
        axios.get('https://dev.to/api/articles?username=gautamghai')
        .then(result =>{
            this.setState({
                articles: result.data
            })
        })
        .catch(err =>{
            console.log(err)
        })
    }

    render() { 
        const ShowArticles = (this.state.articles.length !== 0) ? (
            this.state.articles.map(article => <BlogCard key={article.id} article={article}/>)
        ) : (
            <CardDisplay />
        )
        return (
            <MainConatiner id="Blog">
                <Container maxWidth="lg" >
                <Grid container spacing={3}   >
                    {ShowArticles}
                </Grid>
                
                </Container>
            </MainConatiner>
        );
    }
}
 
export default Blog;