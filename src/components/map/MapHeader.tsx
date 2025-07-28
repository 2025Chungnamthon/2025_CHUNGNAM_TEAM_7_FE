import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  title: string;
  searchValue: string;
  onSearch: (text: string) => void;
  onBack: () => void;
};

export default function MapHeader({
                                    title,
                                    searchValue,
                                    onSearch,
                                    onBack,
                                  }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.row}>
        <TouchableOpacity onPress={onBack}>
          <Icon name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.searchBox}>
        <Icon name="search-outline" size={20} color="#aaa" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="시장을 검색해보세요."
          value={searchValue}
          onChangeText={onSearch}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  row: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    margin: 16,
    borderRadius: 20,
    height: 40,
  },
  searchIcon: {
    marginLeft: 8,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 14,
  },
});
