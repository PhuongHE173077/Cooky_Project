import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Checkbox } from 'react-native-paper';


export const FilterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [categories, setCategories] = useState<{ [key: string]: boolean }>({ Eggs: true, Noodles: false, Chips: false, FastFood: false });
  const [brands, setBrands] = useState<{ [key: string]: boolean }>({ Cocalo: true, Madi: false, KaziFarmas: false });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      {Object.keys(categories).map(cat => (
        <Checkbox.Item
          key={cat}
          label={cat}
          status={categories[cat] ? 'checked' : 'unchecked'}
          onPress={() => setCategories({ ...categories, [cat]: !categories[cat] })}
        />
      ))}
      <Text style={styles.title}>Brand</Text>
      {Object.keys(brands).map(brand => (
        <Checkbox.Item
          key={brand}
          label={brand}
          status={brands[brand] ? 'checked' : 'unchecked'}
          onPress={() => setBrands({ ...brands, [brand]: !brands[brand] })}
        />
      ))}
      <Button mode="contained" onPress={() => navigation.goBack()} style={styles.button}>Apply Filter</Button>
    </View>
  );
};



const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  searchBar: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 10, borderRadius: 8 },
  input: { flex: 1 },
  item: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  image: { width: 50, height: 50, marginRight: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  button: { marginTop: 20 }
});