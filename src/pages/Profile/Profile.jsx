import useProfile from "./useProfile";
import ImageDiv from "../../components/ui/ImageDiv/ImageDiv";
import defalutPhoto from "../../assets/images/profile.png";
import s from "./styles.module.scss";

function Profile() {
  const { 
    error, 
    perc, 
    photoURL, 
    currentUser, 
    handleFileChange 
  } = useProfile();

  return (
    <div className={s.container}>
      <div className={s.top}>
        <div className={s.userInfo}>
          <ImageDiv variant="p-u" image={photoURL || defalutPhoto} />
          <div className={s.textBlock}>
            <h2>{currentUser?.displayName}</h2>
            <input type="file" onChange={(e) => handleFileChange(e.target.files[0])} />
            {/* <FileUploadButton 
              handleFileChange={handleFileChange}
            >
              Edit Photo
            </FileUploadButton> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;