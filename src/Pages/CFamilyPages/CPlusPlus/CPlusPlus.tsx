import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

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
