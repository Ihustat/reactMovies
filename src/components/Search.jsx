import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        type: ''
    }

    handleKey = (e) => {
        if (e.key === 'Enter' ) {
            this.props.search(this.state.search, this.state.check);
        };
    }

    handleRadio = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <>
                <div className="row">
                <div className="input-field col s12">
                  <input
                  value={this.state.search}
                  onChange={(e) => this.setState({search: e.target.value})}
                  onKeyDown={this.handleKey}
                   placeholder="Search"
                    type="search"
                     className="validate"
                     />
                     <button className="btn" onClick={() => this.props.search(this.state.search, this.state.check)}>Search</button>
                </div>
              </div>

              <p>
        <label>
            <input
             className="with-gap"
             name="type"
              type="radio"
              value=''
               onClick={this.handleRadio}
               checked={this.state.type === ''}
                />
            <span>All</span>
        </label>
        </p>
        <p>
        <label>
            <input
             className="with-gap"
             name="type"
              type="radio"
              value='movie'
              onClick={this.handleRadio}
              checked={this.state.type === 'movie'}
               />
            <span>Films</span>
        </label>
        </p>
        <p>
        <label>
            <input
             className="with-gap"
              name="type"
               type="radio" 
               value='series'
               onClick={this.handleRadio}
               checked={this.state.type === 'series'}
                />
            <span>Series</span>
        </label>
        </p>
            </>
        )
    }
}

export default Search;