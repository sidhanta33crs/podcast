import Image from "components/Image";
import React from "react";
import Card16Podcast from "components/Card16Podcast/Card16Podcast";
import Card15Podcast from "components/Card15Podcast/Card15Podcast";
import Heading from "components/Heading/Heading";
import { DEMO_POSTS, DEMO_POSTS_AUDIO } from "data/posts";

const SingleContentDemo = () => {
  return (
    <>
    <div className="container relative">
        <div className="py-16 lg:py-28">
          <Heading>Latest audio articles</Heading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card16Podcast post={DEMO_POSTS_AUDIO[10]} />
            <Card16Podcast post={DEMO_POSTS_AUDIO[11]} />
            <Card16Podcast post={DEMO_POSTS_AUDIO[12]} />

            <Card16Podcast post={DEMO_POSTS_AUDIO[10]} />
            <Card16Podcast post={DEMO_POSTS_AUDIO[11]} />
            <Card16Podcast post={DEMO_POSTS_AUDIO[12]} />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleContentDemo;
