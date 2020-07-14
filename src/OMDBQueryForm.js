import React, { Component } from 'react'
import MovieInfo from './MovieInfo'

class OMDBQueryForm extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        baseURL: 'https://www.omdbapi.com/?',
        apikey: 'apikey=' + '98e3fb1f',
        query: '&t=',
        movieTitle: '',
        searchURL: '',
        movie: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange (event) {
      this.setState({ [event.target.id]: event.target.value })
    }
    handleSubmit (event) {
      event.preventDefault()
      this.setState({
        searchURL: this.state.baseURL + this.state.apikey + this.state.query + this.state.movieTitle
      }, async () => {
        try {
          const response = await fetch(this.state.searchURL);
          const result = await response.json(); // .json also returns promise, need to await
          this.setState({movie: result}) // set movie state as the result object
        } catch(err) {
          console.log(err);
        }
      })
      //   fetch(this.state.searchURL)
      //     .then(response => {
      //       return response.json()
      //     }).then(json => this.setState({
      //       movie: json,
      //       movieTitle: ''
      //     }),
      //     err => console.log(err))
      // })
    }
    render () {
      return (
        <React.Fragment>
          <form onSubmit={this.handleSubmit}>
            <label for='movieTitle'>Title</label>
            <input
              id='movieTitle'
              type='text'
              value={this.state.movieTitle}
              onChange={this.handleChange}
            />
            <input
              type='submit'
              value='Find Movie Info'
            />
          </form>
          {(this.state.movie)
            ? <MovieInfo movie={this.state.movie} />
            : ''
          }
        </React.Fragment>
      )
    }
  }

export default OMDBQueryForm
