import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const CControlFlow = () => {
    const markdownFilePath = "/LanguagesPages/CFamily/CNotes/Basics/CControlFlow.md";

    return (
        <>
            <Header text="C Control Flow" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default CControlFlow;
