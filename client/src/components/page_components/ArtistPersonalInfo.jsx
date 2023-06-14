const PersonalInfo = ({ city, country, genre }) => {
  return (
    <div>
      <p>
        {city}, {country}
      </p>
      <p>{genre}</p>
    </div>
  );
};

export default PersonalInfo;
