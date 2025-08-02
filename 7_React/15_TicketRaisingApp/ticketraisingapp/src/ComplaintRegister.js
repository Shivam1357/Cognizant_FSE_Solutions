import { Component } from 'react';



class ComplaintRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ename: '',
      complaint: '',
      NumberHolder: Math.floor(Math.random() * 100),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    var msg =
      'Thanks ' +
      this.state.ename +
      '\nYour Complaint was Submitted.\nTransaction ID is: ' +
      this.state.NumberHolder;
    alert(msg);
    event.preventDefault();
  }


  render() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2 style={{ color: 'red' }}>Register your complaints here!!!</h2>
            <form onSubmit={this.handleSubmit}>
                <table align="center" >
                    <tbody>
                    <tr>

                        <td>Name:</td>
                        <td>

                        <input
                            
                            type="text"
                            name="ename"
                            value={this.state.ename}
                            onChange={this.handleChange}
                        />
                        </td>
                    </tr>

                    <tr>
                        <td>Complaint:</td>
                        <td>

                        <textarea
                            name="complaint"
                            value={this.state.complaint}
                            onChange={this.handleChange}
                        ></textarea>
                        </td>
                    </tr>

                    <tr>

                        <td colSpan="2" align="center">
                        <input type="submit" value="Submit" />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
  }
}

export default ComplaintRegister;