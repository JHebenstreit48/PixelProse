import PageLayout from "@/Components/NavigationUI/PageLayout";
import PageTitle from "@/Components/PageComponents/PageTitle";
import Notes from "@/Components/PageComponents/Notes/Notes";

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