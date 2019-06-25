import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class List extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderUserActions(stream) {

        var buttonCode = null;

        if (this.props.isSignedIn && stream.userId === this.props.currentUserId) {
            buttonCode = (<div className="right floated content">
                <Link to={`streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                <Link to={`streams/Delete/${stream.id}`} className="ui button negative">Delete</Link>
            </div>);
        }
        else {
            buttonCode = (<div className="right floated content">
                <i className="large middle aligned icon ban" style={{ color: "#9e1c1c", fontSize: "2.0em" }} />
            </div>);
        }

        return buttonCode;
    }

    renderCreateAction() {
        if (this.props.isSignedIn) {
            return (<div style={{ textAlign: "right" }}>
                <Link to="streams/create" className="ui button primary">Create Stream</Link>
            </div>);
        }
    }

    renderList() {
        if (this.props.streams.length === 0) {
            return <div> Nothing found !! </div>;
        }

        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderUserActions(stream)}
                    <i className="large middle aligned icon ticket" />
                    <div className="content">
                    <Link to={`streams/${stream.id}`} className="header"><strong>{stream.title}</strong></Link>
                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui container">
                <div className="ui celled">
                    <div className="item">
                        <h2><strong>Streams</strong></h2>
                        <div>
                            {this.renderCreateAction()}
                        </div>
                    </div>
                </div>

                <div className="ui celled list">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
}


export default connect(mapStateToProps, { fetchStreams })(List);