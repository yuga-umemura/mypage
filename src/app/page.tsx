import Profile from "../components/Profile";
import SNS from "../components/SNS";

export default async function Page() {
  return (
    <div>
      <Profile />
      <div className="flex h-auto">
        <p className="max-w-2xl break-words">This is a test message.</p>
      </div>
      <div>
        <img
          className="py-2"
          width="600"
          src="https://github-readme-stats.vercel.app/api?username=yuga-umemura&amp;show_icons=true&amp;theme=dracula"
        ></img>
        <img
          className="py-2"
          width="600"
          src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=yuga-umemura&theme=dracula"
        ></img>
        <img
          className="py-2"
          width="600"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=yuga-umemura&langs_count=5&hide=html,cmake&theme=dracula"
        ></img>
      </div>
      <SNS />
    </div>
  );
}
