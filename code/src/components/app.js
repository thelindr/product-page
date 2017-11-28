import React from "react"
import Products from "./products"
const productsJson = require("./../products.json")

console.log("Products: (Remove this line in app.js!)", productsJson)

class App extends React.Component {

  render() {
    return (
      <div className="App">

        <div className="container">

          {productsJson.products.map((item) => {
        return <Products
          name={item.name}
          type={item.type}
          price={item.price}
          size={item.size}
          numberInPack={item.numberInPack}
          deliveryTime={item.deliveryTime}
          substance={item.substance}
          image={item.image}
        />
      })}

        </div>


      </div>
    )
  }

}

export default App
