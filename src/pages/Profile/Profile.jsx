import useProfile from "./useProfile";
import Toast from '../../components/ui/Toast/Toast';
import defalutPhoto from "../../assets/images/profile.png";
import ImageDiv from "../../components/ui/ImageDiv/ImageDiv";
import FileUploadBtn from '../../components/ui/FileUploadBtn/FileUploadBtn';
import EditProfile from './EditProfile';
import s from "./styles.module.scss";

function Profile() {
  const { perc, currentUser, handleFileChange } = useProfile();

  return (
    <div className={s.container}>
      <div className={s.top}>
        <div className={s.userInfo}>
          <ImageDiv
            variant="p-u"
            image={currentUser?.photoURL}
            defaultImage={defalutPhoto}
          />
          <div className={s.textBlock}>
            <h2>{currentUser?.displayName}</h2>
            <FileUploadBtn 
              variant="p"
              disabled={perc !== null && perc < 100}
              handleFileChange={handleFileChange}
            >
              Edit photo
            </FileUploadBtn>
          </div>
        </div>
      </div>
      <EditProfile />
      <Toast />
    </div>
  );
}

export default Profile;