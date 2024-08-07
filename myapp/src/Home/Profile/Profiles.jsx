import React from 'react'
import Profile from './Profile'



import jsonProfile from './../../Data/Profile.json'
const ProfilesComp = () => {
    return (
        <div>
            {jsonProfile.Profile.map((profile, key) => {

                return <div key={key}>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <Profile
                        image_Profile={profile.image_Profile}
                        imageProfileLogo={profile.imageProfileLogo}
                        en_name={profile.en_name}
                        heb_name={profile.heb_name}
                        typeRule={profile.typeRule}
                        aboutPerson={profile.aboutPerson} />
                </div>
            })
            }
        </div>
    )
}

export default ProfilesComp