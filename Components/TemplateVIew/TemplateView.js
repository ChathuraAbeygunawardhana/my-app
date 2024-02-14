import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Appbar, ThemeProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './TemplateViewStyles';

const ClearLandIcon = (props) => (
  <MaterialCommunityIcons {...props} name='palm-tree' size={25} color='white' />
);

const PlantationIcon = (props) => (
  <MaterialCommunityIcons {...props} name='leaf' size={25} color='white' />
);

const FenceSetupIcon = (props) => (
  <MaterialCommunityIcons {...props} name='fence' size={25} color='white' />
);

const TypeIcon = (props) => (
  <MaterialCommunityIcons
    {...props}
    name='file-document'
    size={25}
    color='grey'
  />
);
const PerimeterIcon = (props) => (
  <MaterialCommunityIcons
    {...props}
    name='border-none-variant'
    size={25}
    color='grey'
  />
);

const TemplateView = () => {
  return (
    <ThemeProvider>
      <View>
        {/* Appbar */}
        <Appbar.Header style={styles.top_Bar} dark={true} mode='center-aligned'>
          <Appbar.BackAction onPress={() => {}} />
          <Appbar.Content title='Template Name' />
          {/* pencil/ pen icon  */}
          <Appbar.Action icon='pencil' onPress={() => {}} />
        </Appbar.Header>
      </View>
      <View style={styles.low_outer}>
        <View style={styles.imageView}>
          <Image
            source={{ uri: 'https://i.ibb.co/9TQd2Bb/map-image.jpg' }}
            style={styles.imageStyling}
          />
        </View>
        {/* icons_block */}
        <View style={styles.iconBlockStyling}>
          <View style={styles.iconBlockInner}>
            <View style={styles.iconOuter_01}>
              <ClearLandIcon />
            </View>
            <Text>Clear land</Text>
          </View>
          <View style={styles.iconBlockInner}>
            <View style={styles.iconOuter_02}>
              <PlantationIcon />
            </View>
            <Text>Plantation</Text>
          </View>
          <View style={styles.iconBlockInner}>
            <View style={styles.iconOuter_03}>
              <FenceSetupIcon />
            </View>
            <Text>Fence setup</Text>
          </View>
        </View>
        {/* info_block */}
        <View style={styles.infoBlock}>
          <View>
            <Text style={styles.text02Styling}>Land Info</Text>
          </View>
          <View style={styles.blockView}>
            <Text>Icon</Text>
            <View style={styles.textView}>
              <Text style={styles.text01Styling}>Type</Text>
              <Text style={styles.text02Styling}>Flat</Text>
            </View>
          </View>
        </View>
      </View>
    </ThemeProvider>
  );
};

export default TemplateView;
