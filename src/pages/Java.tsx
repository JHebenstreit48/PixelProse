import Header from "../Components/Header";
import PageSetup from "../Components/Notes";
import "../CSS/Header.css";

const Java = () => {
    const markdownFilePath = '/JavaNotes/Java.md';

    return (

        <>
            <Header text="Java" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Java;
