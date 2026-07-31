import Notes from '@/components/pageComponents/notes/notes';

const Unity = () => {
    const markdownFilePath = '/UnityNotes/Unity';

    return (

        <>
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Unity;
