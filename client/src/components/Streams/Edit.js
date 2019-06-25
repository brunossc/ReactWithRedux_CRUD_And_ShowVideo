import React from 'react';
import { editStream, fetchStream } from '../../actions';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';
import Lodash from 'lodash';


class Edit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = jsonFormValues => {
        this.props.editStream(this.props.match.params.id, jsonFormValues);
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>;
        }

        return (
            <div className="ui container">
                <h2>Edit Stream</h2>
                <StreamForm onSubmit={this.onSubmit} initialValues={Lodash.pick(this.props.stream, "title", "description")} />
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { editStream, fetchStream })(Edit);