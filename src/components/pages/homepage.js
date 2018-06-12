import React, {Component} from 'react';
import background from './Kod.png';

var sectionStyle = {
    width: "cover",
    height: "450px",
    backgroundImage: "url(" + background + ")"
  };
  

class Homepage extends Component {
    render() {
        return (
            <div className = "home-page">
                 <section style={ sectionStyle }>
      
                <h1> 
                    homepage content
                </h1>
                </section>
            </div>
        );
    }
}

export default Homepage;