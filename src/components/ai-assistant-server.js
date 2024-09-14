import { GPTPost } from "@/app/api/chatgpt/route"
import AiSideBar from "./ai-assistant";

function AssistantServer() {
    async function post(prompt) {
        
        return await GPTPost(prompt);
    }

    return (
        <AiSideBar post={post}/>
    )
}

export default AssistantServer
