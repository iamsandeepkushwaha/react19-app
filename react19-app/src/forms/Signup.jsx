import { useActionState } from "react";
import { signupAction } from "./signupAction";

function Signup() {

  const [state, formAction, pending] = useActionState(signupAction, null);

  return (
    <form action={formAction}>

      <h2>Signup</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
      />

      <button disabled={pending}>
        {pending ? "Submitting..." : "Signup"}
      </button>

      {state?.error && <p style={{color:"red"}}>{state.error}</p>}
      {state?.success && <p style={{color:"green"}}>{state.success}</p>}

    </form>
  );
}

export default Signup;