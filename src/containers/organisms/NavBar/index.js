import React, {Component} from 'react';
import {View} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';

class NavBar extends Component {
    render () {
        return (
            <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white', borderWidth: .5, borderColor: '#E8E9ED'}}>
                <NavBarIcon title="Home" img={require('../../../assets/icon/home-active.png')} active={true}/>
                <NavBarIcon title="Orders" img={require('../../../assets/icon/order.png')}/>
                <NavBarIcon title="Help" img={require('../../../assets/icon/help.png')}/>
                <NavBarIcon title="Inbox" img={require('../../../assets/icon/inbox.png')}/>
                <NavBarIcon title="Account" img={require('../../../assets/icon/account.png')}/>
            </View>
        )
    }
}

export default NavBar;