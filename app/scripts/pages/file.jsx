import React from 'react'
import ProjectActions from '../actions/projectActions';
import ProjectStore from '../stores/projectStore';
import FileDetails from '../components/fileComponents/fileDetails.jsx';
import Header from '../components/globalComponents/header.jsx';

class File extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            project: ProjectStore.project
        };
    }

    componentDidMount() {
        let kind = 'files';
        let id = this.props.params.id;
        this.unsubscribe = ProjectStore.listen(state => this.setState(state));
        this._loadFile(id, kind);
    }

    componentDidUpdate(prevProps) {
        let kind = 'files';
        let id = this.props.params.id;
        if(prevProps.params.id !== this.props.params.id) {
            this._loadFile(id, kind);
        }
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    _loadFile(id, kind) {
        ProjectActions.getEntity(id, kind);
    }

    render() {
        return (
            <div>
                <FileDetails {...this.props} {...this.state} />
            </div>
        );
    }
}

export default File;

//<FilePreview {...this.props} {...this.state} />///Todo: These components are for further file viewing to be added
//<FileProvenance {...this.props} {...this.state} />