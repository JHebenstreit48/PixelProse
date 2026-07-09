import Notes from "@/Components/PageComponents/Notes/Notes";

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
