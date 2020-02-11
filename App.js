import React from "react";
import { View, StyleSheet, ScrollView } from 'react-native';
import { VictoryBar, VictoryChart, VictoryZoomContainer } from "victory-native";

export default class App extends React.Component {
  render() {
    return (
      <ScrollView horizontal={true}>
      <VictoryChart 
      containerComponent={
        <VictoryZoomContainer/>
      }
      maxDomain={{ x: 100 }}
      >
        <VictoryBar
          data={sampleData}
          barWidth={20}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
      </ScrollView>
    )
  }
}

const sampleData = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 14250},
  {quarter: 5, earnings: 19000},
  {quarter: 6, earnings: 13000},
  {quarter: 7, earnings: 16500},
  {quarter: 8, earnings: 14250},
  {quarter: 9, earnings: 19000},
  {quarter: 10, earnings: 13000},
  {quarter: 11, earnings: 16500},
  {quarter: 12, earnings: 14250},
  {quarter: 13, earnings: 19000},
  {quarter: 14, earnings: 13000},
  {quarter: 15, earnings: 16500},
  {quarter: 16, earnings: 14250},
  {quarter: 17, earnings: 19000},
  {quarter: 18, earnings: 13000},
  {quarter: 19, earnings: 16500},
  {quarter: 20, earnings: 14250},
  {quarter: 21, earnings: 19000},
  {quarter: 22, earnings: 13000},
  {quarter: 23, earnings: 16500},
  {quarter: 24, earnings: 14250},
  {quarter: 25, earnings: 17400},
  {quarter: 26, earnings: 19000},
  {quarter: 27, earnings: 11000},
  {quarter: 28, earnings: 15000},
  {quarter: 29, earnings: 12000},
  {quarter: 30, earnings: 18000},
  {quarter: 31, earnings: 19000},
  {quarter: 32, earnings: 13000},
  {quarter: 33, earnings: 16500},
  {quarter: 34, earnings: 14250},
  {quarter: 35, earnings: 17400},
  {quarter: 36, earnings: 19000},
  {quarter: 37, earnings: 11000},
  {quarter: 38, earnings: 15000},
  {quarter: 39, earnings: 12000},
  {quarter: 40, earnings: 18000}
];