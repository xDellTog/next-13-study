import { User } from "../pages/api/user";

export async function getHello(): Promise<User> {
    const response = await fetch('http://localhost:3000/api/user', {
        cache: 'no-store',
    });

    return await response.json();
}

export default async function Page() {
    const { username } = await getHello();

    return (
        <div>
            <h1>
                {username}
            </h1>
        </div>
    )
}