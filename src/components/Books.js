//https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse


import React, {Component} from 'react';

const API = 'AIzaSyDZOZjelGwA5AVXp62NFfhM6JXKDlzk-7A'
const q = 'javascript'
// const result = 20;

//https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=yourAPIKey

var finalURL = `https://www.googleapis.com/books/v1/volumes?q=${q}&filter=free-ebooks&key=${API}`

class Books extends Component {

  constructor(props){
    super(props);

    this.state = {
      resultBooks: []
    };
    this.clicked = this.clicked.bind(this);
  }
clicked(){
  fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        const resultBooks = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.selfLink);
        this.setState({resultBooks});
      })
      .catch((error) => {
        console.error(error);
      });
}



  render(){
    // console.log(finalURL);
    console.log(this.state.resultBooks);

    return(
      <div>
        <button className="btn-dark" onClick={this.clicked}>Get Books</button>
          {
            this.state.resultBooks.map((link, i) => {
              console.log(link);
              var book = <div key={i} className="books"><iframe  width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
              return book;
            })
          }
          {this.book}


    </div>
    );
  }
}

export default Books;
