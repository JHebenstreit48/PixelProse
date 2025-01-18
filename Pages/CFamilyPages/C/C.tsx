import Header from "@/Components/Header";
import PageSetup from "@/Components/Notes";

const C = () => {
    const markdownFilePath = '/CNotes/C.md';

    return (

        <>
            <Header text="C" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default C;
