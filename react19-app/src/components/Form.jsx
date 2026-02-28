import { useActionState } from "react";

function Form() {
  const [state, submitAction, isPending] =
    useActionState(async (prev, formData) => {
      return { message: "Saved!" };
    }, null);

  return (
    <form action={submitAction}>
      <button disabled={isPending}>
        {isPending ? "Saving..." : "Save"}
      </button>
      {state?.message}
    </form>
  );
}

export default Form;

// 👉 No manual loading state 😍