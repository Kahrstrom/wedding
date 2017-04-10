import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FabButton from '../fab_button/';
import { Button } from 'react-toolbox/lib/button';
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';
import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../../actions/index';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router';
import CircularLoader from '../circular_loader';
import theme from './theme.scss';


class PostsIndex extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    componentWillMount() {
        this.props.fetchPosts();
    }

    handleAdd() {
        this.context.router.push('/posts/new');
    }

    renderPosts() {
        if(this.props.posts.length === 0) {
            return <ListItem key={1} caption="No posts added yet..." />;
        }
        return this.props.posts.map((post, index) => {
            return (<ListItem 
                key={post.id}
                theme={theme}
                className={`${index%2 === 0 ? theme.listItemEven : ''}`}
                caption={post.title}
                legend={post.categories}
                to={`/posts/${post.id}`}
                />
            );
        });
    }

    render() {
        if(!this.props.posts){
            return (
                <CircularLoader />
            );
        }
        return (
            <Card>
                <CardTitle
                    title="All blog posts"/>
             
                <List ripple>
                    <ListSubHeader caption="Recently added posts..."/>
                    {this.renderPosts()}
                </List>
                <FabButton icon="add" accent floating right bottom onClick={this.handleAdd.bind(this)} />
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
