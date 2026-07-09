import PageLayout from "@/Components/NavigationUI/PageLayout";
import PageTitle from "@/Components/PageComponents/PageTitle";
import Notes from "@/Components/PageComponents/Notes/Notes";

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