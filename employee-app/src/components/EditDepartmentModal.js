import React,{Component} from 'react';
import {Modal ,Button,Row,Col,Form} from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export class EditDepartmentModal extends Component{
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
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                DepartmentID:event.target.DepartmentID.value,
                DepartmentName:event.target.DepartmentName.value
            })
        })
        .then(res=> res.json())
        .then((result)=>{
            // alert(result);
            this.setState({snackbaropen:true,snackbarmsg:result});
        },
        (error)=>{
            // alert("Failed")
            this.setState({snackbaropen:true,snackbarmsg:'failed'});
        })
     }

     render(){
        return(
         <div className="container">

         <Snackbar
             anchorOrigin={{vertical:'center',horizontal:'center'}}
             open={this.state.snackbaropen}
             autoHideDuration={3000}

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
               >

                
                    <Modal.Title id="contained-modal-title-vcenter">
                     Edit Department
                    </Modal.Title>
                   
                
                <Modal.Body>
                   
                       <Row>
                           <Col sm={6}>
                               <Form onSubmit={this.handleSubmit}>

                               <Form.Group controlId="DepartmentID">
                                   <Form.Label>DepartmentID</Form.Label>
                                   <Form.Control
                                   type="text"
                                   name="DepartmentID"
                                   required
                                   disabled
                                   defaultValue={this.props.depid}
                                   placeholder="DepartmentID">

                                   </Form.Control>
                               </Form.Group>



                               <Form.Group controlId="DepartmentName">
                                   <Form.Label>DepartmentName</Form.Label>
                                   <Form.Control
                                   type="text"
                                   name="DepartmentName"
                                   required
                                   defaultValue={this.props.depname}
                                   placeholder="DepartmentName">

                                   </Form.Control>
                               </Form.Group>
                               <Form.Group>
                                   <Button variant="primary" type="submit">
                                   Update Department

                                   </Button>
                               </Form.Group>

                               </Form>
                           </Col>
                       </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                {/* <Button variant="danger" onClick={this.props.onHide}>Close</Button> */}
                </Modal.Footer>
            </Modal>
            </div>
        )
    }
}
