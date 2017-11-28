import React from "react"

class Products extends React.Component {
  render() {
    return (
      <div className="Product">
        <div className="productHeader">
        <h1>{this.props.name}</h1>
        <h2>{this.props.type}</h2>
        </div>
        <div className="imgContainer">
        <img src= {this.props.image} alt="Produktbild"/>
        </div>
        <li>Storlek: {this.props.size}</li>
        <li>Antal: {this.props.numberInPack} st.</li>
        <li>Verksamt Ämne: {this.props.substance}</li>
        <div className="containerPrice">
        <p>Pris: {this.props.price} SEK</p>
        <button type="button">Köp</button>
        </div>
        <div className="foot">
        <p>Leveranstid: {this.props.deliveryTime}</p>
        </div>
      </div>

   )
  }
}









export default Products
