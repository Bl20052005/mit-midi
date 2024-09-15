import { GPTPost } from "@/app/api/chatgpt/route";
import AiSideBar from "./ai-assistant";

function AssistantServer() {
  async function post(prompt) {
    const response = await fetch("/api/chatgpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });
    const res = await response.json();
    console.log(res);
    return res.result;
  }

  return <AiSideBar post={post} />;
}

export default AssistantServer;
