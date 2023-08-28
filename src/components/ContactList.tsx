const ContactList = ({ apiData }) => {
  return (
    <div>
      {apiData.map((data) => {
        return (
          <div key={data.id}>
            <h3>{data.address.street}</h3>
            <h4>{data.name}</h4>
            <h5>{data.email}</h5>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
