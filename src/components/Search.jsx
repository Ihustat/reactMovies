import React from "react";

class Search extends React.Component {
    state = {
        search: ''
    }

    handleKey = (e) => {
        if (e.key === 'Enter' ) {
            this.props.search(this.state.search);
        };
    }

    render() {
        return (
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
                 <button className="btn" onClick={() => this.props.search(this.state.search)}>Search</button>
            </div>
          </div>
        )
    }
}

export default Search;