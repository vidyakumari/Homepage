import React from 'react';
import './App.css';
import Header from './Components/header';
import Body from './Components/body';
import Footer from './Components/footer';
import Filter from './Components/filter';
import jobs from './jobs';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: jobs
    }
  }

  filterdata = (filterjobs) => {
    this.setState({
      data: filterjobs
    })
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Filter FilteredData={this.filterdata} job_filter={jobs}></Filter>
        <Body jobsdata={this.state.data}></Body>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

