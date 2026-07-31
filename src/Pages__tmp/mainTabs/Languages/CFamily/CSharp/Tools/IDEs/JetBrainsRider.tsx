import PageLayout from "@/components/navigationUI/PageLayout";
import PageTitle from "@/components/pageComponents/pageTitle";
import Notes from "@/components/pageComponents/Notes/Notes";

const JetBrainsRider = () => {
  const markdownFilePath = "Languages/CFamily/CSharp/Tools/IDEs/Rider";

  return (
    <PageLayout>
      <PageTitle title="C# Tools - JetBrains Rider" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default JetBrainsRider;