import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const list = [
  {l: 'а', count: 0, id: 0},
  {l: 'б', count: 0, id: 1},
  {l: 'в', count: 0, id: 2},
  {l: 'г', count: 0, id: 3},
  {l: 'д', count: 0, id: 4},
  {l: 'ж', count: 0, id: 5},
  {l: 'з', count: 1, id: 6},
  {l: 'и', count: 0, id: 7},
  {l: 'й', count: 0, id: 8}
]

function Label () {
  return (
    <div class="comp">
      <h1>Список: </h1>
      <MakeList list={list} />
    </div>
  );
}

function MakeList (props){
  const [s, setList] = React.useState([...props.list]);
  // let listLi = s.map((value) =>
  //   <ListItem l={value.l} count={arr[value.id].count} id={arr[value.id].id}/>
  // );
  // function press() {
  //   let l = arr;
  //   setArr(l);
  // };
  const pressLi = (event) => {
    let l = [...s];
    let n = event.target.id;
    let c = l[Number(n)].count+1;
    l[Number(n)].count = c;
    l.sort(function (a, b) {return a.count-b.count;});
    setList(l);
  }

  return (
    <>
      <ol>
        {/* {listLi} */}
        {s.map((value, index) =>
          <li id={index} onClick={pressLi}>
            {value.l}, click: {value.count}
          </li>
        )}
      </ol>
    </>
  );
}

function ListItem(props) {
  const id = props.id;
  const[c, setLi] = React.useState(props.count)
  const press = () => {
    setLi(c+1)
    //list[id].count = c;
  };

  return(
    <li onClick={press}>
      {props.l}, click: {c}
    </li>
  )
};
// class ListItem extends React.Component {
//   constructor(props){
//     super(props);
//     this.press=this.press.bind(this);
//     this.state={
//       ...this.props
//     };
//   };
//   press(val){
//     let value = val+1
//     this.setState({value});
//   };

//   render(){
//     <li onClick={press(this.props.count)}>
//       {this.state.l}, click: {this.state.count}
//     </li>
//   }
// };

root.render(
  <>
    <Label />
  </>
)






