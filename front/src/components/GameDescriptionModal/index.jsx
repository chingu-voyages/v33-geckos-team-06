import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import { Modal, 
         Button } from 'react-bootstrap';
import { GlobalContext } from '../../contexts/GlobalContext';

const GameDescriptionModal = (details) => {

    const [context, setContext] = useContext(GlobalContext);

    const handleClose = () => {
        setContext( (prevContext) => {
            return {
                ...prevContext, 
                gameDescriptionModal: {
                    show: false
                }
            }
        });
    }

    return (
        <Modal show={context.gameDescriptionModal.show}  onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{context?.gameDescriptionModal?.game}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                {
                    context.gameDescriptionModal?.images?.map( (i) => {
                        return <img className="game-preview" src={i} />
                    })
                }
            </div>
            {context?.gameDescriptionModal?.author} <br /><br />
            Platform(s): {context?.gameDescriptionModal?.platform} <br /><br />
            {context?.gameDescriptionModal?.description}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to={context?.gameDescriptionModal?.download_link ?? ''} target="_blank" disabled>
            <Button variant="primary" onClick={handleClose} disabled={context?.gameDescriptionModal?.download_link ?? true}>
                Download
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    );
}

export default withRouter(GameDescriptionModal);