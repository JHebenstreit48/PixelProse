import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

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
