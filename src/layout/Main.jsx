import React from "react"
import { Movies } from "../components/Movies"
import Prelaoder from '../components/Preloader'
import Search from "../components/Search"

export class Main extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=75970020&s=matrix')
        .then(respones => respones.json())
        .then(data => this.setState({movies: data.Search}))
    }

    searchMovies = (str) => {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=75970020&s=${str}`)
        .then(respones => respones.json())
        .then(data => this.setState({movies: data.Search}))
    }

    render() {
        const {movies} = this.state;

        return <main className=" container content">
            <Search search={this.searchMovies}/>
            {
                movies.length ?  (
                <Movies movies={movies}/>
                ) : <Prelaoder/>
            }
                
            </main>
    }
}