import React, {useState} from 'react';
import {Text, View, Modal, Pressable, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

import styles from './styles';
import Container from '../container';

const AssetDetails = ({item, modalVisible, setModalVisible}) => {
  const data = {
    labels: [
      'Volume',
      'NVT',
      'Sum of Fees',
      'Value',
      'Fee',
      'Active Addresses',
      'Count of TX',
      'count_of_payments',
      'Issuance',
      'Difficulty',
      'Kilobytes',
      'Block count',
    ],
    datasets: [
      {
        data: [
          item.metrics?.blockchain_stats_24_hours?.transaction_volume,
          item.metrics?.blockchain_stats_24_hours?.nvt,
          item.metrics?.blockchain_stats_24_hours?.sum_of_fees,
          item.metrics?.blockchain_stats_24_hours?.median_tx_fee,
          item.metrics?.blockchain_stats_24_hours?.count_of_active_addresses,
          item.metrics?.blockchain_stats_24_hours?.count_of_tx,
          item.metrics?.blockchain_stats_24_hours?.count_of_payments,
          item.metrics?.blockchain_stats_24_hours?.new_issuance,
          item.metrics?.blockchain_stats_24_hours?.average_difficulty,
          item.metrics?.blockchain_stats_24_hours?.kilobytes_added,
          item.metrics?.blockchain_stats_24_hours?.count_of_blocks_added,
        ],
      },
    ],
  };

  return (
    <Modal
      animationType="fade"
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
            <LineChart
              data={{
                labels: [
                  'Volume',
                  'NVT',
                  'Sum of Fees',
                  'Add...',
                  'TX',
                  'Kilobytes',
                ],
                datasets: [
                  {
                    data: [
                      Math.random(
                        item.metrics?.blockchain_stats_24_hours
                          ?.transaction_volume,
                      ),
                      Math.random(item.metrics?.blockchain_stats_24_hours?.nvt),
                      Math.random(
                        item.metrics?.blockchain_stats_24_hours?.sum_of_fees,
                      ),
                      Math.random(
                        item.metrics?.blockchain_stats_24_hours
                          ?.count_of_active_addresses,
                      ),
                      Math.random(
                        item.metrics?.blockchain_stats_24_hours?.count_of_tx,
                      ),
                      Math.random(
                        item.metrics?.blockchain_stats_24_hours
                          ?.kilobytes_added,
                      ),
                    ],
                  },
                ],
              }}
              width={Dimensions.get('window').width} // from react-native
              height={500}
              yAxisLabel="$"
              // yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgrandomColor: '#e26a00',
                backgrandomGradientFrom: '#fb8c00',
                backgrandomGradientTo: '#ffa726',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                  // marginRight: 20,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                marginRight: 20,
                borderRadius: 16,
              }}
            />
          </View>
        </View>
      </Container>
    </Modal>
  );
};

export default AssetDetails;
