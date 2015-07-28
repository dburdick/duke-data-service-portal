import React from 'react';
import { Link } from 'react-router';
import ProjectListActions from '../actions/projectListActions';

class Header extends React.Component {

    constructor(props, context) {
        super(props);

    }

    render() {
        //let numProjects = this.props.projects.length;
        //console.log(numProjects);
        var Child = this.props.isLoggedIn ? LogoutMenu : LoginMenu;
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        <!-- Title -->
                        <span className="mdl-layout-title">Duke Data Service</span>
                        <!-- Add spacer, to align navigation to the right -->
                        <div className="mdl-layout-spacer"></div>
                        <!-- This should be a separate component -->
                        <SearchBar {...this.props}/>
                        <div className="mdl-layout-spacer"></div>
                        <div className="mdl-layout-spacer"></div>
                        <!--Should be broken into a current user component here-->
                        <i className="material-icons" style={styles.icon}>account_box</i>
                        <Child {...this.props} />
                    </div>
                </header>
                <!-- Side Nav needs to be broken into a different component -->
                <div className="mdl-layout__drawer">
                    <span className="mdl-layout-title">Duke Data Service</span>
                    <nav className="mdl-navigation">
                        <Link to="home" className="mdl-navigation__link"><i className="material-icons" style={styles.navIcon}>add_circle</i>Create New Project</Link>
                        <Link to="home" className="mdl-navigation__link"><i className="material-icons" style={styles.navIcon}>settings</i>Settings</Link>
                        <Link to="home" className="mdl-navigation__link"><i className="material-icons" style={styles.navIcon}>exit_to_app</i>Log Out</Link>
                        <Link to="home" className="mdl-navigation__link"><i className="material-icons" style={styles.navIcon}>help</i>Help</Link>
                        <Link to="home" className="mdl-navigation__link">Governance</Link>
                        <Link to="home" className="mdl-navigation__link">Terms &amp; Conditions</Link>
                    </nav>
                </div>
            </div>
        );
    }

}

var styles = {
    navIcon: {
        paddingRight: 5,
        verticalAlign: -6
    },
    icon: {
        fontSize: 36
    },
    loginButton: {
        color: '#fff'
    },
}

var LoginMenu = React.createClass({

    render: function() {
        return (
            <button className="mdl-button mdl-js-button" style={styles.loginButton}>
                LOGIN
            </button>
        )
    }
});

var LogoutMenu = React.createClass({

    render: function() {
        return (
            <button className="mdl-button mdl-js-button" style={styles.loginButton}>
                LOGOUT
            </button>
        )
    }
});
var SearchBar = React.createClass({
    render: function() {
        return (
            <form>
                <input type="text"
                       onChange={this.props.handleChange}
                       className="searchBar"
                       placeholder="Search" />
            </form>
        )
    }
});
//var SearchBar = React.createClass({
//
//    getInitialState: function(){
//        return { searchString: '' };
//    },
//
//    handleChange: function(e){
//        this.setState({searchString:e.target.value});
//    },
//
//    render: function() {
//        let numProjects = this.props.projects.length;
//        console.log(numProjects);
//        let projects = this.props.projects,
//            searchString = this.state.searchString.trim().toLowerCase();
//
//        if(searchString.length > 0){
//            projects = projects.filter(function(l){
//                return l.name.toLowerCase().match( searchString );
//            });
//        }
//
//        return <div>
//            <form>
//                <input type="text"
//                       value={this.state.searchString}
//                       onChange={this.handleChange}
//                       className="searchBar"
//                       placeholder="Search" />
//            </form>
//        </div>;
//    }
//});


//
//React.renderComponent(
//    <SearchExample items={ libraries } />,
//    document.body
//);


Header.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Header;