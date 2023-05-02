import infos from "../api/infos.jsx";

const ApiSection = () => {
  return (
    <div className="api-section">
      <div className="fetch-api">
        <p>{/* here we will fetch the api from the radio */}</p>
        <ul id="news-list">{infos}</ul>
      </div>
      <div className="the-links">
        <div>First link</div>
        <div>Second link</div>
        <div> Third link</div>
      </div>
    </div>
  );
};

export default ApiSection;
