import React from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  notificationsEnabled: boolean;
  onToggleNotifications: (v: boolean) => void;
  onAccountInfo: () => void;
  onCustomerService: () => void;
  onNotices: () => void;
  onTerms: () => void;
  onLogout: () => void;
};

export default function ProfileSettingsList({
                                       notificationsEnabled,
                                       onToggleNotifications,
                                       onAccountInfo,
                                       onCustomerService,
                                       onNotices,
                                       onTerms,
                                       onLogout,
                                     }: Props) {
  return (
    <View style={styles.container}>
      <_Row icon="person-outline" text="계정정보" onPress={onAccountInfo} />
      <_SwitchRow
        icon="notifications-outline"
        text="알림설정"
        value={notificationsEnabled}
        onValueChange={onToggleNotifications}
      />
      <_Row icon="headset-outline" text="고객센터" onPress={onCustomerService} />
      <_Row icon="document-text-outline" text="공지사항" onPress={onNotices} />
      <_Row icon="information-circle-outline" text="이용약관" onPress={onTerms} />
      <_Row
        icon="log-out-outline"
        text="로그아웃"
        onPress={onLogout}
        disabled
      />
    </View>
  );
}

function _Row({
                icon,
                text,
                onPress,
                disabled,
              }: {
  icon: string;
  text: string;
  onPress: () => void;
  disabled?: boolean;
}) {
  return (
    <TouchableOpacity
      style={[styles.row, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Icon name={icon} size={20} color={disabled ? '#ccc' : '#00C853'} />
      <Text style={[styles.text, disabled && styles.disabledText]}>
        {text}
      </Text>
      {!disabled && (
        <Icon name="chevron-forward" size={20} color="#ccc" />
      )}
    </TouchableOpacity>
  );
}

function _SwitchRow({
                      icon,
                      text,
                      value,
                      onValueChange,
                    }: {
  icon: string;
  text: string;
  value: boolean;
  onValueChange: (v: boolean) => void;
}) {
  return (
    <View style={styles.row}>
      <Icon name={icon} size={20} color="#00C853" />
      <Text style={styles.text}>{text}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ true: '#00C853', false: '#ccc' }}
        thumbColor="#fff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 16 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  text: { flex: 1, marginLeft: 12, fontSize: 14, color: '#333' },
  disabled: { opacity: 0.5 },
  disabledText: { color: '#ccc' },
});
