import CodePageSetup from "../Components/CodeNotesSetup";
import Header from "../Components/Header";
import Lua from "./Lua";

const LuaCode = () => {
    const markdownFilePath = '/LuaNotes/LuaNotesCode.md';

    return (

        <>

            <Header text="Lua Notes Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default LuaCode;