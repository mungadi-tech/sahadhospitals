import Reveal from "@/components/Reveal";
import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";

export default function PressRelease() {
  return (
    <>
      <NavbarWithBreadcrums />

      <Reveal className="container rounded-md gap-2 my-12 md:p-4 bg-gradient-to-tr from-info to-tertiary relative flex flex-col items-center justify-center antialiased">
        <iframe
          className="rounded-md"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/59N1l1mcprs?si=9qBy2SC28mGvEETu"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

        <article className="text-white">
          <h1 className="text-xl mb-4">
            💥 HON. JOSHUA CHINEDU OBIKA RECEIVED ON COURTESY, MGT STAFF OF
            SAHAD HOSPITAL ABUJA, LED BY THE DIRECTOR BUSINESS DEVELOPMENT AND
            CORPORATE COMMUNICATIONS, Mr. KELVIN OJONUGWA AKPALA
          </h1>
          <p>
            Yesterday the lawmaker representing the hospitable people of
            AMAC/BWARI Federal Constituency FCT Abuja, Hon. Joshua Chinedu
            Obika; warmly received on courtesy, the MGT Staff of Sahad Hospital
            Abuja led by their Director Business Development and Corporate
            Communications, Mr. Kelvin Ojonugwa Akpala in his National Assembly
            office, yesterday. Hon. Obika seized the opportunity to commend
            Sahad Group for their total commitment to the growth of Abuja in
            employment, retail services, exceptional customer service delivery,
            known wide range of high quality products and significant move and
            commitment to providing comprehensive and accessible healthcare
            services to the local community.
          </p>
          <br />
          <p>
            The Director of Business Development and Corporate Communications of
            Sahad Hospital Mr. Kelvin Ojonugwa Akpala who Siezed the opportunity
            to discuss matters related to the grand opening of their state of
            art ultra modern hospital, interest on government collaboration for
            the betterment of FCT further applauded and commended the
            exceptional leadership, remarkable works and achievements of Hon.
            Obika, His dedication to public services and commitment to improving
            the lives of his constituents.
          </p>
          <br />
          <p>
            Hon. Obika assured them of his total commitment to initiating
            government collaborations with Sahad Group considering their
            positive impacts to his constituents and pledged to work together
            with them in specific areas of common interest for the benefit of
            his constituents.
          </p>
          <br />

          <p>🌍 Obika_Media_Team.</p>
        </article>
      </Reveal>
    </>
  );
}
