import GestureFlipView from 'react-native-gesture-flip-card';

<View style={styles.container}>
  <GestureFlipView width={300} height={500}>
    {renderBack()}
    {renderFront()}
    </GestureFlipView>
</View>

const renderFront = () => {
  return (
    <View style={styles.frontStyle}>
      <Text style={{fontSize: 25, color: '#fff'}}>{'Front'}</Text>
    </View>
  );
};

const renderBack = () => {
  return (
    <View style={styles.backStyle}>
      <Text style={{fontSize: 25, color: '#fff'}}>{'Back'}</Text>
    </View>
  );
};