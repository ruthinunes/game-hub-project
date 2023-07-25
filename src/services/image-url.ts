const getCroppedImageUrl = (url: string) => {
  if (!url) return null;

  return url.replace("/media/", "/media/crop/600/400/");
};

export default getCroppedImageUrl;
