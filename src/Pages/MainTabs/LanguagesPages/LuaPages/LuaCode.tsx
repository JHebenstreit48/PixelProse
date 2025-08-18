import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/Shared/Header/Header";

const LuaCode = () => {
    const markdownFilePath = '/LuaNotes/LuaNotesCode';

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
