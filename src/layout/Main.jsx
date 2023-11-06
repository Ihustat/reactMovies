import React from "react"
import { Movies } from "../components/Movies"
import Prelaoder from '../components/Preloader'
import Search from "../components/Search"

export class Main extends React.Component {
    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=75970020&s=matrix')
        .then(respones => respones.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
    }

    searchMovies = (str, type) => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=75970020&s=${str}&type=${type}`)
        .then(respones => respones.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
    }

    render() {
        const {movies} = this.state;

        return <main className=" container content">
            <Search search={this.searchMovies}/>
            {
                this.state.loading ? <Prelaoder/>  : (
                    <Movies movies={movies}/>
                    )
            }
                
            </main>
    }
}