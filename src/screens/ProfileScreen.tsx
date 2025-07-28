import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileCard from '../components/profile/ProfileCard';
import ProfileInfoCard from '../components/profile/ProfileInfoCard';
import ProfileSettingsList from '../components/profile/ProfileSettingList.tsx';

export default function MyPageScreen() {
  const [notifEnabled, setNotifEnabled] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader />

      <ScrollView contentContainerStyle={styles.content}>
        <ProfileCard
          name="함수"
          favoriteMarket="천안중앙시장"
          // avatar={require('../assets/images/avatar.png')}
        />

        <ProfileInfoCard visited={6} completed={2} owned={4} />

        <ProfileSettingsList
          notificationsEnabled={notifEnabled}
          onToggleNotifications={setNotifEnabled}
          onAccountInfo={() => {}}
          onCustomerService={() => {}}
          onNotices={() => {}}
          onTerms={() => {}}
          onLogout={() => {}}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fafafa' },
  content: { paddingBottom: 32 },
});
