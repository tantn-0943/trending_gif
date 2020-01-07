import React, { Component } from 'react';
import ItemTrending from './itemTrending'; 
import axios from 'axios';

export default class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        listTrending: []
      }
    }

    componentDidMount() {
      axios.get('https://api.giphy.com/v1/gifs/search?api_key=dfQgRJCnTbmZIr6Z6QJ94S7pRNJsdch9&q=dog&limit=25&offset=0&rating=G&lang=en')
        .then(res=> {
          let listTrending = res.data
          this.setState({
            listTrending: listTrending.data
          })
        })
    }

    render() {
      const {listTrending} = this.state;
      console.log(listTrending)

      const elementTrending = listTrending.map((item, index)=> {
        return <ItemTrending key = {index} item = {item} />
      })
        return (
          <div className="row">
            {elementTrending}
          </div>
        )
    }
}