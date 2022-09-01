import { useState, useEffect } from 'react'
import flagsmith from 'flagsmith'

export const FeatureFlag = () => {
    const [flags, setFlags] = useState()

    useEffect(() => {
        flagsmith.init({
            environmentID: "UjfeiRndaUxCXQBq8zGt7G",
            onChange: () => { // Occurs whenever flags are changed
                setFlags(flagsmith.getAllFlags())
                console.log("flags", flagsmith.getAllFlags())
            }
        });
    }, [])
    return {
        flags
    }
}