import { signIn } from "next-auth/react"

const Login = () => {
	return (
		<main className="bg-black h-screen text-white flex flex-col text-center">

			<h1 className="text-3xl">Sign in</h1>
			<button onClick={() => signIn('google')} className="bg-red-500 w-fit px-4 py-2 rounded-md">
				Sign in with Google
			</button>
			<button onClick={() => signIn('discord')} className="bg-purple-600 w-fit px-4 py-2 rounded-md">
				Sign in with Discord
			</button>
		</main>
	)
}

export default Login;