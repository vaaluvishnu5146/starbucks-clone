import { Link, useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import logo from '../../assets/starbuckslogo.webp';
import { loginMiddleware } from "../../utilities/middlewares";

export default function Login() {
  const navigate = useNavigate();

  function handleSignin(e) {
    e.preventDefault();

    // Navigate from login page to home page
    loginMiddleware({ phoneNumber: "9089786756", password: "password123" })
    .then((response) => {
        console.log(response);
        navigate('/');
    })
    .catch((error) => {
        console.log(error)
    })
  }

  return (
    <div className='px-2'>
        <div className='d-flex align-items-center justify-content-center mb-5'>
            <img className='logo' src={logo} alt='starbucks logo' />
        </div>
        <Form className="mb-4">
            <FormGroup>
                <Label for="phoneNumber">
                    Email
                </Label>
                <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    type="phone"
                />
            </FormGroup>
            <FormGroup className='mb-5'>
            <Label for="phoneNumber">
                Password
            </Label>
            <Input
                id="password"
                name="password"
                placeholder="Enter your password"
                type="password"
            />
        </FormGroup>
            <Button className='w-100' color="success" onClick={handleSignin}>
                Signin
            </Button>
        </Form>
        <p className="text-center">Do not have account?<span>&nbsp;&nbsp;<Link to="/signup">Signup</Link></span></p>
    </div>
  )
}
