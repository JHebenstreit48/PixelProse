import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Lua = () => {
    const markdownFilePath = '/LuaNotes/Lua.md';

    return (

        <>
            <Header text="Lua" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Lua;
