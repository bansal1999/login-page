import * as React from "react";
import * as ReactDOM from "react-dom";
export default class ReactApp extends React.Component {
  render() {
    return (
      <div
        style={{
          margin: `50px`,
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `center`,
        }}
      >
        <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
          <img src="./Code.png" alt="Sample" style={{ height: `180px` }} />
          <div className="e-card-stacked">
            <div className="e-card-header">
              <div className="e-card-header-caption">
                <div className="e-card-header-title">Subject Name</div>
              </div>
            </div>
            <div className="e-card-content">
              General Instruction for the quiz 
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<ReactApp />, document.getElementById("element"));
