import React, { useEffect, useState } from "react";

import { Image, Button, Container, Modal, Badge, Form } from "react-bootstrap";

import {PLACE_HOLDER_IMAGE} from "../../lib/util";

const TableRow = ({ character, reload, setReload }) => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showModal = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{character.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            src={character.img}
            style={{ width: 320, height: 400 }}
            rounded
            alt=""
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  
  return (
    <tr>
      <td>
        <Image
          src={character.img ? character.img : PLACE_HOLDER_IMAGE}
          style={{ height: 100, width: 160}}
          rounded
          alt=""
          onClick={handleShow}
        />
      </td>
      <td className="align-middle"><a href="#" onClick={() => window.location.href=`/character?char_id=${character.char_id}`}> {character.name} </a></td>
      <td className="align-middle">{character.occupation}</td>
      <td className="align-middle">{character.birthday}</td>
      <td className="align-middle">{character.status}</td>
      {/* <td className="align-middle">{orderButton}</td> */}
      
      {showModal()}
    </tr>
  );
};

export default TableRow;
