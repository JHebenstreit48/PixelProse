import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const CIntro = () => {
    const markdownFilePath = "/LanguagesPages/CFamily/CNotes/Basics/Introduction.md";

    return (
        <>
            <Header text="C Introduction" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default CIntro;
