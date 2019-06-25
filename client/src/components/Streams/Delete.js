import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { deleteStream, fetchStream } from '../../actions';
import history from '../../history';


class Delete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    deleteEvent = () => {
        this.props.deleteStream(this.props.match.params.id);
    }

    actionsEvents() {
        return (
            <React.Fragment>
                <button className="ui primary button negative" onClick={this.deleteEvent}>Delete</button>
                <button className="ui button" onClick={() => history.push("/streams")}>Cancel</button>
            </React.Fragment>
        );
    }

    getContent() {
        if (!this.props.stream) {
            return "Loading...";
        }

        return "Are you sure you want to DELETE the \"" + this.props.stream.title + "\" stream ?";
    }

    render() {

        return (
            <Modal
                title="Delete Stream"
                content={this.getContent()}
                actions={this.actionsEvents()}
                DismissEvent={() => history.push("/streams")}
            />
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    };
}

export default connect(mapStateToProps, { deleteStream, fetchStream })(Delete);