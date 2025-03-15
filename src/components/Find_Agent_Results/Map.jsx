export default function Map() {
  return (
    <div className="max-w-6xl mx-auto flex justify-center my-4 px-4">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.833204269345!2d105.76447217503165!3d21.039297180612234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abcde0b7f0f1%3A0x5f4e9b8d41e3a4f2!2zSG_DoG4gS2nhur9j!5e0!3m2!1svi!2s!4v1643171601347"
        className="rounded-lg w-full h-[300px] sm:h-[400px] max-w-4xl shadow-md"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
