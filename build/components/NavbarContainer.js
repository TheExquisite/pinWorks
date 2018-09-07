import * as React from 'react';
import { connect } from 'react-redux';
import { navBarToggle } from "../redux/actions/navBar/navBarActions";
import Navbar from './Navbar';
class NavbarContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<Navbar pinBoxVis={this.props.pinBoxVis} onClick={this.props.onToggleClick}/>);
    }
}
const mapStateToProps = (state) => ({
    pinBoxVis: state.navBar.pinBoxVis
});
const mapDispatchToProps = (dispatch) => ({
    onToggleClick: () => dispatch(navBarToggle())
});
export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
//# sourceMappingURL=NavbarContainer.js.map