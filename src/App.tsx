import { useState, useEffect } from 'react';
import axios from "axios";
import './styles/App.scss';

import Button from './components/button/Button';
import InputLabel from './components/inputLabel/InputLabel';
import MapYa from './components/mapYa/MapYa';

const App = (): JSX.Element => {
    let warning: number = 0;

    const [specialization, setSpecialization] = useState('');
    const [cards, setCards] = useState([]);

    // useEffect(() => {
    //     fetch('http://127.0.0.1:8000/pizdec?date=2023-03-28')
    //         .then(response => console.log(response.json()))
    //         .then(posts => console.log(posts))

    //     try {
    //         const res = fetch('http://[2a00:1370:818a:65f0:d101:c5a7:6308:db38]:8000/docs#/default/getPlace_getPlace_get/pizdec')
    //         // const res = axios.get(`http://[2a00:1370:818a:65f0:d101:c5a7:6308:db38]:8000/docs#/default/getPlace_getPlace_get/pizdec`);
    //         console.log(res);
    //         // setCards(res.data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }, [])

    async function fetchData1() {
        try {
            const lol = await axios.get(`http://127.0.0.1:8000/`);
            // const res = await axios.get(`http://127.0.0.1:8000/pizdec?date=2023-03-28`);
            console.log(lol);
            // setCards(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    async function fetchData2() {
        try {
            // const lol = await axios.get(`http://127.0.0.1:8000/`);
            const res = await axios.get(`http://127.0.0.1:8000/pizdec?date=2023-03-28`);
            console.log(res);
            // setCards(res);
        } catch (err) {
            console.log(err);
        }
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        if (specialization) {
            console.log('Запрос');
            fetchData1();
            fetchData2();
        }
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSpecialization(e.target.value);
    };

    return (
        <>
            <MapYa warning={warning} />
            <form name="form" className="form" onSubmit={handleSubmit} style={{ marginBottom: '10px' }}>
                <InputLabel
                    value={specialization}
                    onChange={handleChange}
                    className='title'
                    placeholder='Поиск'
                    style={{ margin: '10px', width: '1000px' }}
                >
                    Поиск
                </InputLabel>
                <Button style={{ display: 'block', margin: '10px', marginLeft: '30px' }}>Найти</Button>
            </form>
        </>
    )
}

export default App
