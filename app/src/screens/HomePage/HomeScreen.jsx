import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { fetchAllCategoriesAPIs, fetchAllProductsAPIs } from '../../apis';
import CategorySelector from '../../components/CategorySelector';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import SearchBar from '../../components/SearchBar';

export default function HomeScreen() {
  const [products, setProducts] = React.useState([]);

  const [categories, setCategories] = React.useState([]);

  useEffect(() => {
    fetchAllProductsAPIs()
      .then(res => setProducts(res))

    fetchAllCategoriesAPIs()
      .then(res => {
        setCategories(res)
      })
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header />
      <SearchBar />
      <CategorySelector categories={categories} />
      <ProductList products={products} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
});
