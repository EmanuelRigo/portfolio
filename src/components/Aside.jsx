import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { PiFolderSimpleUserLight } from "react-icons/pi";

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
            <BsWhatsapp />
          </i>
          <p className="py-2">+54 9 11 6269 9719</p>
        </a>
        <a href="#contact" className="aside__container">
          <i>
            <AiOutlineMail></AiOutlineMail>
          </i>
          <p className="py-2">emanuel-rigo@outlook.com.ar</p>
        </a>
        <a href="#projects" className="aside__container">
          <i>
            <PiFolderSimpleUserLight></PiFolderSimpleUserLight>
          </i>
          <p className="py-2">Projects</p>
        </a>
      </div>
    </div>
  );
}

export default Aside;
