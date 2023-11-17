import { TfiUnlock } from "react-icons/tfi";
import { LuLineChart } from "react-icons/lu";
import { RiCommunityFill } from "react-icons/ri";
import { MdInsights } from "react-icons/md";
import { GiWhiteBook } from "react-icons/gi";
import { IoTimer } from "react-icons/io5";

export const whydata = [
  {
    sub: "Capture Every Detail, Amplify Your Insights:",
    icon: <MdInsights size={20} className="text-blue-600" />,
    text: "Our intuitive journaling platform empowers you to record every trade with precision. From entry and exit points to emotions and market conditions, no detail is too small. By meticulously logging your trades, you unlock profound insights that pave the way for smarter decisions.",
  },
  {
    sub: "Reflect, Learn, Grow:",
    icon: <GiWhiteBook size={20} color="blue" className="text-blue-600" />,
    text: "Trading is a continuous learning process. Our app provides a dedicated space for reflection. Analyze past performances, identify patterns, and learn from both successes and challenges. Your trading journal becomes a personalized roadmap to improvement.",
  },
  {
    sub: "Community Support, Global Connections:",
    icon: <RiCommunityFill size={20} className="text-blue-600" />,
    text: "Connect with a thriving community of traders who share your passion. Learn from their experiences, exchange strategies, and find inspiration in the diverse stories of success. In our community, you're never alone on your trading journey.",
  },
  {
    sub: "Track Your Progress, Celebrate Achievements:",
    icon: <LuLineChart size={20} className="text-blue-600" />,
    text: "Set goals, track your progress, and celebrate your achievements. Our app transforms the sometimes solitary nature of trading into a communal celebration of wins, big and small. Your victories are milestones worth acknowledging.",
  },
  {
    sub: "Stay Disciplined, Stay Informed:",
    icon: <IoTimer size={20} color="blue" className="text-blue-600" />,
    text: "Discipline is the cornerstone of successful trading. Our app helps you stay disciplined by providing structure to your trading routine. Stay informed with timely reminders, insightful analytics, and a personalized dashboard tailored to your unique trading style.",
  },
  {
    sub: "Unlock the Power of Data:",
    icon: <TfiUnlock size={20} className="text-blue-600" />,
    text: "Data is your greatest ally. Leverage our powerful analytics tools to gain a deeper understanding of your trading patterns. Visualize trends, measure risk, and make informed decisions based on data-driven insights.",
  },
];

export const journaldata =
  //   { firstText: "" },
  {
    secondText:
      "Equity Eagle's journaling feature simplifies the process of recording and analyzing your trading experiences. With automatic data capture, you gain valuable insights into key metrics like profit factor, average trade outcomes, and our unique 'EdgeScore' that rates the quality of your journal entries. The higher your EdgeScore, the more effective your journaling. Plus, our platform offers real-time comments, providing you with actionable guidance to enhance your trading journal and improve your future trading decisions.",
  };

export const pricedata = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Sales",
      data: [30, 40, 25, 50, 45], // Sample data points
      borderColor: "rgba(75, 192, 192, 1)", // Line color
      borderWidth: 2, // Line width
      fill: false, // Do not fill area under the line
    },
  ],
};

export const type = [{ pair: "BUY" }, { pair: "SELL" }];

export const TestText = {
  text:
    "Equity Eagle empowers you to make informed investment decisions," +
    "helping you optimize your portfolio and maximize returns.",
};

export const draftdata = {
  wel: "Here the world of trading comes alive. Embark on a journey of discovery as you navigate through the dynamic landscape of financial markets. Here, the possibilities are as endless as the opportunities that unfold with each market tick.",
  connect:
    "Trading is more than just numbers and charts; it's a shared experience that connects individuals from every corner of the world. Connect with a community of passionate traders, each bringing their unique insights and perspectives to the table. Learn from seasoned experts, share your strategies, and forge connections that transcend geographical boundaries.",
  share:
    "Your trading journey is a story waiting to be told. Share your successes, learn from challenges, and celebrate milestones with a supportive community of traders who understand the highs and lows of the market. Whether you're a seasoned pro or just starting, everyone has a valuable story to tell.",
};
