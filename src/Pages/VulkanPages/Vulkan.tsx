import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const Vulkan = () => {
    const markdownFilePath = '/VulkanNotes/Vulkan.md';

    return (

        <>
            <Header text="Vulkan" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Vulkan;
