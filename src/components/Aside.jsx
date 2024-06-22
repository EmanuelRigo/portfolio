import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import {
  PiFolderSimpleUserLight,
  PiUserListLight,
  PiWhatsappLogoLight,
  PiEnvelopeLight,
} from "react-icons/pi";
import { GrDocumentUser } from "react-icons/gr";

function Aside() {
  return (
    <div className="myaside mx-4">
      <div className="myaside__container h-100 my-4">
        <a
          target="_blank"
          href="https://github.com/EmanuelRigo"
          className="aside__container"
        >
          <i>
            <BsGithub></BsGithub>
          </i>
          <p className="py-2">GitHub</p>
        </a>
        <a
          target="_black"
          href="https://wa.link/8b7k9a"
          className="aside__container"
        >
          <i>
            <PiWhatsappLogoLight />
          </i>
          <p className="py-2">+54 9 11 6269 9719</p>
        </a>
        <a
          target="blank"
          href="mailto:emanuel.r-dev@outlook.com"
          className="aside__container"
        >
          <i>
            <PiEnvelopeLight></PiEnvelopeLight>
          </i>
          <p className="py-2">emanuel.r-dev@outlook.com</p>
        </a>
        <a href="#projects" className="aside__container">
          <i>
            <PiFolderSimpleUserLight></PiFolderSimpleUserLight>
          </i>
          <p className="py-2">Projects</p>
        </a>
        <a
          href="https://drive.google.com/file/d/1awNM76l6G1OIzGQlevxqA4IwFq_mykb4/view?usp=drive_link"
          target="blank"
          className="aside__container"
        >
          <i>
            <PiUserListLight />
          </i>
          <p className="py-2">C.V.</p>
        </a>
      </div>
    </div>
  );
}

export default Aside;
