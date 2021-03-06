import React from 'react';
import { RouteHandler, Link } from 'react-router';
import MainStore from '../../stores/mainStore';
import MainActions from '../../actions/mainActions';
import cookie from 'react-cookie';
import NavChildren from './navChildren.jsx';

class LeftMenu extends React.Component {

    constructor(props, context) {
        super(props);
    }

    render() {
            return (
                <span>
                    <div className="panel-overlay"></div>
                    <div className="panel panel-left panel-cover">
                        <div className="content-block">
                            <NavChildren />
                            <p><Link to="home" onTouchTap={this.handleTouchTap}><i className="material-icons"
                                                                                   style={styles.navIcon}>exit_to_app</i>
                                Logout</Link></p>
                            <p className="mdl-color-text--grey-400"><i className="material-icons"
                                                                       style={styles.navIcon}>settings</i>Settings</p>
                            <p className="mdl-color-text--grey-400"><i className="material-icons" style={styles.navIcon}>help</i>Help</p>
                            <p className="mdl-color-text--grey-400">Governance</p>
                            <p className="mdl-color-text--grey-400">Terms &amp; Conditions</p>
                        </div>
                    </div>
                </span>
            );
    }
    handleTouchTap() {
        MainStore.handleLogout()
    }
}


var styles = {
    navIcon: {
        paddingRight: 5,
        verticalAlign: -6
    }
};


export default LeftMenu;

//<p><Link to="home" className="mdl-color-text--grey-400"><i className="material-icons"
//style={styles.navIcon}>settings</i>Settings</Link></p>
//<p><Link to="home" className="mdl-color-text--grey-400"><i className="material-icons" style={styles.navIcon}>help</i>Help</Link></p>
//<p><Link to="home" className="mdl-color-text--grey-400">Governance</Link></p>
//<p><Link to="home" className="mdl-color-text--grey-400">Terms &amp; Conditions</Link></p>