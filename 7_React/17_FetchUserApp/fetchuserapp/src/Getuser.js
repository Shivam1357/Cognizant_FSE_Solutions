import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null,
      loading : true
    };
  }

  async componentDidMount() {
    try {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loading: false });
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
  }

  render() {
    const { person } = this.state;

    return (
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        {person ? (
          <div>
            <h1>{person.name.title} {person.name.first}</h1>
            <img src={person.picture.large} alt="User"/>
          </div>
        ) : (
          <p>Loading user...</p>
        )}

      </div>
    );
  }
}

export default Getuser;
