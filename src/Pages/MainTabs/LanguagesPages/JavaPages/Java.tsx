import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Java = () => {
    const markdownFilePath = '/JavaNotes/Java';

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
