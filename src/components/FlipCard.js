const FlipCard = ({ urllink, vraag, antwoord }) => {
  return (
    <div className="flip_card mx-auto">
      <div className="flip_inner">
        <div className="flip_front">
          <img src={urllink} alt="url" style={{ width: "300px", height: "225px", margin: "auto" }}></img>
          <div style={{ position: "absolute", width: "100%", top: "80px", zIndex: "10" }}>
            <h3 className="mx-auto">{vraag}</h3>
          </div>
        </div>

        <div className="flip_back">
          <div style={{ position: "absolute", width: "100%", top: "50px", zIndex: "10" }}>
            <h4>{vraag}</h4>
            <h3 className="mb-5 py-3 text-danger">{antwoord}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
