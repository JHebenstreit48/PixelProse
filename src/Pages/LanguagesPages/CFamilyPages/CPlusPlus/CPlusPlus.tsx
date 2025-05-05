import Header from "@/Components/PageComponents/Header";
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
