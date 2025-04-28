import { MicrophoneIcon } from "../icons/microphone-icon";
import { LinkIcon } from "../icons/link-icon";
import { SendIcon } from "../icons/send-icon";
import { ImgIcon } from "../icons/img-icon";

export const ChatFormSubmission = () => {
  return (
    <div className="flex items-center gap-12">
      <div className="flex-1 flex items-center gap-3">
        <input
          className="flex-1 h-full py-3 px-4 rounded-xl placeholder:text-sm text-sm outline-none bg-light-dark-1 placeholder:text-white/70 text-white/70"
          placeholder="Enter Your Message here"
        />
        <button
          type="submit"
          className="size-10 bg-primary-2 cursor-pointer text-white rounded-full flex items-center justify-center"
        >
          <SendIcon />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button className="cursor-pointer size-10 bg-light-dark-1 rounded-full text-primary flex items-center justify-center">
          <MicrophoneIcon className="size-5" />
        </button>
        <button className="cursor-pointer size-10 bg-light-dark-1 rounded-full text-primary flex items-center justify-center">
          <ImgIcon className="size-5" />
        </button>
        <button className="cursor-pointer size-10 bg-light-dark-1 rounded-full text-primary flex items-center justify-center">
          <LinkIcon className="size-5" />
        </button>
      </div>
    </div>
  );
};
