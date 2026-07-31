import Notes from "@/components/pageComponents/notes/notes";

const Vulkan = () => {
    const markdownFilePath = '/VulkanNotes/Vulkan';

    return (

        <>
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Vulkan;
