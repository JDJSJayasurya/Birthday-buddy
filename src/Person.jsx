const Person = ({ image, Name, Age }) => {
  return (
    <article className="person">
      <img src={image} alt={Name} className="img"></img>
      <h4>
        {Name} is {Age} years old
      </h4>
    </article>
  );
};

export default Person;
