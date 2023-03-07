const Register: React.FC = () => {
  return (
    <div className="form-control w-full max-w-xs m-auto">
      <label className="label">
        <span className="label-text">Username</span>
      </label>

      <input
        type="text"
        placeholder="Username..."
        className="input input-bordered w-full max-w-xs"
      />

      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input
        type="text"
        placeholder="Password..."
        className="input input-bordered w-full max-w-xs"
      />
      <button className="btn btn-outline mt-8 btn-accent">
        Register / Login
      </button>
    </div>
  );
};
export default Register;
