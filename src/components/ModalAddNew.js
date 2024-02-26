import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { postCreateUser } from '../services/UserService'
import { toast } from 'react-toastify';

const ModalEditUser = (props) => {

    const { show, handleClose, handleUpdateTable } = props
    const [name, setName] = useState('')
    const [job, setJob] = useState("")

    const handleSaveUser = async () =>{
        let res = await postCreateUser(name, job)
        if(res && res.id){
            //sucess
            handleClose()
            setName('')
            setJob('')
            toast.success(`A user is created success!`)
            handleUpdateTable({first_name:name, id: res.id})
        }else{
            //error
            toast.success('An error >_<')
        }
    }
    return (

        <>
            <Modal show={show} 
                onHide={handleClose} 
                backdrop="static"
                keyboard={false}
                
                >
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        <form>
                            <div class="mb-3">
                                <label class="form-label">Name</label>
                                <input type="text" class="form-control"  
                                value={name} onChange={(event) => setName(event.target.value)}/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Job</label>
                                <input type="text" class="form-control"  
                                value={job} onChange={(event) => setJob(event.target.value)}/>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSaveUser()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalEditUser