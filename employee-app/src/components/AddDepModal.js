import React,{Component} from 'react';
import {Modal ,Button,Row,Col,Form} from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
export class AddDepModal extends Component{
     constructor(props){
         super(props);

         this.state={snackbaropen: false,snackbarmsg:''};
        this.handleSubmit=this.handleSubmit.bind(this);

     }

     
    snackbarClose=(event)=>{

      this.setState({snackbaropen:false});
  }

     handleSubmit(event){
      event.preventDefault();
      
      fetch('https://localhost:44387/api/department',
      {
          method:'POST',
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          body:JSON.stringify({
              DepartmentID:null,
              DepartmentName:event.target.DepartmentName.value
          })
      })
      .then(res=> res.json())
      .then((result)=>{
          //  alert(result);
          this.setState({snackbaropen:true,snackbarmsg:result});
      },
      (error)=>{
          //  alert("Failed")
         this.setState({snackbaropen:true,snackbarmsg:'failed'});
      })
   }
     render(){
         return(
           <div className='contaier'>
            <Snackbar
             anchorOrigin={{vertical:'center',horizontal:'center'}}
             open={this.state.snackbaropen}
             autoHideDuration={3000}

             onClose={this.snackbarClose}

             message={<span id="message-id"> {this.state.snackbarmsg}</span>}
             action={[
                 <IconButton  
                 key="close"
                 arial-lable="close"
                 onClick={this.snackbarClose}>
                    x
                 </IconButton>
             ]}
         /> 
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
               Add Department
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                 <Row>
                   <Col sm={6}>
                     <Form onSubmit={this.handleSubmit}>
                       <Form.Group controlId="DepartmentName">
                         <Form.Label>DepartmentName
                           <Form.Control
                             type="txt"
                             name="DepartmentName"
                             required
                             placeholder="DepartmentName">
                           </Form.Control>
                         </Form.Label>
                       </Form.Group>
                       <Form.Group>
                         <Button variant="primary" type="submit">
                           Add Department
                         </Button>
                       </Form.Group>
                     </Form>
                   </Col>
                 </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
          </div>
         )
     }
}