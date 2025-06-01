import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const CIntro = () => {
    const markdownFilePath = "/LanguagesPages/CFamilyNotes/CNotes/Basics/Introduction.md";

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
