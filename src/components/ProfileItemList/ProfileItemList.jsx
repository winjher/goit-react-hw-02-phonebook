import profiles from 'Data/profiles.json';
import ProfileItem from 'components/ProfileItem/ProfileItem';
const ProfileItemList = ({profile}) =>{
    return (
   
            <div >
           {profiles.map(profile=>{
                <ProfileItem
                id={profile.id}
                name={profile.name}
                age={profile.age}
                company={profile.company}
                designation={profile.designation}
                image={profile.image}
                contact={profile.contact}
                address={profile.address}
                school={profile.School}
                course={profile.Course}
                workExperience={profile.WorkExperience}
                gender={profile.Gender}
                relationship={profile.Relationship}
                />

               

           })}
            </div>
    );

};

export default ProfileItemList;