import { useActionState } from "react";

function ContactForm() {
    const [state, action, pending] = useActionState(async (prev, formData) => {
        const email = formData.get("email");

        if (!email) {
            return {error: "Email required"};
        }

        return { success: "Form submitted" };
    },null);

    return (
        <form action={action}>
            <input name="email" placeholder="Email" />

            <button disabled={pending}>
                {pending? "Submitting...": "Submit"}
            </button>

            {state?.error && <p>{state.error}</p>}
            {state?.success  && <p>{state.success }</p>}
        </form>
    )
}

export default ContactForm;