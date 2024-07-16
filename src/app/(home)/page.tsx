import React, { useState, useEffect } from "react";
import Badge from "components/Badge/Badge";
import iconPlaying from "images/icon-playing.gif";
import featuredImageDemo from "images/podcast.jpg";
import Image from "components/Image";
import ButtonPlayMusicPlayer from "components/ButtonPlayMusicPlayer";
import SingleTitle from "app/(singles)/SingleTitle";
import SingleMetaAction2 from "app/(singles)/SingleMetaAction2";
import Layout from "../(home)/layout";
// import { PostDataType } from "../types";
// import { DEMO_POSTS_AUDIO } from "data/posts";
 
type Podcast = {
  created_at: string;
  description: string;
  id: number;
  image: string;
  image_url: string;
  music: string;
  music_url: string;
  name: string;
  updated_at: string;
};
 
const PageSingleAudio: React.FC = () => {
  const [latest_pod, setLatest_pod] = useState<Podcast | null>(null);
 
  const getLatestPodcast = async () => {
    try {
      const response = await fetch('http://panditapp.mandirparikrama.com/api/podcasts', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const responseData = await response.json();
      if (responseData.status === 200) {
        setLatest_pod(responseData.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };
 
  useEffect(() => {
    getLatestPodcast();
  }, []);
 
  const renderIcon = (playing: boolean) => {
    if (playing) {
      return <Image className="w-7" src={iconPlaying} alt="" />;
    }
    return (
      <svg className="w-11 h-11" fill="currentColor" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M18.25 12L5.75 5.75V18.25L18.25 12Z"
        ></path>
      </svg>
    );
  };
 
  const renderButtonPlay = (playing: boolean) => {
    return (
      <div
        className={`aspect-w-1 aspect-h-1 rounded-full overflow-hidden z-10 shadow-2xl group cursor-pointer`}
      >
        <Image
          className={`w-full h-full object-cover transition-transform z-0 nc-animation-spin rounded-full ${playing ? "playing" : ""
            }`}
          src={latest_pod?.image_url || featuredImageDemo}
          alt="audio"
        />
        <div className="bg-neutral-900 bg-blend-multiply bg-opacity-75 rounded-full"></div>
        <div className="flex items-center justify-center">
          <div className="text-white bg-black bg-blend-multiply bg-opacity-50 w-20 h-20 border-2 border-neutral-300 rounded-full flex items-center justify-center ">
            {renderIcon(playing)}
          </div>
        </div>
      </div>
    );
  };
 
  return (
    <Layout>
        <div className={`relative pt-8 lg:pt-16`} style={{ backgroundColor: '#bc1823'}}>
        {/* Overlay */}
        <div className=" absolute top-0 inset-x-0 h-60 w-full"  style={{ color: '#e9e9e9',backgroundColor: '#bc1823'}}></div>

        <header className="relative container">
          <div className="dark:bg-neutral-900 shadow-2xl px-5 py-7 md:p-11 rounded-2xl md:rounded-[40px] flex flex-col sm:flex-row items-center justify-center space-y-10 sm:space-y-0 sm:space-x-11" style={{
            backgroundColor: '#fff', color: '#fff'
          }}>
            <div className="w-1/2 sm:w-1/4 flex-shrink-0">
              {latest_pod && (
                <ButtonPlayMusicPlayer
                  renderChildren={renderButtonPlay}
                  post={{
                    audioUrl: latest_pod?.music_url,
                    title: latest_pod?.name,
                    desc: latest_pod?.description,
                    featuredImage: latest_pod?.image_url,
                  }}
                />
              )}
            </div>
            <div className="flex flex-col space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 text-neutral-900">
                <span className="text-neutral-500 dark:text-neutral-400">
                  {latest_pod && new Date(latest_pod.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
              </div>
              <SingleTitle title={latest_pod?.name || "Loading..."} />
              <span className="hidden lg:block text-lg "  style={{ color: '#000'}}>{latest_pod?.description}</span>
              <SingleMetaAction2 />
            </div>
            <div className="" style={{ width: '1000px' }}>
              <Image src={latest_pod?.image_url || featuredImageDemo} className="" alt="" style={{ height: '323px', borderRadius: '1.5rem' }} />
            </div>
          </div>
        </header>
      </div>
    </Layout>
  );
};
 
export default PageSingleAudio;