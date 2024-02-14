import React, { useState, useEffect } from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider, Text, Appbar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import SavedTemplatesScreen from './Components/SavedTemplatesScreen/SavedTemplatesScreen';
import TemplateView from './Components/TemplateVIew/TemplateView';

export default function App() {
  return (
    <PaperProvider>
      <TemplateView />
    </PaperProvider>
  );
}
