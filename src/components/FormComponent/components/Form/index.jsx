import { useState } from "react";
import { formData, formValidators, initialFormCurrentData } from "../../data";
import { Button, Alert } from "react-bootstrap";
import FormGroup from "../FormGroup";
import "./styles.css";

const Form = () => {
    const [formCurrentData, setFormCurrentData] = useState(initialFormCurrentData);
    const [show, setShow] = useState(false);
    const [errorShow, setErrorShow] = useState(false);
    const getErrorsAfterValidation = (value, validators) => {
        const errors = [];
        validators.forEach(validator => {
            const error = validator(value);
            if (error) {
                errors.push(error);
            }
        });
        return errors;
    }

    const getValidationvalues = (name, value) => {
        const validationValues = { value };
        if (name === "confirmPassword")
            validationValues["password"] = formCurrentData.password.value;
        return validationValues;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const validators = formValidators[name];
        const validationValues = getValidationvalues(name, value);

        const error = getErrorsAfterValidation(validationValues, validators);
        setFormCurrentData(prev => {
            return {
                ...prev,
                [name]: {
                    touched: true,
                    error,
                    value
                }
            }
        });
    }

    const handleSubmit = () => {
        const { name, email, phone, password, confirmPassword } = formCurrentData;
        const newForm = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            password: password.value,
            confirmPassword: confirmPassword.value
        }
        const formData = localStorage.getItem("formValue");
        if (!formData)
            localStorage.setItem("formValue", JSON.stringify([]))
        else
            JSON.parse(formData);
                

        if (newForm.name && newForm.password && newForm.confirmPassword && newForm.phone && newForm.email) {
            localStorage.setItem('formValue', JSON.stringify(newForm))
            setShow(true)
            setFormCurrentData(initialFormCurrentData);
        } else {
            setErrorShow(true)
        }
    }

    if (show) {
        return (
            <>
                <Alert variant="secondary" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading> You are registered. </Alert.Heading>
                </Alert>
            </>
        )
    }
    if (errorShow) {
        return (
            <>
                <Alert variant="danger" onClose={() => setErrorShow(false)} dismissible>
                    <Alert.Heading> All fields is required!</Alert.Heading>
                </Alert>
            </>
        )
    }

    return (
        <div className="form">

            {formData.map(data => {
                return (
                    <FormGroup
                        {...data}
                        key={data.id}
                        onChange={handleInputChange}
                        input={formCurrentData[data.name]}
                    />

                )
            })}
            <Button variant="secondary" type="submit" className="form-btn" onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default Form;