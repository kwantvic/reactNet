import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({ profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      {/* <div>
                <img src="https://dbijapkm3o6fj.cloudfront.net/resources/20611,1004,1,6,4,0,960,330/-3842-/20161013141806/image-gallery.jpeg" />
            </div> */}
      <div className={style.descriptionBlock}>
        <img src={profile.photos.large} />
        <ProfileStatus
          status={status}
          updateStatus={updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
