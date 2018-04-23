import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { postNewPost } from '../actions/index';
import { connect } from 'react-redux';

class CreatePost extends Component {
    handleField(field) {
        return (
            <div className={`form-group ${field.meta.touched && field.meta.error} ? 'has-danger': '' `}>
                <label>{ field.fieldname }</label>
                <input {...field.input} className='form-control' />
                <div className='text-help'> 
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        );
    }
    onSubmit(values) {
        this.props.postNewPost(values, ()=> {
            this.props.history.push('/');
        });

    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    type='text'
                    fieldname='Title of the new Post'
                    component={this.handleField}
                    name={'title'}
                ></Field>
                <Field
                    type='text'
                    fieldname='category'
                    component={this.handleField}
                    name={'category'}
                ></Field>
                <Field
                    type='text'
                    fieldname='content'
                    component={this.handleField}
                    name={'content'}
                ></Field>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const error = {}
    if(!values.title) {
        error.title="Enter a title";
    }

    if(!values.category) {
        error.category="Enter category field";
    }

    if(!values.content) {
        error.content="Enter content";
    }
    return error;
}

export default reduxForm({
    validate,
    form: 'First'
})(
    connect(null, {postNewPost} )(CreatePost)
);