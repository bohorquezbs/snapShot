import React from 'react'
import Api from './Api'

export default function Button() {
    return (
        <div class='flex justify-center py-4 flex-wrap'>
            <ul >
                <button class="rounded bg-blue-950 w-24 text-white text-center" onClick={$Api}>Mountain</button>
                <button class="rounded bg-blue-950 w-24 text-white text-center" onClick={$Api}>Beaches</button>
                <button class="rounded bg-blue-950 w-24 text-white text-center" onClick={$Api}>Birds</button>
                <button class="rounded bg-blue-950 w-24 text-white text-center" onClick={$Api}>Food</button>
            </ul>
        </div>
    )
}
