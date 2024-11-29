import Header from "../Components/Header";
import PageSetup from "../Components/NotesCardSetup";
import "../CSS/Header.css";

const Lua = () => {
    const markdownFilePath = '/LuaNotes/Lua.md';

    return (

        <>
           <Header text="Lua" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Lua;