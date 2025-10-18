import PageLayout from '@/Components/NavigationUI/PageLayout'
import Header from "@/Components/Shared/Header/Header";
import PageTitle from "@/Components/PageComponents/PageTitle";
import Notes from "@/Components/PageComponents/Notes/Notes";

const Syntax = () => {
    const markdownFilePath = "/LanguagesPages/CFamily/CNotes/Basics/CSyntax";

    return (
        <>
        <PageLayout>
            <Header />
            <PageTitle title="C Fundamentals - Syntax" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </PageLayout>
        </>
    );
};

export default Syntax;