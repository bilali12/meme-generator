import React, { useEffect, useState } from 'react'
import MemesData from '../api/MemesData'

const Meme = () => {
    const [memes, setMemes] = useState([]);
    const [url, setUrl] = useState([]);
    useEffect(() => {
        const fetchMemes = async () => {
            try {
                const memeData = await MemesData.getMemes();
                setMemes(memeData);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchMemes();
    }, []);
    //console.log(memes);

    const imgUrls = memes.map(imgUrl => imgUrl.url);

    function getRandomItem(list) {
        const randomIndex = Math.floor(Math.random() * list.length);
        return list[randomIndex];
    }

    function handleOnclick() {
        setUrl(getRandomItem(imgUrls));
    }


    return (
        <main>
            <div className="form">

                <input type="text" className="form--input" placeholder="Top text" />
                <input type="text" className="form--input" placeholder="Bottom text" />
                <button onClick={handleOnclick} className="btn">Get a new meme image</button>
            </div>
            <div className="meme--img-container">
                <img src={url} className="meme--img" />
            </div>
        </main>
    )
}

export default Meme