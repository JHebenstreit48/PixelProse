import Header from "@/Components/Shared/Header/Header";
import Notes from "@/Components/PageComponents/Notes/Notes";

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
