import iconCheck from "../img/icon-check.svg";
import { ModalProps } from "../interface";

interface MyModalProps extends ModalProps {
  callback: Function;
}

const ModalProject = (props: MyModalProps) => {
  return (
    <div className="modal-content" id="thankyouContent">
      <img src={iconCheck} alt="checked" />
      <h2>Thanks for your support!</h2>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button
        className="btn-regular--green"
        onClick={() => {
          props.toggleModal(!props.isShown);
          props.callback("project");
        }}
      >
        Got it!
      </button>
    </div>
  );
};

export default ModalProject;
