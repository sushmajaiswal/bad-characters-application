import React, { useState, useEffect} from 'react';
import {Table, Alert, Form } from 'react-bootstrap';

import { getAllCharacters, getAllCharactersLength, getPaginatedCharacters, paginatedFilterCharacters, filterCharacters, getCharacterViaName } from '../../services/assets';

import TableRow from './TableRow';
import Pagination  from '../helper/Pagination';

const CharacterTable = ({reload, setReload, searchKeyName}) => {
  const [message, setMessage] = useState("Loading...");
  const [category, setCategory] = useState();
  const [characters, setcharacters] = useState([])
  const [data, setData] = useState({
    count: 0,
    limit: 10,
    offset: 0
  })
  const [page, setPage] = useState(1)

  const categoryHandler = e => {
    setCategory(e.currentTarget.value);
    setPage(1)
  }

  const onPaginationClicked = (paginated) => {
    const offset = 0 + 10*(paginated - 1);
    setPage(paginated);
    setData({
      ...data,
      offset: offset
    });
  }

  useEffect(() => {
    console.log("searchkey: ", searchKeyName);
    getCharacterViaName(searchKeyName, data.limit, data.offset)
    .then((data) => {
      if (!data) {
      console.log(data);
      setError(true);
      } else {
        console.log("length: ", data);
        setcharacters(data);
        if (data.length == 0) {
          setMessage("No data found...")
        }
      }
    })
    .catch((err) => console.log('Error', err)); 
  },[searchKeyName]);
  
  useEffect(() => {
    console.log("page", page, "category", category, "limit: ", data.limit, "  ", data.offset);
    if(category === undefined || category === 'All') { 
     // getAllCharacters()
      getPaginatedCharacters(data.limit, data.offset)
      .then((data) => {
        if (!data) {
        console.log(data);
        setError(true);
        } else {
          setcharacters(data);
          if (data.length == 0) {
            setMessage("No data found...")
          }
          console.log(data);
        }
      }) 
      .catch((err) => console.log('Error', err));
      }
      else {
        paginatedFilterCharacters(category, data.limit, data.offset)
        .then((data) => {
          if (!data) {
            setError(true);
          } else {
            setcharacters(data);
            if (data.length == 0) {
              setMessage("No data found...")
            }
          }
        })
        .catch((err) => console.log('Error', err));
      } 
  },[category, page])

  useEffect(() => {
    console.log(searchKeyName, category);
    if(searchKeyName !== '' || searchKeyName !== undefined || category !== undefined || category !=='All') {
    getAllCharacters(searchKeyName, category)
    .then((data) => {
      if (!data) {
      console.log(data);
      setError(true);
      } else {
        console.log("lengthg: ", data.length);
        setData({
          count: data.length,
          limit: 10,
          offset: 0,
        })
      }
    })
    .catch((err) => console.log('Error', err)); 
  }
  else {
    getAllCharactersLength()
    .then((data) => {
      if (!data) {
      console.log(data);
      setError(true);
      } else {
        console.log("lengthg: ", data.length);
        setData({
          count: data.length,
          limit: 10,
          offset: 0,
        })
      }
    })
    .catch((err) => console.log('Error', err)); 
  }
  },[searchKeyName, category]);

  useEffect(() => {
    getAllCharactersLength()
    .then((data) => {
      if (!data) {
      console.log(data);
      setError(true);
      } else {
        console.log("length: ", data.length);
        setData({
          count: data.length,
          limit: 10,
          offset: 0,
        })
      }
    })
    .catch((err) => console.log('Error', err)); 
  },[]);

  const dropDown = () => {
      return(
        <Form.Group className="menu">
          <Form.Label className="menu-label"> Search By Category</Form.Label>
          <Form.Control as="select" value={category} defaultValue="All"
            onChange={categoryHandler}>
            <option>All</option>
            <option key="Breaking Bad">Breaking Bad</option>
            <option key="Better Call Saul">Better Call Saul</option>
            {/* {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))} */}
          </Form.Control>
        </Form.Group>
      )
  }

  return (
    <div className="my-table">
      {dropDown()}     
      <Table striped bordered responsive>
        <thead>
          <tr style={{color:"white", background:"#627296"}}>
            <th>Preview</th>          
            <th>Name</th>
            <th>Occupation</th>
            <th>DateOfBirth</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        { (characters.length > 0) ? characters.map( (character, index) => {
            return (
              <TableRow character={character} key={ index } reload={reload} setReload={setReload} />
            )
          }) : <tr style={{background:"white"}}><td colSpan="8"><Alert variant="info" > {message} </Alert></td></tr> }
        </tbody>
      </Table>
      {
        data.count > 10 && <Pagination numberOfPages={Math.ceil(data.count/10)} onPaginationClicked={onPaginationClicked}/> 
      }
    
    </div>
   
  );
}

export default CharacterTable;