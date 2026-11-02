"use client"

import { useState } from "react"

export default function UserMenu({ userName }: { userName: string }) {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>{userName}</button>
            {isOpen && <p>Log Out</p>}
        </div>
    )
}