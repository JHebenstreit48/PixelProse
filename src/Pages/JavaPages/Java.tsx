import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

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
