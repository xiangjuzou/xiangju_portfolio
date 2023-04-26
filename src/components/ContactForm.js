import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ContactForm = () => {
  const [person, setPerson] = useState(voorNaam, achterNaam, telefoon, email, message);
  const [mailResult, setMailresult] = useState("");

  setData((currentValue) => ({
    ...currentValue,
    [e.target.name]: e.target.value,
  }));

  const ue = (text) => encodeURIComponent(text);

  const onSubmit = (e) => {
    e.preventDefault();
    let data = `voornaam=${ue(voorNaam)}&achternaam=${ue(achterNaam)}&telefoon=${ue(telefoon)}&email=${ue(email)}&message=${ue(message)}`;

    fetch("/sendmail.php", {
      method: "POST",
      body: data,
      headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
    })
      .then((response) => response.text())
      .then(() => setMailresult("Bericht is verstuurd, ik neem spoedig contact met je op!"))
      .catch((err) => {
        setMailresult("Bericht niet verstuurd, helaas! Stuur een email of bel mij even.");
      });
  };

  return (
    <>
      <div className="bg-light text-center mt-5">
        {mailResult === "" && (
          <form onSubmit={onSubmit} className="p-4">
            <input name="voornaam" className="m-2 p-2" type="text" placeholder="Voornaam" value={voorNaam} onChange={change} style={{ display: block }} />
            <input name="achterNaam" className="m-2 p-2" type="text" placeholder="Achternaam" value={achterNaam} onChange={change} style={{ display: block }} />
            <input name="telefoon" className="m-2 p-2" type="number" placeholder="Telefoon" value={telefoon} onChange={change} style={{ display: block }} />
            <input name="email" className="m-2 p-2" type="email" placeholder="E-mail" value={email} onChange={change} style={{ display: block }} />
            <textarea name="message" rows="5" className="m-2 p-2" placeholder="Bericht" value={message} onChange={change} style={{ display: block }} />

            <Button className="m-3 py-2 px-3 form_button text-dark" type="submit" variant="outline-danger">
              Verstuur
            </Button>
          </form>
        )}
        {mailResult !== "" && (
          <h6 id="mailresult" className="p-5">
            {mailResult}
          </h6>
        )}
      </div>
    </>
  );
};
export default ContactForm;
