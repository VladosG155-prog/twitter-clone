import { FC, useState } from "react";

import { selectUser } from "@/entities/session";
import { CREATE_TWEET } from "@/entities/tweet/model/actions";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import { Button } from "@/shared/ui";
import { AddPicture } from "@/shared/ui/";
import { Avatar } from "@/shared/ui/Avatar/Avatar";

import { ITweetInputProps } from "./types";

export const TweetInput: FC<ITweetInputProps> = ({ onClose }) => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const { isLoading, tweets } = useAppSelector((state) => state.tweets);
  const [isSended, setIsSended] = useState(false);

  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("");

  const handleClickTweet = () => {
    dispatch(CREATE_TWEET({ user, text, image: file || undefined }));
    setText("");
    setFile(null);
    setIsSended(true);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="px-5 flex pt-5 border-b pb-3 border-gray-400">
      <div className="mr-5">
        <Avatar url={user?.avatar} />
      </div>
      <div className="flex-1 relative">
        {isLoading && tweets.length > 0 && isSended && (
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden relative">
            <div className="h-full bg-primary w-32 absolute animate-run"></div>
          </div>
        )}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What’s happening"
          className="resize-none w-full border-b border-gray-300 mb-5 h-28 text-1.5xl p-5 font-semibold text-gray-300 dark:bg-black font-roboto outline-primary outline-1"
        />
        <div className="w-full flex justify-between items-center">
          <AddPicture value={file} onChange={setFile} />

          <Button
            text="Tweet"
            dataTest="add-tweet-btn"
            onClick={handleClickTweet}
            variant="primary"
            disabled={!text.length}
            className="mb-0 max-w-[116px] disabled:opacity-55 disabled:hover:bg-opacity-100"
          />
        </div>
      </div>
    </div>
  );
};
