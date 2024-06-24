import React, { useEffect, useState } from "react";
import Card16Podcast from "components/Card16Podcast/Card16Podcast";
import Heading from "components/Heading/Heading";
import { DEMO_POSTS_AUDIO } from "data/posts";
import { PostDataType } from "data/types";

const SingleContentDemo: React.FC = () => {
  const [allPodcast, setAllPodcast] = useState<PostDataType[]>([]);
  const [filterPodcast, setFilterPodcast] = useState<PostDataType[]>([]);

  const getAllPodcast = async () => {
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
        console.log("latestPodcast-------", responseData.data[0]);
        console.log("getAllPodcast-------", DEMO_POSTS_AUDIO[10]);
        setAllPodcast(responseData.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllPodcast();
  }, [])

  useEffect(() => {
    if (allPodcast.length > 0) {
      const temp = allPodcast.map((data:any) => {
        const obj: PostDataType = {
          ...data, // Spread all existing properties
          audioUrl: data.music_url,
          title: data.name,
          desc: data.description,
          categories: data.categories || [], // Provide defaults if necessary
          featuredImage: data.image_url || '',
          like: data.like || 0,
          bookmark: data.bookmark || false,
          view: data.view || 0,
        };
        return obj;
      });
      setFilterPodcast(temp);
    }
  }, [allPodcast]);

  return (
    <>
      <div className="container relative">
        <div className="py-16">
          <Heading>Latest audios</Heading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filterPodcast.map((i, index) => {
              // console.log('podcast',i)
             return <Card16Podcast post={i} key={index} />
})}
            {/* <Card16Podcast post={DEMO_POSTS_AUDIO[10]} />
            <Card16Podcast post={DEMO_POSTS_AUDIO[11]} />
            <Card16Podcast post={DEMO_POSTS_AUDIO[12]} />

            <Card16Podcast post={DEMO_POSTS_AUDIO[10]} />
            <Card16Podcast post={DEMO_POSTS_AUDIO[11]} />
            <Card16Podcast post={DEMO_POSTS_AUDIO[12]} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleContentDemo;
