import React, {useState, useEffect} from 'react'

import { Image, Button, Container, Modal, Badge, Form } from "react-bootstrap";

import {getCharactersViaId} from '../services/assets';

import {getQueryParams} from '../lib/global';

const Character = () => {
    const [characters, setCharacters] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        console.log(window.location)
        const char_id = getQueryParams('char_id', window.location.href);

        getCharactersViaId(char_id)
        .then((data) => {
          if (!data) {
          console.log(data);
          setError(true);
          } else {
            console.log("Data: ", data);
            setCharacters(data[0]);
          }
        })
        .catch((err) => console.log('Error', err)); 
    },[]);

    return(
        <Container>
            <div className="row border border-primary rounded-lg mt-3 bg-info">
                <div className="col col-6 mt-2 mb-2">
                    <Image
                    src={characters.img}
                    style={{ width: 320}}
                    rounded
                    alt=""
                    />
                </div>
                <div className="col col-6 ">
                    <div className=" my-data">
                    Name: {characters.name }
                    <br></br>
                    Date of birth: {characters.birthday}
                    <br></br>
                    Occupation: {characters.occupation}
                    <br></br>
                    Status: {characters.status}
                    <br></br>
                    Nickname: {characters.nickname}
                    <br></br>
                    Portrayed Actor: {characters.portrayed}
                    <br></br>
                    Category: {characters.category}
                    </div>
                </div>
                <div><a href="">Back</a></div>
             </div>
                  
        </Container>   
    )
}

export default Character;
