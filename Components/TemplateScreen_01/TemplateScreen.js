import * as React from 'react';
import { Text, View } from 'react-native';
import { Appbar, TextInput } from 'react-native-paper';
import { styles } from './TemplateScreenStyles.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomHomeIcon = (props) => (
  <MaterialCommunityIcons {...props} name='home' size={30} color='black' />
);
const CustomAreaIcon = (props) => (
  <MaterialCommunityIcons
    {...props}
    name='map-marker-radius'
    size={30}
    color='black'
  />
);

export function TemplateScreen() {
  const [measureNameText, setMeasureNameText] = React.useState('');
  const [landTypeText, setLandTypeText] = React.useState('');
  return (
    <>
      <Appbar.Header style={styles.top_Bar_Whole}>
        <View style={styles.top_Bar_View}>
          <Text style={styles.top_Text_Styling}>Save</Text>
          <Text style={styles.top_Text_Styling}>Cancel</Text>
        </View>
      </Appbar.Header>
      {/* three inner views */}
      <View style={styles.low_outer}>
        <View style={[styles.inner_View, styles.inner_View_01]}>
          <View style={styles.inner_View_01_inner}>
            <View style={styles.row_01}>
              <Text style={styles.bold_text}>Land Info</Text>
            </View>
            <View style={styles.row_02}>
              {/* <View style={[styles.row_02_col_01]}>
                <View style={styles.perimeter_icon_view}>
                  <CustomHomeIcon />
                </View>
                <View style={styles.perimeter_col_styling}>
                  <Text>Perimeter</Text>
                  <Text style={styles.bold_text}>1.5km</Text>
                </View>
              </View> */}
              <View style={styles.row_02_col_02}>
                <View style={styles.col_02_col_01}>
                  <CustomHomeIcon />
                </View>
                <View style={styles.area_col_styling}>
                  <Text style={styles.area_text_styling}>Perimeter</Text>
                  <Text style={styles.bold_text}> 1.5km</Text>
                </View>
              </View>
              <View style={styles.row_02_col_02}>
                <View style={styles.col_02_col_01}>
                  <CustomAreaIcon />
                </View>
                <View style={styles.area_col_styling}>
                  <Text style={styles.area_text_styling}>Area</Text>
                  <Text style={styles.bold_text}> 100 acres</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.inner_View, styles.inner_view_02]}>
          <View style={styles.inner_view_02_inner}>
            <View style={styles.input_view}>
              <Text style={styles.bold_text}>Measure Name :</Text>
              <TextInput
                style={styles.input_text}
                value={measureNameText}
                placeholder='Measure Name'
                onChangeText={(text) => setMeasureNameText(text)}
              />
            </View>
            <View style={styles.input_view}>
              <Text style={styles.bold_text}>Land Type :</Text>
              <TextInput
                style={styles.input_text}
                value={measureNameText}
                placeholder='Land Type'
                onChangeText={(text) => setMeasureNameText(text)}
                outlineColor='black'
                underlineColor='black'
              />
            </View>
          </View>
        </View>
        <View style={styles.inner_View}>
          <View style={styles.inner_view_03}>
            <Text style={styles.bold_text}>Description:</Text>
            <TextInput
              style={styles.description_input}
              value={measureNameText}
              placeholder='Description'
              onChangeText={(text) => setMeasureNameText(text)}
            />
          </View>
        </View>
      </View>
    </>
  );
}

export default TemplateScreen;
