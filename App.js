import React, { Component } from 'react';
import { View } from 'react-native';
import AppContent from './components/AppContent';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import AppStory from './components/AppStory';

export class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader />
        <View style={{ height: 110 }}>
          <AppStory />
        </View>
        <AppContent />
        <AppFooter />
      </View>
    )
  }
}

export default App
