import React, { Component, PropTypes } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card'; 
import { Button } from 'react-toolbox/lib/button';
import { ProgressBar } from 'react-toolbox/lib/progress_bar';
import { fetchPost, deletePost } from '../../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import theme from './theme.scss';

class PostsShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    handleDelete() {
        this.props.deletePost(this.props.params.id)
            .then(() => {
                this.context.route.push('/');
            });
    }

    render() {
        if(!this.props.post){
            return (
                <div className={theme.loadingCard}>
                    <ProgressBar theme={theme} type='circular' mode='indeterminate' multicolor />
                </div>
            );
        }
        return (
            <Card>
                <CardTitle 
                    title={this.props.post.title}
                    subtitle={this.props.post.categories} />
                <CardText>
                    {this.props.post.content}
                </CardText>
                <CardActions>
                    <Button ripple raised accent type="button" label="Delete" onClick={this.handleDelete.bind(this)} />
                    <Link to="/">
                        <Button raised label="Back" />
                    </Link>
                </CardActions>
            </Card>
        );
    }
}

function mapStateToProps(state){
    return { post: state.posts.post }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
