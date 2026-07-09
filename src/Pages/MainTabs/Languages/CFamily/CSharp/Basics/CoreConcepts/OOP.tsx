import Notes from "@/Components/PageComponents/Notes/Notes";

const OOP = () => {
    const markdownFilePath = 'LanguagesPages/CFamilyNotes/CSharpNotes/Basics/CoreConcepts/OOP';

    return (

        <>
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default OOP;
