import { Component } from "react";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
        fullName: "",
        email: "",
        password: "",
        errors: {
            fullName: "",
            email: "",
            password: ""
        }
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
        case "fullName":
            errors.fullName =
            value.length < 5 ? "Name must be 5 characters long!" : "";
            break;
        case "email":
            const validEmailRegex = RegExp(
            /^([^\s@<>()[\]\\.,;:\s@"]+(\.[^\s@<>()[\]\\.,;:\s@"]+)*)@([^\s@<>()[\]\\.,;:\s@"]+\.)+[^\s@<>()[\]\\.,;:\s@"]{2,}$/
            );
            errors.email =
            validEmailRegex.test(value) ? "" : "Email should have @ and .";
            break;
        case "password":
            errors.password =
            value.length < 8 ? "Password should have atleast 8 characters." : "";
            break;
        default:
            break;
        }

        this.setState({ errors, [name]: value });
    };

    validateForm = (errors) => {
        return !Object.values(errors).some((val) => val.length > 0);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validateForm(this.state.errors)) {
        alert("Valid Form");
        } else {
        if (this.state.errors.fullName !== "") {
            alert(this.state.errors.fullName);
        }
        if (this.state.errors.email !== "") {
            alert(this.state.errors.email);
        }
        if (this.state.errors.password !== "") {
            alert(this.state.errors.password);
        }
        }
    };

    render() {
        return (
            <div style={{display:'flex', flex:1, justifyContent:'center', alignItems:'center', flexDirection:'column'}}>

                <h1 style={{color:'red'}}>Register Here!!!</h1>
                <form style={{display:'flex', flexDirection:'column', gap:6}} onSubmit={this.handleSubmit} noValidate>
                    
                    <div style={{display:'flex', justifyContent:"space-between", gap:6}}>
                        <label>Name: </label>
                        <input
                            type="text"
                            name="fullName"
                            onChange={this.handleChange}
                            value={this.state.fullName}
                            required
                        />
                    </div>
                    <div style={{display:'flex', justifyContent:"space-between", gap:6}}>
                        <label>Email: </label>
                        <input
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                            required
                        />
                    </div>
                    <div style={{display:'flex', justifyContent:"space-between", gap:6}}>
                        <label>Password: </label>
                        <input
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            required
                        />
                    </div>
                    <button style={{alignSelf:'center'}} type="submit">Submit</button>

                </form>
            </div>
        );
    }
}

export default Register;
