import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://th.bing.com/th/id/OIP.cGlHX_rOmVqh3r3McmBo3wHaHa?pid=ImgDet&rs=1',
          }}/>
          <View style={styles.header_text}>
            <Text style={styles.title}>Goblin: The Lonely and Great God</Text>
            <Text style={styles.textLogo}>É uma produção sul-coreana exibida pela tvN entre 2016 e 2017, estrelada por Gong Yoo e Kim Goeun</Text>
          </View>          
        </View>

        <ScrollView style={styles.scrollView}>
          <View style={styles.section}>
          <Image
          style={styles.img}
          source={{
            uri: 'https://kanto.legiaodosherois.com.br/w1200-q95-k1/wp-content/uploads/2021/11/legiao_U8kEKvP0zuAL.png.webp',
          }}/>
          <Text style={styles.text}>A trama gira em torno de Kim Shin (Gong Yoo), um general que passou três anos fora a mando de seu rei em confronto direto com tropas inimigas e, 
          quando retorna após o triunfo sobre uma delas, é acusado de traição e condenado a morte.</Text>
          <Image
          style={styles.img}
          source={{
            uri: 'https://vignette.wikia.nocookie.net/28945869-e76d-4346-b503-f03273f8de16/scale-to-width-down/1200',
          }}/>
          <Text style={styles.text}>Deus, porém, acaba o salvando da morte e o castigando por ter ceifado tantas vidas ao mesmo tempo: o transforma em um Goblin, 
          criatura sobrenatural incapaz de morrer e com a incumbência de ajudar outras pessoas por toda a eternidade.</Text>
          <Image
          style={styles.img}
          source={{
            uri: 'https://1.bp.blogspot.com/-LYecDs3Mkbo/WMC5VtfGTuI/AAAAAAAAApA/XwJfwD5tF7wC_if-0_F4LW0t2iwjCbcRQCLcB/s1600/09.png',
          }}/>
          <Text style={styles.text}>A única forma de conseguir quebrar esse círculo seria encontrar sua noiva: a única pessoa capaz de arrancar a espada com a qual ele foi executado de seu corpo e,
          assim, libertando-o de seus deveres e da imortalidade para que possa descansar em paz na morte.</Text>
          </View>
          
        </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#C0C0C0',
  },
  scrollView: {
    marginTop:10,
    marginHorizontal: 20,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20,
    padding: 8,

  },
  textLogo: {
    fontSize: 15,
    paddingTop: 0,
    padding: 8,
  },
  tinyLogo: {
    width: 140,
    height: 170,
    marginLeft: 20,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  header_text: {
    width: 200,
    borderColor: '',
  },
  text: {
    fontSize: 18,
    paddingTop: 0,
    padding: 8,
  },
  img: {
    width: 400,
    height: 200,  
  }
});

export default App;