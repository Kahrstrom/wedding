import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';  
import FormInput from '../form_input/';
import Button from 'react-toolbox/lib/button';
import theme from './theme.scss';
import { Link } from 'react-router';
import { createPost } from '../../actions/index';

class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.createPost(props)
            .then(() => { 
                //blog post has been created, navigate the user to index.
                this.context.router.push('/');
             });
    }

    render() {
        const { fields: { title, categories, content }, handleSubmit, reset } = this.props;
        return (
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                <Card>
                    <CardTitle
                        title="Create a new post"
                        subtitle="Write whatever is on your mind" />
                    <CardText>
                        <Field component={FormInput} type="text" label="Title" name="title" {...title} />
                        <Field component={FormInput} type="text" label="Categories" name="categories" {...categories} />
                        <Field component={FormInput} type="textarea" multiline={true} label="Content" name="content" {...content} />
                    </CardText>
                    <CardActions>
                        <Button raised ripple accent className="submit-button" theme={theme} type="submit" label="Save" />
                        <Link to="/">
                            <Button raised ripple theme={theme} label="Cancel" />
                        </Link>
                    </CardActions>
                </Card>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.title){
        errors.title = 'Enter a title';
    }
    if(!values.categories){
        errors.categories = 'Enter at least one category';
    }
    if(!values.content){
        errors.content = 'Enter some content';
    }
    return errors;
}

// connect: first argument is mapStateToProps, 2nd is mapDispathToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
PostsNew = reduxForm({
    form: 'PostsNew',
    fields: ['title', 'categories', 'content'],
    validate
})(PostsNew);

PostsNew = connect(null, { createPost })(PostsNew);

export default PostsNew;

 