import React from 'react';
import {ScrollView, View} from 'react-native';
import SearcFeature from './src/components/molecules/SearchFeature';
import GoNews from './src/components/molecules/GoNews';
import GoInfo from './src/components/molecules/GoInfo';
import GoBanner from './src/components/molecules/GoBanner';
import ScrollableProduct from './src/containers/organisms/ScrollableProduct';
import NavBar from './src/containers/organisms/NavBar';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';
import HomeGoPay from './src/containers/organisms/HomeGoPay';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        {/* Search bar */}
        <SearcFeature />
        {/* Gopay */}
        <HomeGoPay />
        {/* Main Feature */}
        <HomeMainFeature />
        {/* Batas */}
        <View style={{height: 17, backgroundColor: '#F2F2F4', marginTop: 20}}></View>
        {/* News Section */}
        <GoNews />
        {/* Internal Information Section */}
        <GoInfo />
        {/* Gofood Banner Section */}
        <GoBanner />
        {/* Nearby Go-food */}
        <ScrollableProduct />
      </ScrollView>
      {/* Navigation */}
      <NavBar />
    </View>
  );
};

export default App;