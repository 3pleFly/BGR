import React from 'react'
import Profile from './Profile'



import jsonProfile from './../../Data/Profile.json'
import ProfileWithOutLogoComp from './ProfileWithOutLogo/ProfileWithOutLogo'
const ProfilesComp = () => {
    return (
        <div>

            {
                // Profiles with Logos:
                jsonProfile.Profile.map((profile, key) => {

                    return <div key={key}>
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <Profile
                            profileId={profile.id}
                            image_Profile={profile.image_Profile}
                            imageProfileLogo={profile.imageProfileLogo}
                            en_name={profile.en_name}
                            heb_name={profile.heb_name}
                            typeRule={profile.typeRule}
                            aboutPerson={profile.aboutPerson} />
                    </div>
                })
            }

            {

                // Profiles without Logos:
                jsonProfile.ProfileWithOutLogo.map((profile, key) => {

                    return <div key={key}>
                        <ProfileWithOutLogoComp
                            profileId={profile.id}
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