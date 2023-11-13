"use client";

import {createClient} from 'contentful';

const client = createClient({
    space: process.env.VITE_CONTENTFUL_SPACE!,
    accessToken: process.env.VITE_CONTENTFUL_ACESS_TOKEN!,
})

export default client;