// src/components/StoriesSlider.tsx
import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "./StoriesSlider.css";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface Story {
  images: string[];
  title: string;
  instagramUrl: string;
}

interface StoriesSliderProps {
  stories: Story[];
  onStoryClick: (story: Story) => void;
}

const StoriesSlider: React.FC<StoriesSliderProps> = ({
  stories,
  onStoryClick,
}) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
    >
      {stories.map((story, index) => (
        <SwiperSlide key={index} onClick={() => onStoryClick(story)}>
          <div className="circle" style={{ textAlign: "center" }}>
            <img
              src={story.images[0]}
              alt={story.title}
              style={{ borderRadius: "50%", width: "80px", height: "80px" }}
            />
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              style={{ enableBackground: "new -580 439 577.9 194" }}
              xmlSpace="preserve"
            >
              <circle cx={50} cy={50} r={40} />
            </svg>

            <p>{story.title}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StoriesSlider;
