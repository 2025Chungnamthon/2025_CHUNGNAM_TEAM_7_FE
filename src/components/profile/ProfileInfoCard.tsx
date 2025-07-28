import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  visited: number;
  completed: number;
  owned: number;
};

export default function ProfileInfoCard({ visited, completed, owned }: Props) {
  return (
    <View style={styles.container}>
      <_StatsItem count={visited} label="방문시장" />
      <View style={styles.divider} />
      <_StatsItem count={completed} label="완료투어" />
      <View style={styles.divider} />
      <_StatsItem count={owned} label="보유상품" />
    </View>
  );
}

function _StatsItem({ count, label }: { count: number; label: string }) {
  return (
    <View style={styles.item}>
      <Text style={styles.count}>{count}개</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 12,
  },
  item: { alignItems: 'center', flex: 1 },
  count: { fontSize: 18, fontWeight: '600', color: '#00C853' },
  label: { fontSize: 12, color: '#555', marginTop: 4 },
  divider: {
    width: 1,
    height: '60%',
    backgroundColor: '#eee',
  },
});
