import Header from "@/Components/Shared/Header/Header";
import Notes from "@/Components/PageComponents/Notes/Notes";

const Lua = () => {
    const markdownFilePath = '/LuaNotes/Lua';

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
