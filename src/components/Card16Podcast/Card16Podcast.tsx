import React, { FC } from "react";
import PostCardSaveAction from "components/PostCardSaveAction/PostCardSaveAction";
import { PostDataType } from "data/types";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import musicWave from "images/musicWave.png";
import Link from "components/Link";
import Image from "components/Image";
import ButtonPlayMusicPlayer from "../ButtonPlayMusicPlayer";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import SingleMetaAction2 from "app/(singles)/SingleMetaAction2";


export interface Card16PodcastProps {
  className?: string;
  post: PostDataType;
  ratio?: string;
}

const Card16Podcast: FC<Card16PodcastProps> = ({
  className = "h-full",
  post,
  ratio = "aspect-w-3 xl:aspect-w-4 aspect-h-3",
}) => {
  const { title, href, categories, desc, featuredImage, postType } = post;
  const IS_AUDIO = postType === "audio";

  const renderListenButtonDefault = (state?: "playing") => {
    return (
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-full bg-neutral-50  cursor-pointer`} style={{color:'rgb(201 0 2)'}}
      >
        {state === "playing" ? (
          <PauseIcon className="w-8 h-8" />
        ) : (
          <PlayIcon className="ml-0.5 w-8 h-8" />
        )}
      </div>
    );
  };

  return (
    <div className={`nc-Card16Podcast relative flex flex-col ${className}`}>
      <Link
        href={href}
        className={`block flex-shrink-0 relative w-full rounded-3xl overflow-hidden ${ratio}`}
      >
        <Image
          fill
          alt=""
          sizes="(max-width: 600px) 480px, 800px"
          src={featuredImage}
          className="object-cover"
        />
        <span className="bg-neutral-900 bg-opacity-30"></span>
      </Link>

      {/* ABSOLUTE */}
      <Link href={href} className="absolute inset-0"></Link>
      

      {/* MAIN CONTENT */}
      <div className="w-11/12 transform -mt-32 ">
        <div
          className={`px-5 flex items-center space-x-4 ${
            !IS_AUDIO ? "relative z-[-1]" : ""
          }`}
        >
          <div className={`flex-grow `}>
            <Image src={musicWave} alt="musicWave" />
          </div>
          <ButtonPlayMusicPlayer
            post={post}
            renderDefaultBtn={() => renderListenButtonDefault()}
            renderPlayingBtn={() => renderListenButtonDefault("playing")}
          />
        </div>
        <div className="p-5 mt-5 bg-white dark:bg-neutral-900  dark:shadow-2xl rounded-3xl rounded-tl-none flex flex-col flex-grow " style={{
      boxShadow: 'rgb(201 0 2) 0px 0px, rgb(201 0 2) 0px 0px, rgb(220 118 117) 17px 23px 42px -5px, rgb(202 2 4) 0px 8px 10px -6px'
  }}>
        <span className="">
        Jul 22
      </span>
          <h2 className="nc-card-title block sm:text-lg lg:text-xl font-semibold text-neutral-900 dark:text-neutral-100 " style={{ color: '#c1252f'}}>
            <Link href={href} className="line-clamp-1" title={title}>
              {title}
            </Link>
          </h2>
          <span className="block text-sm text-neutral-500 dark:text-neutral-400 mt-3 mb-5">
            <span className="line-clamp-2">{desc}</span>
          </span>
          <SingleMetaAction2 />
         
          {/* <div className="flex items-end justify-between mt-auto">
            <PostCardLikeAndComment className="relative" />
            <PostCardSaveAction className="relative" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card16Podcast;
