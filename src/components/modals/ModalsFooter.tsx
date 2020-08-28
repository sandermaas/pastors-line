import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

const ModalsFooter: React.FunctionComponent = () => {
    const [checked, setChecked] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.currentTarget.checked)
    }

    return (
        <Modal.Footer>
            <Form.Check type="checkbox" label="Only even" onChange={handleChange} checked={checked} />
        </Modal.Footer>
    )
}

export default ModalsFooter