import React, { Component } from 'react';
import { openPost, deletePost } from '../actions/index';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';

class OpenPost extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.openPost(id);
    }
    deletePost() {
        this.props.deletePost(this.props.match.params.id,()=>{
            this.props.history.push('/');
        });
    }
    render() {
        const {post} = this.props;
        if(!post){
            return <div>loading..</div>
        }
        return (
            <div>
                <Link to='/' className='btn btn-primary' > Back to home </Link>
                <button onClick={this.deletePost.bind(this)} className='btn btn-danger pull-right'>Delete Post</button>
                <h3>{post.title}</h3>
                <h6>{post.category}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}
function mapStateToProps({posts}, ownProps) {
    return {post : posts[ownProps.match.params.id]}
}
export default connect(mapStateToProps, {openPost, deletePost})(OpenPost);