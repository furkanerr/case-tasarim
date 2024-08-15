import Image from "next/image";
import styles from "./style.module.css";
import commentIcon from "../../../../datas/commentIcon.png";
import User from '../../../../datas/User Thumb.png'
export default function CommentCard() {
  return (
    <div className={`card shadow-sm ${styles["card-custom"]}`}>
      <div className={`card-body ${styles["card-body-custom"]}`}>
        <div
          className={`d-flex justify-content-start align-items-center ${styles["card-title-custom"]}`}
        >
          <Image src={commentIcon} width={40} height={40} />
          <h5 className={`mb-0 ${styles["brand-custom"]}`}>Zoomerr</h5>
        </div>
        <p className={`card-text py-3 ${styles["card-text-custom"]}`}>
          Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus,
          viverra turpis lorem. Varius a turpis urna id porttitor.
        </p>
        <div className="d-flex align-items-center mt-4">
          <Image
            src={User}
            alt="Hellen Jummy"
            width={64}
            height={64}
            className={`rounded-circle me-2 ${styles["img-custom"]}`}
          />
          <div>
            <h6 className={`mb-0 ${styles["name-custom"]}`}>Hellen Jummy</h6>
            <small className={styles["role-custom"]}>Team Lead</small>
          </div>
        </div>
      </div>
    </div>
  );
}
