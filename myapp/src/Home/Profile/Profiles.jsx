import React from 'react'
import Profile from './Profile'
import ProfileWithOutLogoComp from './ProfileWithOutLogo/ProfileWithOutLogo'



import jsonProfile from './../../Data/Profile.json'
const ProfilesComp = () => {
    return (
        <div>

            {
                // Profiles with Logos:
                jsonProfile.Profile.map((profile, key) => {

                    return <div key={key}>
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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
            <br /><br /><br /><br /><br /><br /><br />
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
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                    </div>
                })
            }

        </div>
    )
}

export default ProfilesComp