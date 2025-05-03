import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const UnrealEngine = () => {
    const markdownFilePath = '/UnrealEngineNotes/UnrealEngine.md';

    return (

        <>
            <Header text="Unreal Engine" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default UnrealEngine;
