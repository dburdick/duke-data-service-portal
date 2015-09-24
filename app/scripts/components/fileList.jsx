import React from 'react';
import FileActions from '../actions/folderActions';
import FileStore from '../stores/folderStore';
var mui = require('material-ui'),
    TextField = mui.TextField,
    Dialog = mui.Dialog,
    Checkbox = mui.Checkbox,
    Table = mui.Table;

class FileList extends React.Component {

    constructor() {
        this.state = {
            files: []
        };
    }

    render() {

        var error = '';
        if (this.props.error)
            error = (<h4>{this.props.error}</h4>);
        let files = this.props.files.map((folder) => {
            return (
                <tr key={ folder.id }>
                    <td className="mdl-data-table__cell--non-numeric"><i className="material-icons" style={styles.icon}>description</i>{ folder.name }
                    </td>
                    <td style={styles.tableText}>{ folder.id }</td>
                </tr>
            );
        });
        let loading = this.props.loading ?
            <div className="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div> : '';
        let standardActions = [
            {text: 'Submit'},
            {text: 'Cancel'}
        ];

        return (
            <div className="project-container mdl-color--white mdl-shadow--2dp content mdl-color-text--grey-800">
                <div className="mdl-cell mdl-cell--12-col mdl-color-text--grey-800" style={styles.listTitle}>
                    <div style={styles.addFolder}>
                     
                    </div>
                </div>
                { error }
                { loading }
                <table className="mdl-data-table" style={styles.table}>
                    <thead>
                    <tr>
                        <th className="mdl-data-table__cell--non-numeric" style={styles.tableText}>Name</th>
                        <th style={styles.tableText}>ID</th>
                    </tr>
                    </thead>
                    <tbody>
                    { files }
                    </tbody>
                </table>
            </div>
        );
    }

    handleTouchTap() {
        this.refs.addFolder.show();
    }
}


FileList.contextTypes = {
    muiTheme: React.PropTypes.object
};

var styles = {
    table: {
        width: '90%',
        margin: '0 auto'
    },
    tableText: {
        textAlign: 'left'
    },
    icon: {
        fontSize: 24,
        paddingRight: 5,
        verticalAlign: -5
    },
    addFolder: {
        float: 'right',
        position: 'relative',
        margin: '0px 10px 10px 0px'
    },
    listTitle: {
        margin: 20,
        marginBottom: -2,
        marginTop: -2,
        float: 'left',
        paddingLeft: 20
    },
    dialogStyles: {
        textAlign: 'center'
    },
    textStyles: {
        textAlign: 'left'
    },
    upLoadBox: {
        textAlign: 'center',
        height: 200,
        border: '1px solid grey',
        margin: '0px 20px 20px 20px'
    }
};

FileList.propTypes = {
    loading: React.PropTypes.bool,
    projects: React.PropTypes.array,
    error: React.PropTypes.string,
    is_deleted: React.PropTypes.bool,
};

export default FileList;
