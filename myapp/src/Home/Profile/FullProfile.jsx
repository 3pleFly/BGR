import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import jsonProfile from './../../Data/Profile.json'

const FullProfileComp = () => {
    const { profileId } = useParams();
    const [detailsAboutProfile, setDetailsAboutProfile] = useState({})

    const InitData = () => {
        setDetailsAboutProfile(jsonProfile.Profile[profileId - 1])
    }

    useEffect(() => {
        InitData()
    }, [])

    return (
        <div>
            {
                console.log(detailsAboutProfile)
            }
        </div>
    )
}

export default FullProfileComp