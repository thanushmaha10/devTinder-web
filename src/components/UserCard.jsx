const UserCard = ({ user }) => {
  const { firstName, lastName, age, gender, about, photoUrl } = user;
  console.log(user);

  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img
          className=" p-2 border-base-300 rounded-sm"
          src={photoUrl}
          alt={firstName + " " + lastName + "profile photo"}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {gender && age && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center my-2">
          <button className="btn btn-secondary">Ignore</button>
          <button className="btn btn-primary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
