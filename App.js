import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

function CalculatorApp(){
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [ans, setAnswer] = useState(0);

  const handleAddition = () => {
    let ans = 0;
    ans = num1 + num2;
    setAnswer(ans)
  };

   const handleSubtraction = () => {
    let ans = 0;
    ans = num1 - num2;
    setAnswer(ans)
  };
  
   const handleMultiplication = () => {
    let ans = 0;
    ans = num1 + num2;
    setAnswer(ans)
  };

   const handleDivision = () => {
    let ans = 0;
    ans = num1 + num2;
    setAnswer(ans)
  }; 

  const handleToThePower = () => {
    let ans = 0;
    ans = num1 ^ num2;
    setAnswer(ans)
  }; 

  const handleSquareRoot = () => {
    let ans = 0;
    ans = num1 . num2;
    setAnswer(ans)
  }; 
  return(
    <View style={styles.container}>
      <Text style={styles.heading}> Calculator App </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder=""
          value={num1}
          onChangeText={setNum1}/>
       
      </View>

      <View style={styles.inputContainer}>
      <TextInput
          style={styles.input}
          placeholder=""
          value={num2}
          onChangeText={setNum2}/>
        </View>

        <View style={styles.inputContainer}>
          <TouchableOpacity  // addition button
          style={styles.addButton}
          onPress={handleAddition}>
          <Text style={styles.addButtonText}> + </Text>
        </TouchableOpacity>
       
        <TouchableOpacity  // subtraction button
          style={styles.addButton}
          onPress={handleSubtraction}>
          <Text style={styles.addButtonText}> - </Text>
        </TouchableOpacity>

        <TouchableOpacity  // multiplication button
          style={styles.addButton}
          onPress={handleMultiplication}>
          <Text style={styles.addButtonText}> * </Text>
        </TouchableOpacity>

        <TouchableOpacity  // division button
          style={styles.addButton}
          onPress={handleDivision}>
          <Text style={styles.addButtonText}> / </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.addButton}
          onPress={handleToThePower}>
          <Text style={styles.addButtonText}> ^ </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.addButton}
          onPress={handleSquareRoot}>
          <Text style={styles.addButtonText}> \ </Text>
        </TouchableOpacity>
        </View>

        <View>
        <Text styles={styles.heading}> Answer: {setAnswer}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'space-around',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: '#4CAF50',
    alignItems: 'space-around',
  },
  addButtonText: {
    fontSize: 24,
    color: '#FFF',
  },
});

export default CalculatorApp;