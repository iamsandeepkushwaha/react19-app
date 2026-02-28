// 🧪 Task 1: Form banao using action (React 19)
// 👉 React 19 me form submit ke liye event handler nahi, direct function pass hota hai.

function LoginForm() {

    async function handleLogin(formData) {
        const email = formData.get('email');
        const password = formData.get('password');

        console.log("Email:", email);
        console.log("Password:", password);
    }

    return (
        <>
            <form action={handleLogin}>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default LoginForm;

// 🔑 Samjho

// ❌ onSubmit nahi

// ✅ action={handleLogin}

// ✅ FormData automatic milta hai