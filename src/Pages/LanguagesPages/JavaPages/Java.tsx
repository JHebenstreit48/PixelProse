import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Java = () => {
    const markdownFilePath = '/JavaNotes/Java.md';

    return (

        <>
            <Header text="Java" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Java;
