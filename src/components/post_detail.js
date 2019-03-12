import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPost, deletePost } from '../actions'

class PostDetail extends Component {
    componentDidMount() {
        const postId = this.props.match.params.id
        this.props.fetchPost(postId)
    }

    onDeleteClick = () => {
        const postId = this.props.match.params.id;
        this.props.deletePost(postId, () => {
            this.props.history.push('/')
        });
    }

    render() {
        const post = this.props.post

        if(!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to="/">Back to list</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick}
                >
                    Delete
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostDetail)
