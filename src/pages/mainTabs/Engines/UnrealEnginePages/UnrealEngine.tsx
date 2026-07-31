import Notes from '@/components/pageComponents/notes/notes';

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
