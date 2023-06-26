import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function LogicGame () {
    const [userValue, setUserValue] = React.useState("");
    const onChange = (event) => {
        setUserValue(event.target.value);
    };
    const [game, setGame] = React.useState(
        {value: Math.floor(Math.random()*100),
        arrValues: [],
        isEnd: false}
    );
    const handleSubmit = (event) => {
        event.preventDefault();
        setGame(
            {value: game.value,
            arrValues: [...game.arrValues,userValue],
            isEnd: game.value == userValue
            }
        );
    };   
    const newGame = () => {
        setUserValue('')
        setGame(
            {value: Math.floor(Math.random()*100),
            arrValues: [],
            isEnd: false
            }
        );
    }

    return (
        <div>
            <h3>Угадай число от 0 до 100 </h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Число:
                    <input type="number"/>
                </label>
                <input type="submit" value="ОК" onChange={onChange} />
                <LogGame listLog={game} />
                {game.isEnd &&
                    <>
                        <ResultGame step={game.arrValues.length} />
                        <input type="button" value="Новая игра?" onClick={newGame} />
                    </>
                }
            </form>
        </div>
    );
}
function LogGame(props) {
    const number = Number(props.listLog.value);
    const listLog = props.listLog.arrValues.map((val, index) =>
        <p key={index}>{index + 1}.
            Число {val}
            {Number(val) > number ? " больше задуманного." : Number(val) < number ? " меньше задуманного." : ". Угадал!"}
        </p>
    );
    return(
        <div className="log">
            {listLog}
        </div>
    )
};
function ResultGame(props) {
    const n = Number(props.step);
    const result = n < 7 ? "Прекрасная логика, да ты еще и везунчик! " : 
        n > 7 ? " Пока не очень, попробуй еше раз..." :
        "Логика у тебя в крови.";

    return(
        <h3>
            {result}
        </h3>
    )
};

root.render(<LogicGame />)



