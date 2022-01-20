import { Form } from "react-bootstrap";
import "./styles.css";
const FormGroup = ({ id, name, label, type, onChange, input}) => {
    const { value, error } = input;
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>{name}</Form.Label>
                <Form.Control type={type} placeholder={label} id={id} name={name} onChange={onChange} value={value}/>
                {error && error.length ?
                <span className="span-error">
                    {error[0]}
                </span> : ""
            }
            </Form.Group>
        </Form>
    )
}
export default FormGroup;


