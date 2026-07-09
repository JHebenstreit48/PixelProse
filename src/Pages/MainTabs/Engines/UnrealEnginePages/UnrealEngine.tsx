import Notes from "@/Components/PageComponents/Notes/Notes";

const UnrealEngine = () => {
    const markdownFilePath = '/UnrealEngineNotes/UnrealEngine';

    return (

        <>
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default UnrealEngine;
