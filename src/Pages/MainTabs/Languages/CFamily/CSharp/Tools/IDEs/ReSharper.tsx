import PageLayout from "@/components/navigationUI/PageLayout";
import PageTitle from "@/components/pageComponents/pageTitle";
import Notes from "@/components/pageComponents/Notes/Notes";

const ReSharper = () => {
  const markdownFilePath = "Languages/CFamily/CSharp/Tools/IDEs/ReSharper";

  return (
    <PageLayout>
      <PageTitle title="C# Tools - ReSharper" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default ReSharper;