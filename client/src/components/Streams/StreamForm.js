import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    errorMessage({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInputs = ({ input, label, meta }) => {

        const errorFieldClass = `field ${meta.touched && meta.error ? 'error' : ''}`;

        return (
            <div className={errorFieldClass}>
                <label>{label}</label>
                <input {...input} />
                <div>{this.errorMessage(meta)}</div>
            </div>
        );
    }

    onSubmit = jsonFormValues => {
        this.props.onSubmit(jsonFormValues);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" label="Title:" component={this.renderInputs} />
                <Field name="description" label="Description:" component={this.renderInputs} />
                <div>
                    <button className="ui button primary" >Submit</button>
                </div>
            </form>
        );
    }
}

const validateFormInputs = jsonFormInputs => {
    const errors = {};

    if (!jsonFormInputs.title)
        errors.title = "The title field is required.";

    if (!jsonFormInputs.description)
        errors.description = "The title description is required.";

    return errors;
}

export default reduxForm({
    form: "streamForm",
    validate: validateFormInputs
})(StreamForm);