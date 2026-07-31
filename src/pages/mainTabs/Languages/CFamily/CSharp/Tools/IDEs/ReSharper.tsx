import PageLayout from "@/components/navigationUI/pageLayout";
import PageTitle from "@/components/pageComponents/pageTitle";
import Notes from "@/components/pageComponents/notes/notes";

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