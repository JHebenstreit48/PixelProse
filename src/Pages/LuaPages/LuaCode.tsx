import Notes from "@/Components/Notes";
import Header from "../Components/Header";

const LuaCode = () => {
    const markdownFilePath = '/LuaNotes/LuaNotesCode.md';

    return (

        <>

            <Header text="Lua Notes Code" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default LuaCode;
