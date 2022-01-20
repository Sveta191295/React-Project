export const isRequired = ({value}) => value.length ? undefined : "Field is required";
export const validateName = ({value}) => value.match(/^[a-zA-Z ]{2,30}$/) ? undefined : "Write correct name,please!";
export const validatePhone = ({value}) => value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/) ? undefined : "Write correct phone,please!";
export const validateEmail = ({value}) => value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? undefined : "Write correct email,please!";
export const validatePassword = ({value}) => value.match(/^[A-Za-z]\w{7,14}$/) ? undefined : "Write correct password,please!";
export const validateConfirmPassword = ({ value, password }) => value === password ? undefined : "Wrong Confirmation of password!";

