import { PrivacyPolicyData } from "@/constants/user-privacy-policy";
import { PrivacyPolicyIcon } from "../icons/privacy-policy-icon";

export const UserPrivacyPolicy = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <PrivacyPolicyIcon className="size-4 text-primary" />
        <h5 className="text-primary font-bold text-sm">Privacy Policy</h5>
      </div>
      <p className="text-white font-bold text-sm">
        Welcome to Rakan Website, your trusted platform connecting clients,
        freelancers, and marketers. By using our platform, you agree to adhere
        to the following terms and policies. Please read them carefully. 
      </p>
      <ol className="flex list-decimal list-inside flex-col gap-8">
        {PrivacyPolicyData.map((info) => (
          <li key={info.title} className="font-bold text-sm text-primary">
            {info.title}
            <ul className="list-disc list-inside pt-4 ps-4 flex flex-col gap-2">
              {info.contents.map((j) => (
                <li key={j.title} className="text-white text-sm">
                  {j.title}
                  {j.data ? (
                    <span className="text-sm ps-4 pt-2 font-medium block">
                      {j.data}
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};
