import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter"

export const meta = () => ([
    { title: 'Resumind | Auth' },
    { name: 'description', content: 'Log into your account' },
])

const Auth = () => {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.isAuthenticated) navigate(next);
    }, [auth.isAuthenticated, next])
    function signOut(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        event.preventDefault();
        auth.signOut();
    }

    function signIn(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        event.preventDefault();
        auth.signIn && auth.signIn();
    }

      return (
    <main className="bg-[url('/public/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center">
        <div className="gradient-border shadow-lg">
            <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                <div className="flex flex-col item-center gap-2 text-center">
                    <h1>Welcome</h1>
                    <h2>Log in to countinue your job journey</h2>
                </div>
         <div>
                        {isLoading ? (
                            <button className="auth-button animate-pulse">
                                <p>Signing you in</p>
                            </button>
                        ) : (
                            <>
                                {auth.isAuthenticated ? (
                                    <button className="auth-button" onClick={signOut}>
                                        <p>Log Out</p>
                                    </button>
                                ) : (
                                    <button className="auth-button" onClick={signIn}>
                                        <p>Log In</p>
                                    </button>
                                )}
                            </>
                        )}
                    </div>
            </section>
            </div>
    </main>
  )
}

export default Auth