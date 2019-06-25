import React from 'react';
import { connect } from 'react-redux';
import { createStream } from  '../../actions';
import  StreamForm from './StreamForm';

class Create extends React.Component {

    onSubmit = jsonFormValues =>
    {
        this.props.createStream(jsonFormValues);
    }

    render() {
        return (
            <div className="ui container" >
                <h2>Create Stream</h2>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { createStream })(Create);