import styled from "styled-components";
import { Button, Title2 } from "../components/common/CommonStyles";
import createMessage from "../services/messges";
import { Modal } from "../components/common/modal/Modal";
import { useState } from "react";
import { useEffect } from "react";

// window.addEventListener("click",setMessageStatus(false));
export const Contact = () => {
  const [messageStatus, setMessageStatus] = useState(false);
  const [fields, setFields] = useState({})

  useEffect(() => {
    const handleClick = () => {
      setMessageStatus(false);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let form = Object.fromEntries(new window.FormData(event.target));
    setFields(form)
    const res = createMessage(fields);
    setMessageStatus(res)
    event.target.reset();
  };
  return (
    <Wrrapper>
      <Form onSubmit={handleSubmit}>
        <Title2 style={{ marginBottom: "0px" }}>Get in touch</Title2>
        <Input name="name" type="text" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Email" />
        <TextArea name="message" maxLength="1000" />
        <Button type="submit">Send</Button>
      </Form>
      {messageStatus ? <Modal fields={fields}/> : ""}
    </Wrrapper>
  );
};

const Wrrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  margin: 45px 0px;
  min-height: 420px;
  /* border: solid ; */
`;
const Form = styled.form`
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 16px;
  padding: 30px;
`;

const Input = styled.input`
  border: solid;
  padding: 5px;
  color: white;
  font-size: 16px;
  font-family: "Sono", sans-serif;
  border: none;
  outline: none;
  background-color: black;
  border-bottom: solid 1px rgba(85, 219, 69);
  border-image-slice: 1;
  border-image-source: radial-gradient(
    circle at center,
    rgba(85, 219, 69),
    black
  );
`;

const TextArea = styled.textarea`
  border-radius: 10px;
  min-height: 200px;
  font-weight: 200; /* Add emphasis to the text */
  color: white; /* Choose a divine color */
  background-color: #1f1d1d; /* Set a contrasting background color */
  border: none; /* Remove the default border */
  padding: 10px; /* Add some padding for spacing */
  resize: none; /* Prevent resizing of the textarea */
  outline: none;
  font-family: "Sono", sans-serif;
  font-size: 20px;
  border: solid 1px hsla(100, 70%, 50%, 0.5);
`;
