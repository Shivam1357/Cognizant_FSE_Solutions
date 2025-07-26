import React, { Component } from 'react';

class Posts extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts : [],
            error : null
        }
    }
    
    componentDidMount(){
        this.loadPosts();
    }

    loadPosts = async () => {
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            this.setState({posts : data});
        }
        catch(error) {
            this.setState({error})
        }
    }

    componentDidCatch(error, info){
        alert("An error occured: " + error.toString());
        console.error("Error info: ", info);
    }

    render() {
        const {posts, error} = this.state;

        if (error) {
            return(
                <h2>Error loading Posts.</h2>
            )
        }
        return (
            <div style={{ padding: '20px' }}>
                <h1 style={{ textAlign: 'center' }}>Blog Posts</h1>

                {posts.map(post => (
                    <div key={post.id} style={{ marginBottom: '20px' }}>
                    <h2 style={{ marginBottom: '5px' }}>{post.title}</h2>
                    <p>{post.body}</p>
                    <hr />
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;