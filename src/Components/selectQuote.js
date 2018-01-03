import React from "react";

export default class Quotes extends React.Component {
  constructor(props) {
    super();
  }
  componentWillMount() {
    this.getQuote()
  }
  getQuote() {
    let quote;
    fetch('http://localhost:8080/quotes')
     .then(res => res.json())
     .then(function(res) {
       quote = res;
       console.log(quote.quote, quote.author);
       return quote.quote;
     });
  }

  render() {
    // const text = this.props.quotes(quote => {
    //   return <p>{quote}</p>
    // });

    return (
      <div className="capture">
        <form className="navBar">
            {/* <img className="logo" alt="UnQuote logo" src="./images/UnQuote_logo.png"/> */}
            <fieldset className="buttonBox">
                <a href="pictures.html"><button type="button" className="button">Pictures</button></a>
                <a href="quotes.html"><button type="button" className="button">Quotes</button></a>
                <a href="meme.html"><button type="button" className="button">Meme</button></a>
            </fieldset>
        </form>
     </div>
    );
  }
}
