




export const prerender = false;

import type { APIContext, APIRoute } from 'astro';
import {
    getAllUsers,
    insertNewUser,
    type NewUser,
    type User,
} from '../../_lib/db/schemas/users';

//create new users
export const POST: APIRoute = async (context: APIContext): Promise<Response> => {

    const { request } = context;

    try {
        const body = await request.json();

        if (!body) {
            return new Response(JSON.stringify({ message: 'Badly Formatted body' }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        const newUser: NewUser = { ...body.entries() };
        const result = await insertNewUser(newUser);

        console.log(result)

        return new Response(JSON.stringify({ payload: result }), {
            status: 201,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(
            JSON.stringify({
                message: 'Error creating user',
                error: (error as Error).message,
            }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }
}

//read all users
export const GET: APIRoute = async (_context: APIContext): Promise<Response> => {
    const users: User[] = await getAllUsers();

    if (!users || users.length <= 0) {
        return new Response(JSON.stringify({ message: 'No users available' }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    return new Response(JSON.stringify({ payload: users }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}