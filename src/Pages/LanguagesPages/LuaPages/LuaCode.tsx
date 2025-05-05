import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

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
