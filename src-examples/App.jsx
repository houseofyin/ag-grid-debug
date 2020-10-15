import React, {Component} from "react";

import RichGridDeclarativeExample from "./richGridDeclarativeExample/RichGridDeclarativeExample";

class App extends Component {
    render() {
        return (
            <div style={{display: "inline-block", width: "100%"}}>
                <RichGridDeclarativeExample/>
            </div>
        )
    }
}

export default App
