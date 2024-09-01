import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Card, CardBody, FormGroup, Input, InputGroupAddon, InputGroupText, InputGroup, Container, Row, Col } from 'reactstrap';
import Alert from './Alerts';

const letUsDiscuss = "Let's discuss!";

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [alert, setAlert] = useState<{ color: string; icon: string; message: string; } | null>(null);

  const successAlert = {
    color: 'success',
    icon: 'ni ni-like-2',
    message: 'Your message has been sent successfully!',
  };

  const errorAlert = {
    color: 'danger',
    icon: 'ni ni-bell-55',
    message: 'Oops! Something went wrong. Please try again later.',
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  
    if (emailJsServiceId && emailJsTemplateId && emailJsPublicKey && form.current) {
      emailjs.sendForm(
        emailJsServiceId,
        emailJsTemplateId,
        form.current,
        emailJsPublicKey
      ).then(
        (result) => {
          console.log(result.text);
          setAlert(successAlert);
          form.current.reset(); // Ensure the form resets after successful submission
        },
        (error) => {
          console.log(error.text);
          setAlert(errorAlert);
        }
      );
    } else {
      console.error('Form reference is null or missing emailJS configuration');
      setAlert(errorAlert);
    }
  };
  

  return (
    <section className="section section-shaped py-5">
      <Container>
        <Row>
          <Col lg="6">
            <Card className="bg-gradient-secondary shadow">
              <CardBody className="p-lg-5">
                <h4 className="mb-4">Your project success is my priority.</h4>
                <p className="mt-0">{letUsDiscuss}</p>
                <form ref={form} onSubmit={sendEmail}>
                  {alert && (
                    <Alert
                      color={alert.color}
                      icon={alert.icon}
                      message={alert.message}
                    />
                  )}
                  <FormGroup className="mt-4">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-user-run" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Your name"
                        type="text"
                        name="user_name"
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email address"
                        name="user_email"
                        type="email"
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="mb-4">
                    <Input
                      className="form-control-alternative"
                      cols="80"
                      name="user_message"
                      placeholder="Type a message..."
                      rows="4"
                      type="textarea"
                      required
                    />
                  </FormGroup>
                  <Button
                    block
                    className="btn-round"
                    color="default"
                    size="lg"
                    type="submit"
                  >
                    Send Message
                  </Button>
                </form>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <div className="content-section p-4 rounded">
              <h4>For project discussion and collaboration?</h4>
              <p>
                If you have any project or need more information, feel free to contact me through the form on the left or you can WhatsApp me.
              </p>
              <p>
                <strong>WhatsApp:</strong> +234 803 542 1019
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
