import { useState } from "react";

import { selectUser } from "@/entities/session";
import { CREATE_TWEET } from "@/entities/tweet/model/actions";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import { Button } from "@/shared/ui";
import { AddPicture } from "@/shared/ui/";
import { Avatar } from "@/shared/ui/Avatar/Avatar";

export const TweetInput = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("");

  const handleClickTweet = () => {
    dispatch(CREATE_TWEET({ user, text, image: file || undefined }));
    setText("");
    setFile(null);
  };

  return (
    <div className="px-5 flex pt-5 border-b pb-3 border-gray-400">
      <div className="mr-5">
        <Avatar url={user?.avatar} />
      </div>
      <div className="flex-1 relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What’s happening"
          className="resize-none w-full h-28 text-1.5xl p-5 font-semibold text-gray-300 font-roboto"
        />
        <div className="w-full flex justify-between items-center">
          <AddPicture value={file} onChange={setFile} />

          <Button
            text="Tweet"
            onClick={handleClickTweet}
            variant="primary"
            disabled={!text.length}
            className="mb-0 max-w-[116px]"
          />
        </div>
      </div>
    </div>
  );
};
