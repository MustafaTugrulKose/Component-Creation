import React from "react";
import logo from "./product-image.jpg";
const divStyle = {
    display:"block",
    marginTop:"10px"
}
const inlineCssLeft = {
    float:"left"
}
const inlineCssRight = {
    float:"right"
}
function ListItem(props) {
    return  <li class="nav-item"><a class="nav-link active" href="#">{props.value}</a></li>
  }
  
  function MenuList(props) {
    const hotels = props.hotels;
    return (
        <ul class="nav">
            {
                hotels.map((number) => <ListItem value={number.name}/>)
            }
            </ul>
    );
  }
  const hotels = [
    {name:"Otel"},
    {name:"Tur"},
    {name:"Gemi"}
  ];
export class HeaderComponent extends React.Component {
    authour = 
       {
           name:"Mustafa Tuğrul",
           surname:"Köse"
        }
    
    render (){
        return(
            <div>
                <div style={inlineCssLeft}>
                 <MenuList hotels={hotels} />
                 </div>
                 <div style={inlineCssRight}>
                        Hoşgeldin {this.authour.name + " " + this.authour.surname}
                </div>
            </div>    
        );
    }
} 

export class ProductCard extends React.Component {
    render(){
        
        return (
            <div>
                <a href="https://www.jollytur.com" target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt=""/>  
                    <span className="product-title"  style={divStyle}>{this.props.productName}</span>  
                </a>
            </div>
        );
    }
}

