import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div
      className="error-page flex justify-center items-center bg-cover bg-center bg-no-repeat h-screen w-screen text-white"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/57/1f/b0/571fb0ccd4cae8b3d969f40a7812bdd1.jpg')",
      }}
    >
      <div className="err flex flex-col justify-center items-center">
        <div className="error-status text-6xl">{err.status}</div>
        <div className="lost text-xl my-4">It looks like you're lost...</div>
        <Link to="/">
          <button className="mt-10 h-10 w-36 rounded-full border bg-black shadow-xl ">
            GO BACK HOME
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Error;
