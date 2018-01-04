import React from "react";
import {connect} from 'react-redux';
import {fetchQuotes} from '../Actions/quote';

export class Quotes extends React.Component {
  componentDidMount(){
    this.props.dispatch(fetchQuotes());
  }
  render(){
    return(
      <div className="capture">
        <form className="navBar">
            {/* <img className="logo" alt="UnQuote logo" src="./images/UnQuote_logo.png"/> */}
            <fieldset className="buttonBox">
                <a href="pictures.html"><button type="button" className="button">Pictures</button></a>
                <a href="quotes.html"><button type="button" className="button">Quotes</button></a>
                <a href="meme.html"><button type="button" className="button">Meme</button></a>
            </fieldset>
        </form>
        {this.props.quotes.map(quote =>
          <div>{quote}</div>
        )}
      </div>      
    )
  }
}

const mapStateToProps = state => {
  return{
  quotes: state.quotes,
  loading: state.loading,
  error: state.error
}};
  
export default connect(mapStateToProps)(Quotes);

// export class Quotes extends React.Component {
//   constructor(props) {
//     super();
//   }
//   componentWillMount() {
//     this.getQuote();
//   }
  
//   getQuote() {
//     let quote;
//     let authorUsed;
//     fetch('http://localhost:8080/quotes')
//      .then(res => res.json())
//      .then(function(res) {
//        quote = res;
//        if(quote.author!==''){
//           authorUsed=quote.author;
//        } else{
//           authorUsed='Anonymous';
//        }
//        console.log(quote.quote+' — '+authorUsed);
//        return quote.quote;
//      });
//   }

//   render() {
//     return (
//       <div className="capture">
//         <form className="navBar">
//             {/* <img className="logo" alt="UnQuote logo" src="./images/UnQuote_logo.png"/> */}
//             <fieldset className="buttonBox">
//                 <a href="pictures.html"><button type="button" className="button">Pictures</button></a>
//                 <a href="quotes.html"><button type="button" className="button">Quotes</button></a>
//                 <a href="meme.html"><button type="button" className="button">Meme</button></a>
//             </fieldset>
//         </form>
//      </div>
//     );
//   }