export const prerender = false;

import type { APIContext, APIRoute } from 'astro';
import {
    deleteUserWhere,
    getUsers,
    updateUserWhere,
    type User,
} from '../../../db/schemas/users'

//read user by id
export const GET: APIRoute = async (context: APIContext): Promise<Response> => {
    const { params } = context;

    const users: User[] = await getUsers('id', params.id);

    if (!users || users.length <= 0) {
        return new Response(JSON.stringify({ message: 'No user matched the requested criteria' }), {
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

//update user by id
export const PATCH: APIRoute = async (context: APIContext): Promise<Response> => {
    const { request, params } = context;

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

        if (!params.id) {
            return new Response(JSON.stringify({ message: 'Error reading params' }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        const newValues: {} = { ...body };
        const result = await updateUserWhere(params.id, newValues);

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

//delete user by id
export const DELETE: APIRoute = async (context: APIContext): Promise<Response> => {
    const { params } = context;

    const users: User[] = await getUsers('id', params.id);

    if (!users || users.length <= 0) {
        return new Response(JSON.stringify({ message: 'No user matched the requested criteria' }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    await deleteUserWhere('id', params.id);

    return new Response(JSON.stringify({ message: 'User has been deleted successfully' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}