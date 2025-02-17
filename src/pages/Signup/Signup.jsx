import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import logo from '../../assets/starbuckslogo.webp';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className='px-2'>
        <div className='d-flex align-items-center justify-content-center mb-5'>
            <img className='logo' src={logo} alt='starbucks logo' />
        </div>
        <Form className='mb-4'>
              <FormGroup>
                  <Label for="email">
                      Email
                  </Label>
                  <Input
                      id="email"
                      name="email"
                      placeholder="Enter your Email"
                      type="email"
                  />
            </FormGroup>
            <FormGroup>
                <Label for="phoneNumber">
                    Phone Number
                </Label>
                <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    type="phone"
                />
            </FormGroup>
            <FormGroup>
              <Label for="password">
                  Password
              </Label>
              <Input
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
              />
        </FormGroup>
        <FormGroup className='mb-5'>
              <Label for="confirmPassword">
                  Confirm Password
              </Label>
              <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Enter your password"
                  type="password"
              />
        </FormGroup>
            <Button className='w-100' color="success">
                Create Account
            </Button>
        </Form>
        <p className="text-center">Already have an account?<span>&nbsp;&nbsp;<Link to="/login">Login</Link></span></p>
    </div>
  )
}
