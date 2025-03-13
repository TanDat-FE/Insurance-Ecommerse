function TopicCard({
  title,
  introText,
  sectionTitle,
  sectionContent,
  imageUrl,
}) {
  return (
    <div className="mt-16">
      <div className="text-3xl font-bold mb-5">{title}</div>
      <img
        src={imageUrl}
        className="w-full h-[170px] object-cover rounded-md"
      />
      <p className="text-xs my-5">{introText}</p>
      <div>
        <div className="text-base font-bold">{sectionTitle}</div>
        <p className="text-xs my-3.5">{sectionContent}</p>
      </div>
    </div>
  );
}

export default TopicCard;
