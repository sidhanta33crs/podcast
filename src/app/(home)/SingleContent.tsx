import React, { FC, useEffect, useRef, useState } from "react";
import Tag from "components/Tag/Tag";
// import SingleAuthor from "./SingleAuthor";
// import SingleCommentForm from "./SingleCommentForm";
// import SingleCommentLists from "./SingleCommentLists";
import SingleContentDemo from "../(home)/SingleContentDemo";
import { DEMO_TAGS } from "data/taxonomies";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import PostCardLikeAction from "components/PostCardLikeAction/PostCardLikeAction";
import PostCardCommentBtn from "components/PostCardCommentBtn/PostCardCommentBtn";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const demoTags = DEMO_TAGS.filter((_, i) => i < 9);

export interface SingleContentProps {}

const SingleContent: FC<SingleContentProps> = () => {
  const endedAnchorRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLButtonElement>(null);
  //
  const [isShowScrollToTop, setIsShowScrollToTop] = useState<boolean>(false);
  //

  const endedAnchorEntry = useIntersectionObserver(endedAnchorRef, {
    threshold: 0,
    root: null,
    rootMargin: "0%",
    freezeOnceVisible: false,
  });

  useEffect(() => {
    const handleProgressIndicator = () => {
      const entryContent = contentRef.current;
      const progressBarContent = progressRef.current;

      if (!entryContent || !progressBarContent) {
        return;
      }

      const totalEntryH = entryContent.offsetTop + entryContent.offsetHeight;
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      let scrolled = (winScroll / totalEntryH) * 100;

      progressBarContent.innerText = scrolled.toFixed(0) + "%";

      if (scrolled >= 100) {
        setIsShowScrollToTop(true);
      } else {
        setIsShowScrollToTop(false);
      }
    };

    const handleProgressIndicatorHeadeEvent = () => {
      window?.requestAnimationFrame(handleProgressIndicator);
    };
    handleProgressIndicator();
    window?.addEventListener("scroll", handleProgressIndicatorHeadeEvent);
    return () => {
      window?.removeEventListener("scroll", handleProgressIndicatorHeadeEvent);
    };
  }, []);

  const showLikeAndCommentSticky =
    !endedAnchorEntry?.intersectionRatio &&
    (endedAnchorEntry?.boundingClientRect.top || 0) > 0;

  return (
    <div className="relative">
      <div className="nc-SingleContent space-y-10">
        {/* ENTRY CONTENT */}
        <div
          id="single-entry-content"
          className=""
          ref={contentRef}
        >
          <SingleContentDemo />
        </div>

      </div>
     
     
    </div>
  );
};

export default SingleContent;
