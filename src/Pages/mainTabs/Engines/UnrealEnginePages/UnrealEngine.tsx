import Notes from "@/components/pageComponents/Notes/Notes";

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
