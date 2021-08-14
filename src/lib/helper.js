import {Row, Col, Alert} from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'

export const loadingMessage = (loading) => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
};

export const successMessage = (success=true, message , setSuccess) => {
  return (
    <Row>
      <Col>
        <Alert show={success} variant="success" onClose={() => setSuccess(false)} dismissible>
          {message}
        </Alert>
      </Col>
    </Row>
  );
};

export const errorMessage = (error=true, message, setError) => {
  return (
      <Row>
        <Col>
          <Alert show={error} variant="danger" onClose={() => setError(false)} dismissible>
            {message}
          </Alert>
        </Col>
      </Row>
  );
};

export const infoMessage = (message, variant) => {
  return (
    <Row>
      <Col>
        <Alert show={true} variant={variant} className="text-center">
          {message}
        </Alert>
      </Col>
    </Row>
  );
};

export const startLoader = () => {
  return (
    <div className="vertical-center">
        <Spinner animation="border" variant="primary" role="status" className="loading-spinner">
          <span className="sr-only">Loading...</span>
        </Spinner>      
    </div>  
  )
}

