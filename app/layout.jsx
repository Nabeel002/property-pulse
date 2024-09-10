import React from 'react'
import '@/assets/styles/globals.css';


export const metadata = {
    title:'Property Pulse',
    keywords:'rental, property, real estate',
    description:"find the perfect rental"
}

const MainLayout = ({children}) => {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>
        </html>
    )
}

export default MainLayout