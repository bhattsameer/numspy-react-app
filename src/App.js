import React from 'react';
import Form from "./components/Form"
import Numspy from "./components/Numspy"
import Footer from "./components/Footer"
import Progress from "./components/Progress"
class App extends React.Component {
  state = {
    name: undefined,
    number: undefined,
    state: undefined,
    provider: undefined,
    error: undefined,
    progress: false,
    form_transition: undefined,
    form_height :40
  }

  getDetails = async (e) => {
    this.setState({
      progress :true
    })
    e.preventDefault();
    const number = e.target.elements.number.value;
    if (number && number.length === 10 ){
      this.setState({
        error: ""
      });
      const api_call = await fetch(`http://numspy.pythonanywhere.com/LocateMobile/${number}`);
      const data = await api_call.json();
      console.log(data);
      this.setState({
        name: data.data.Name,
        number: data.data.Mobile,
        state: data.data.State,
        provider: data.data.Provider,
        error: "",
        progress: false,
        form_transition : "height 0.2s ease-out",
        form_height:"100"
      });
    }
    else 
    {
      this.setState({
        name: undefined,
        number: undefined,
        state: undefined,
        provider: undefined,
        error: "Please Enter Valid 10 Digit Mobile Number.",
        progress: false,
        form_height:40
      });
    } 
  }
  render(){
    var st = this.state.form_transition;
    var ht = this.state.form_height + '%';
    return(
      <div>
        <div className = "wrapper">
          <div className = "main">
                <div className= "form-container" >
                    <div className="form-elements"  style={{height:ht,transition : st}}>
                        <Form getDetails={this.getDetails}/>
                        <Progress progress={this.state.progress}/>
                        <Numspy
                          name={this.state.name}
                          number={this.state.number}
                          state={this.state.state}
                          provider={this.state.provider}
                          error={this.state.error}
                        />

                    </div>
                    <Footer/>
                </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
