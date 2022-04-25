import React, {useState} from 'react';
import {Text, View, Modal, Pressable, Dimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;

import styles from './styles';
import Container from '../container';

const AssetDetails = ({item, modalVisible, setModalVisible}) => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <Container>
        <View style={styles.closeButton}>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text style={styles.closeText}>Close</Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.name}>Name: {item.name}</Text>

          <Text style={styles.price}>
            Price: ${item.metrics?.market_data?.price_usd}
          </Text>
        </View>
        <View>
          <Text style={styles.chart}>Chart</Text>
          <View>
            <Text>Bezier Line Chart</Text>
            {/* <BarChart
              // style={graphStyle}
              data={data}
              width={screenWidth}
              height={220}
              yAxisLabel="$"
              chartConfig={chartConfig}
              verticalLabelRotation={30}
            /> */}
          </View>
        </View>
      </Container>
    </Modal>
  );
};

export default AssetDetails;
