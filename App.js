/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';

const App = () => {
  const Calories = [
    {
      name: "Total fat", weight: '1g', amt: "0 %",
      subTitle: [
        { name: "Saturated fat", weight: '1g', amt: "0 %" },
      ]
    },
    {
      name: "Sodium", weight: '1g', amt: "0 %",
      subTitle: []
    },
    {
      name: "Total Corbo", weight: '1g', amt: "0 %",
      subTitle: [
        {
          name: "Total fat", weight: '1g', amt: "0 %",
          subTitle: [
            { name: "Dietary fat", weight: '2.6g', amt: "8 %" },
            { name: "Sugar fat", weight: '12g', amt: "9 %" },
          ]
        },
        {
          name: "Total fat", weight: '1g', amt: "0 %",
          subTitle: [
            { name: "Total fat", weight: '1g', amt: "0 %" },
            { name: "Total fat", weight: '1g', amt: "0 %" },
          ]
        },
      ]
    },
    {
      name: "Protein", weight: '1.1g', amt: "0 %",
      subTitle: [
        { name: "Vitamin D", weight: '0.00mg', amt: "0 %" },
        { name: "Calcium", weight: '5.00mg', amt: "0 %" },
        { name: "Iron", weight: '0.26mg', amt: "1 %" },
        { name: "Potassium", weight: '358mg', amt: "8 %" },

      ]
    },
  ]
  const BULLET = `\u2022`;
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View style={styles.body}>
            <View style={styles.sectionContainer1}>
              <View style={styles.flexDJPB}>
                <View style={styles.flexD}>
                  <View style={styles.round}>
                    <Text style={styles.desh}>-</Text>
                  </View>
                  <View style={styles.leftBorder} />
                  <Text style={styles.mainTitle}>Healthy Facts</Text>
                </View>
              </View>
            </View>
            <View style={styles.sectionContainer}>
              <Image
                style={styles.tinyLogo}
                source={require('./assets/bg.png')}
              />
              <Image
                style={styles.tinyLogo}
                source={require('./assets/bg1.png')}
              />
              <View style={styles.imgB}>
                <Image
                  style={styles.tinyLogo}
                  source={require('./assets/bg2.png')}
                />
              </View>
            </View>
            <View style={styles.nutriFact}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Nutrition Fact</Text>
                <View style={styles.savSize}>
                  <Text style={styles.sectionDescription}>Saving Size</Text>
                  <Text style={styles.sectionDescription}>100g</Text>
                </View>
                <View style={styles.borderB} />
                <Text style={styles.sectionDescription}>Amount per Saving</Text>
                <View style={styles.flexDJ}>
                  <Text style={styles.sectionTitle1}>Calories</Text><Text style={styles.sectionTitle1}>89</Text>
                </View>
                <View style={styles.borderB} />
                <Text style={styles.sectionDescriptionRight}>% Daily value *</Text>
                {Calories.map((item, index) => {
                  return (
                    <>
                      <View style={styles.coloriesArr}>
                        <Text style={styles.sectionDescription}>{item.name}  {item.weight}</Text>
                        <Text style={styles.sectionDescription}>{item.amt}</Text>
                      </View>
                      {item.subTitle.map((itm, i) => {
                        return (
                          <View style={styles.subTitleText}>
                            <Text style={styles.sectionDescription1}>{itm.name}  {itm.weight}</Text>
                            <Text style={styles.sectionDescription1}>{itm.amt}</Text>
                          </View>
                        )
                      })}
                    </>
                  )
                })}
                <View style={styles.deliverContent}>
                  <Text style={styles.sectionLeft}>{BULLET}</Text>
                  <Text style={styles.sectionRight}>
                    Delivering with love and care</Text>
                </View>
                <View style={styles.mB10}>
                  <View style={styles.aboutContent} >
                    <Text style={styles.sectionTitle}>About Demo Group</Text>
                    <Text style={styles.sectionDescription1}>About us. The Demo Group is a full service office furniture dealership. We offer new, used and refurbished office furniture as well as space planning.
              </Text>
                    <Text style={styles.sectionDescription1}>
                      The Demo Group is a full service office furniture dealership.</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  deliverContent: {
    flexDirection: 'row', marginBottom: 30, marginTop: 30, borderTopColor: 'black', borderTopWidth: 1.5, paddingTop: 30
  },
  aboutContent: {
    borderTopColor: 'black', borderTopWidth: 1.5, borderBottomColor: 'black', borderBottomWidth: 1.5, paddingTop: 10, paddingBottom: 30
  },
  mB10: { marginBottom: 30 },
  coloriesArr: {
    flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5, borderTopColor: 'gray', borderTopWidth: 1
  },
  borderB: { borderBottomColor: 'black', borderBottomWidth: 1 },
  nutriFact: { backgroundColor: 'white', elevation: 5, marginHorizontal: 30, borderRadius: 20, marginTop: -20, marginBottom: 20 },
  savSize: { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5 },
  flexDJ: { flexDirection: 'row', justifyContent: 'space-between' },
  flexD: { flexDirection: 'row' },
  flexDJPB: { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5 },
  imgB: { height: 120, backgroundColor: 'skyblue' },
  round: { height: 26, width: 26, borderRadius: 26 / 2, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' },
  desh: { color: 'white', textAlign: 'center', fontSize: 20 },
  leftBorder: { borderLeftColor: 'black', borderLeftWidth: 1, marginLeft: 15 },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 10,
    paddingHorizontal: 24,
  },
  sectionContainer1: {
    marginTop: 20,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    marginBottom: 8,
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  sectionTitle1: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  subTitleText: {
    flexDirection: 'row', justifyContent: 'space-between',
    paddingBottom: 5, borderTopColor: 'gray', borderTopWidth: 1, paddingLeft: 10
  },
  sectionDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  sectionDescription1: {
    fontSize: 14,
    color: 'black',
  },
  sectionDesTop: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  sectionDescriptionRight: {
    fontSize: 15,
    color: 'black',
    textAlign: 'right',
    paddingBottom: 5
  },
  mainTitle: {
    fontSize: 16,
    color: 'black',
    marginLeft: 15
  },
  sectionRight: {
    fontSize: 16,
    fontWeight: '400',
    color: 'green',
    flex: .95
  },
  sectionLeft: {
    flex: .05,
    fontSize: 16,
    paddingBottom: 5,
    color: 'green'
  },
  tinyLogo: {
    width: '100%',
    height: 100,
  },
});

export default App;
