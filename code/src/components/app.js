import React from "react"
const productsJson = require("./../products.json")

console.log("Products: (Remove this line in app.js!)", productsJson)

class App extends React.Component {

  render() {
    return (
      <div className="App">
        Find me in src/app.js!
      </div>
    )
  }

}

export default App
