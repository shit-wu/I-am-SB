import React,{useRef,useState} from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';

const InputAear = () => {

  const [data,setData] = useState('');
  const [result,setResult] = useState(0);
  // const []
  const [visible_result,setVisible_result] = useState(false);

  const changeVisible_result = () =>{
    setVisible_result(visible_result => visible_result=false);
  }

  const zeroClickHandler = () =>{
    setData(data => data.concat('0'));
    changeVisible_result();
    console.log(data);
  }
  const oneClickHandler = () =>{
    setData(data => data.concat('1'));
    changeVisible_result();
    console.log(data);
  }
  const twoClickHandler = () =>{
    setData(data => data.concat('2'));
    changeVisible_result();
    console.log(data);
  }
  const threeClickHandler = () =>{
    setData(data => data.concat('3'));
    changeVisible_result();
    console.log(data);
  }
  const fourClickHandler = () =>{
    setData(data => data.concat('4'));
    changeVisible_result();
    console.log(data);
  }
  const fiveClickHandler = () =>{
    setData(data => data.concat('5'));
    changeVisible_result();
    console.log(data);
  }
  const sixClickHandler = () =>{
    setData(data => data.concat('6'));
    changeVisible_result();
    console.log(data);
  }
  const sevenClickHandler = () =>{
    setData(data => data.concat('7'));
    changeVisible_result();
    console.log(data);
  }
  const eightClickHandler = ()=>{
    setData(data => data.concat('8'));
    changeVisible_result();
    console.log(data);
  }
  const nineClickHandler = () =>{
    setData(data => data.concat('9'));
    changeVisible_result();
    console.log(data);
  }

  const dotClickHandler = () =>{
    setData(data => data.concat('.'));
    changeVisible_result();
    console.log(data);
  }
  const plusClickHandler = () =>{
    setData(data => data.concat('+'));
    changeVisible_result();
    console.log(data);
  }
  const subClickHandler = () =>{
    setData(data => data.concat('-'));
    changeVisible_result();
    console.log(data);
  }
  const mutClickHandler = () =>{
    setData(data => data.concat('*'));
    changeVisible_result();
    console.log(data);
  }
  const divClickHandler = () =>{
    setData(data => data.concat('/'));
    changeVisible_result();
    console.log(data);
  }

  const acClickHandler = () =>{
    setResult(result => '');
    setData(data => '')
  }

  const evalClickHandler = () => {
    let finalResult = data;
    setVisible_result(visible_result => visible_result=true)
    setResult(result => eval(finalResult) + result);
    setData(data => data = "")
  }

  if(visible_result == true){
  return (
    <>
    <View style={styles.container}>
      {/* // 第一列 */}
      <View style={styles.container_column_one}>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.button}>LOCK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.button} onPress={acClickHandler}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.button} onPress={sevenClickHandler}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.button} onPress={eightClickHandler}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.button} onPress={fourClickHandler}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.button} onPress={fiveClickHandler}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.button} onPress={oneClickHandler}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.button} onPress={twoClickHandler}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.zero}>
          <Text style={styles.button} onPress={zeroClickHandler}>0</Text>
        </TouchableOpacity>
      </View>
      {/* 第二列 */}
      <View style={styles.container_column_two}>
        <TouchableOpacity style={styles.item_column_two}>
          <Text style={styles.button} onPress={divClickHandler}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_column_two}>
          <Text style={styles.button} onPress={nineClickHandler}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_column_two}>
          <Text style={styles.button} onPress={sixClickHandler}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_column_two}>
          <Text style={styles.button} onPress={threeClickHandler}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_column_two}>
          <Text style={styles.button} onPress={dotClickHandler}>.</Text>
        </TouchableOpacity>
      </View>
      {/* 第三列 */}
      <View style={styles.container_column_three}>
        <TouchableOpacity style={styles.item_column_two}>
          <Text style={styles.button} onPress={mutClickHandler}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_column_two}>
          <Text style={styles.button} onPress={subClickHandler}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_column_two}>
          <Text style={styles.button} onPress={plusClickHandler}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.equal}>
          <Text style={styles.equal_text} onPress={evalClickHandler}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
      <View style={styles.result_wrap}>
        <Text style={styles.result}>{result}</Text>
      </View>
    </>
  );
  }else{
return (
    <>
    <View style={styles.container}>
      {/* // 第一列 */}
      <View style={styles.container_column_one}>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.button}>LOCK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.button} onPress={acClickHandler}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.button} onPress={sevenClickHandler}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.button} onPress={eightClickHandler}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.button} onPress={fourClickHandler}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.button} onPress={fiveClickHandler}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.button} onPress={oneClickHandler}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.button} onPress={twoClickHandler}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.zero}>
          <Text style={styles.button} onPress={zeroClickHandler}>0</Text>
        </TouchableOpacity>
      </View>
      {/* 第二列 */}
      <View style={styles.container_column_two}>
        <TouchableOpacity style={styles.item_column_two}>
          <Text style={styles.button} onPress={divClickHandler}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_column_two}>
          <Text style={styles.button} onPress={nineClickHandler}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_column_two}>
          <Text style={styles.button} onPress={sixClickHandler}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_column_two}>
          <Text style={styles.button} onPress={threeClickHandler}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_column_two}>
          <Text style={styles.button} onPress={dotClickHandler}>.</Text>
        </TouchableOpacity>
      </View>
      {/* 第三列 */}
      <View style={styles.container_column_three}>
        <TouchableOpacity style={styles.item_column_two}>
          <Text style={styles.button} onPress={mutClickHandler}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_column_two}>
          <Text style={styles.button} onPress={subClickHandler}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_column_two}>
          <Text style={styles.button} onPress={plusClickHandler}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.equal}>
          <Text style={styles.equal_text} onPress={evalClickHandler}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
      <View style={styles.result_wrap}>
        <Text style={styles.result}>{data}</Text>
      </View>
    </>
  )
  }
};

const styles = StyleSheet.create({
  container: {
    height: 398,
    paddingTop: 20,
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  container_column_one: {
    width: '50%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  container_column_two: {
    flexDirection: 'column',
  },
  container_column_three: {
    marginLeft: 10,
    flexDirection: 'column',
  },
  item: {
    width: 81,
    height: 48,
    marginTop: 20,
    borderRadius:5,
    backgroundColor: 'white',
  },
  item_column_two: {
    width: 81,
    height: 48,
    marginTop: 20,
    marginLeft: 10,
    borderRadius:5,
    backgroundColor: 'white',
  },
  zero: {
    width: 185,
    height: 48,
    marginTop: 20,
    borderRadius:5,
    backgroundColor: 'white',
  },
  equal: {
    width: 81,
    height: 120,
    marginTop: 20,
    marginLeft: 10,
    borderRadius:5,
    backgroundColor: 'white',
  },
  equal_text: {
    lineHeight: 120,
    fontSize: 34,
    textAlign: 'center',
  },
  button: {
    lineHeight: 48,
    fontSize: 24,
    textAlign: 'center',
  },
    result_wrap: {
    marginTop: 30,
    backgroundColor: '#FFFFFF',
  },
  result: {
    fontSize: 50,
    textAlign: 'right',
    paddingRight: 5,
  },
});

export default InputAear;
