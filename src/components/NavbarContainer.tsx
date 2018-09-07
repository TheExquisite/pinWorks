import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { navBarToggle } from "../redux/actions/navBar/navBarActions";
import IStoreState from '../redux/store/IStoreState';

import Navbar from './Navbar';

interface StateFromProps {
  pinBoxVis: boolean;
}

interface DispatchFromProps {
  onToggleClick: () => void;
}

interface INavBarContainerProps extends StateFromProps, DispatchFromProps{}

class NavbarContainer extends React.Component<INavBarContainerProps>{

  constructor(props: INavBarContainerProps){
    super(props);
  }

  render(){
    return(
      <Navbar pinBoxVis={this.props.pinBoxVis} onClick={this.props.onToggleClick}/>
    )
  }
}

const mapStateToProps = (state: IStoreState) => (
  {
    pinBoxVis: state.navBar.pinBoxVis
  }
)

const mapDispatchToProps = (dispatch: Dispatch): DispatchFromProps => (
  {
    onToggleClick: () => dispatch(navBarToggle())
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);