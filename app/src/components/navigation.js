import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createDrawerNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import ItemList from './screens/ItemList';
import Item from './screens/Item';

import TabA from './screens/TabA';
import TabB from './screens/TabB';
import TabC from './screens/TabC';

import Plain from './screens/Plain';

export const JunhoStack = createStackNavigator({
    ItemList: { screen: ItemList },
    Item: { screen: Item }
}, {
    initialRouteName: 'ItemList'
});

export const JunhoTabs = createBottomTabNavigator({
    TabA: {screen: TabA },
    TabB: {screen: TabB },
    TabC: {screen: JunhoStack }
}, {
    order: ['TabA', 'TabB', 'TabC'],
    animationEnabled: true
});

export const JunhoDrawer = createDrawerNavigator({
    Stack: {screen: JunhoStack },
    Tabs: {screen: JunhoTabs},
    Plain: {screen: Plain}
});