import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const list = [
  {voc: 'MIKU', desc: 'Хацуне Мику - японский VOCALOID, была выпущена в августе 2007 года для движка VOCALOID2 и была первым членом Character Vocal Series.'},
  {voc: 'MEIKO', desc: 'Мейко - японский VOCALOID, первоначально была выпущена в ноябре 2004 года для первого движка VOCALOID.'},
  {voc: 'KAITO', desc: 'Кайто - японский VOCALOID, разработанный первоначально он был выпущен в феврале 2006 года для первого движка VOCALOID.'},
]

function Head () {
  return (
    <div class="body">
      <h1>Vocaloids</h1>
      <Pics />
      <MakeList list={list} />
    </div>
  );
}

function Pics (props){
  return (
    <>
      <div>
        <img src="vocs.jpg"/>
      </div>
    </>
  );
}

function MakeList(props){
  const [d, setD] = React.useState({
    id: 0,
    desc: ""
  });
  const [isOpen, setOpen] = React.useState(false);
  const press = (event) => {
    setOpen(!isOpen);
    let n = event.target.id;
    let de = props.list[Number(n)].desc;
    
    setD({
      id: Number(n),
      desc: de
    });
  };

  return(
    <>
      <div class="b">
        <ul type="none" class="body">
          {props.list.map((value, index) => 
          <li id={index} onClick={press}>
            {value.voc}
          </li>)}
        </ul>
        {isOpen &&
          <p>{d.desc}</p>
        }
        {!isOpen &&
          <></>
        }
      </div>
    </>
  )
}

root.render(
  <Head />
)

