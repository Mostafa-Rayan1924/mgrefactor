"use client";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import { useMemo } from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const SwiperCard = ({ images }: { images: ReactImageGalleryItem[] }) => {
  // استبدال أيقونة التالي
  const renderRightNav = (
    onClick: React.MouseEventHandler<HTMLElement>,
    disabled: boolean
  ) => (
    <button className="custom-next" onClick={onClick} disabled={disabled}>
      <ArrowRightCircleIcon size={30} />
    </button>
  );

  // استبدال أيقونة السابق
  const renderLeftNav = (
    onClick: React.MouseEventHandler<HTMLElement>,
    disabled: boolean
  ) => (
    <button className="custom-prev" onClick={onClick} disabled={disabled}>
      <ArrowLeftCircleIcon size={30} />
    </button>
  );

  const formattedImages = useMemo(() => {
    return images.map((img: any) => ({
      original: img,
      thumbnail: img,
    }));
  }, [images]);

  return (
    <ImageGallery
      items={formattedImages}
      isRTL={true}
      renderLeftNav={renderLeftNav}
      renderRightNav={renderRightNav}
      //   thumbnailPosition="left"
    />
  );
};

export default SwiperCard;
