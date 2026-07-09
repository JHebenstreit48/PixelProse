import Notes from "@/Components/PageComponents/Notes/Notes";

const Collections = () => {
    const markdownFilePath = 'LanguagesPages/CFamilyNotes/CSharpNotes/Basics/CoreConcepts/Collections';

    return (

        <>
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Collections;
