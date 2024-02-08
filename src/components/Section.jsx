import ProjectContainer from "./ProjectContainer";
import AccordionCertificate from "./AccordionCertificate";

function Section() {
  return (
    <section className="mx-3 row mt-5">
      <AccordionCertificate></AccordionCertificate>
      <ProjectContainer></ProjectContainer>
    </section>
  );
}

export default Section;
