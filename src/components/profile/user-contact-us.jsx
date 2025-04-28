import { ChatCard } from "../cards/chat-card";
import { ChatFormSubmission } from "../chat/chat-form-submission";

export const UserContactUs = () => {
  return (
    <div className="flex flex-col gap-21">
      <div className="flex flex-col gap-11.5">
        <ChatCard />
        <ChatCard fromUser />
      </div>
      <ChatFormSubmission />
    </div>
  );
};
