import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getPostList } from '../actions/index';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.getPostList();
    }
    renderList() {
        return _.map(this.props.posts, (post)=> {
            return <li className='list-group-item'
            onClick={()=>{
                const id = post.id;
                this.props.history.push(`/posts/${id}`);
            }}
            >{post.title}</li>
        })
    }
    render() {
        return (
            <div>
                <Link to='/posts/new' className='btn btn-primary align-right'> CreatePost </Link>
                <ul className='list-group'>
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({posts}) {
    return {posts}
}

export default connect(mapStateToProps, { getPostList })(PostsIndex);