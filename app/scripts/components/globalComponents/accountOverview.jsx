import React from 'react';
import ProjectActions from '../../actions/projectActions';
var mui = require('material-ui');

class AccountOverview extends React.Component {

    constructor() {
    }

    render() {
        let numProjects = this.props.usage ? this.props.usage.project_count : null;
        let numFiles = this.props.usage ? this.props.usage.file_count : null;
        let bytes = this.props.usage ? this.props.usage.storage_bytes : null;

        function bytesToSize(bytes) {
            if (bytes == 0) return '0 Byte';
            var i = Math.floor(Math.log(bytes) / Math.log(1024));
            return ( bytes / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'KB', 'MB', 'GB', 'TB'][i];
        }

        return (
            <div
                className="mdl-grid account-overview mdl-color--white mdl-shadow--2dp content mdl-color-text--grey-800 "
                style={styles.overviewContainer}>
                <div className="mdl-cell mdl-cell--12-col mdl-color-text--grey-800" style={styles.accountOverviewTitle}>
                    <div style={styles.accountOverviewTitle}>
                        <h4>Account Overview</h4>
                    </div>
                </div>
                <div style={styles.cardSquare}
                     className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
                    <h4>
                        {numProjects + ' Projects'}</h4>
                    <i className="material-icons mdl-color-text--grey-700" style={styles.icon}>content_paste</i>
                </div>
                <div style={styles.cardSquare}
                     className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
                    <h4>
                        {numFiles + ' Files' }</h4>
                    <i className="material-icons mdl-color-text--grey-700" style={styles.icon}>description</i>
                </div>
                <div style={styles.cardSquare}
                     className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
                    <h4>
                        {bytesToSize(bytes)}</h4>
                    <i className="material-icons mdl-color-text--grey-700" style={styles.icon}>save</i>
                </div>
            </div>
        );
    }
}

var styles = {
    cardSquare: {
        height: 120,
        display: 'inline-block'
    },
    icon: {
        fontSize: 52,
        verticalAlign: 'center'
    },
    accountOverviewTitle: {
        marginTop: -10,
        marginBottom: -10,
        float: 'left',
        paddingLeft: 8
    },
    overviewContainer: {
        marginTop: 20,
        padding: 20,
        textAlign: 'center'
    }
};

AccountOverview.contextTypes = {
    muiTheme: React.PropTypes.object
};

AccountOverview.propTypes = {
    loading: React.PropTypes.bool,
    account: React.PropTypes.array,
    error: React.PropTypes.string
};


export default AccountOverview;

