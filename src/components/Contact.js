import { countries } from "../utils/constants";
const Contact = () => {
  return (
    <div className="bg-sky-200 bg-cover min-h-screen flex flex-col items-center py-8">
      <h1 className="text-3xl mb-5 font-serif">
        Would you like to contact Food Space?
      </h1>
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-md">
        <div className="text-lg font-semibold mb-2">Request a Call</div>
        <div className="text-sm text-gray-600 mb-4">
          Give us some info so the right person can get back to you
        </div>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First name"
              className="flex-1 border rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Last name"
              className="flex-1 border rounded-md p-2"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-md p-2"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border rounded-md p-2"
          />
          <textarea
            className="w-full h-32 border rounded-md p-3 text-base overflow-y-auto align-top"
            placeholder="Message / Issue"
          ></textarea>

          <div>
            <label className="block text-sm mb-1">Country/Region</label>
            <select className="w-full border rounded-md p-2">
              <option value="">Select a country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md py-2"
          >
            CONTACT ME
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
