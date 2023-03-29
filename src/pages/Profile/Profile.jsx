import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import useProfile from "./useProfile";
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
            image={currentUser?.photoURL || defalutPhoto}
          />
          <div className={s.textBlock}>
            <h2>{currentUser?.displayName}</h2>
            <FileUploadBtn 
              variant="p"
              disabled={perc !== null && perc < 100}
              handleFileChange={handleFileChange}
            >
              Edit phot
            </FileUploadBtn>
          </div>
        </div>
      </div>
      <EditProfile />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default Profile;