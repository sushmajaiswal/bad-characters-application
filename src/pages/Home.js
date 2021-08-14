import React, {useState, useEffect} from 'react'

import Base from "../container/helper/Base";
import CharacterTable from '../container/home/CharacterListTable';

const Home = () => {
  const [reload, setReload] = useState(false)
  const [searchKey, setSearchKey] = useState("");

  console.log("keu:", searchKey)
  return (
    <Base reload={reload} setReload={setReload} setSearchKey={setSearchKey} >
        <CharacterTable reload={reload} setReload={setReload} searchKeyName={searchKey} />
    </Base>    
  );
}

export default Home;
