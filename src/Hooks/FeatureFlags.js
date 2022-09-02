import { useState, useEffect } from 'react'
import flagsmith from 'flagsmith'

export const FeatureFlag = () => {
    const [flags, setFlags] = useState()

    //curl "https://api.flagsmith.com/api/v1/flags/" -H 'X-Environment-Key: UjfeiRndaUxCXQBq8zGt7G'
    useEffect(() => {
        flagsmith.init({
            environmentID: "UjfeiRndaUxCXQBq8zGt7G",
            api: "https://api.flagsmith.com/api/v1/flags/",
            onChange: (oldFlags, params) => { // Occurs whenever flags are changed
                setFlags(flagsmith.getAllFlags())
            }
        });
    }, [])
    return {
        flags
    }
}