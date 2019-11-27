import React from 'react';

import './App.css';

class App extends React.Component {
  render() {
    return(
        <div className="container">
            <div className="row no-gutters">
              <div className="col-6">
                  <div className="title">
                      <h6>Color Picker</h6>
                  </div>
                  <button type="button" className="red bt"></button>
                  <button type="button" className="yellow bt"></button>
                  <button type="button" className="green bt"></button>
                  <button type="button" className="gray bt"></button>
              </div>
              <div className="col-6">
                  <div className="title">
                      <h6>Font Size: </h6>
                  </div>
                  <button type="button" className="up">Up</button>
                  <button type="button" className="down">Down</button>
              </div>
            </div>
            <div className="row no-gutters justify-content-center ">
                <div className="col-4">
                    <h6 className="h6"><button className="reset">Reset</button></h6>
                </div>
            </div>
            <div className="row no-gutters justify-content-center">
                <div className="col-12">
                    <div className="announcement title">Color: - Fontsize: </div>
                    <div className="text-content">Color and Fontsize are picked</div>
                </div>
            </div>
        </div>
    );
    
}
}

export default App;
