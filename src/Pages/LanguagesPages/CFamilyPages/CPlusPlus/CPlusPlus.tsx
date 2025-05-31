import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const CPlusPlus = () => {
    const markdownFilePath = '/CPlusPlusNotes/CPlusPlus.md';

    return (

        <>
            <Header text="C++" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CPlusPlus;
