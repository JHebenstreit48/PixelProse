import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header/Header";
import PageTitle from "@/Components/PageComponents/PageTitle";
import Notes from "@/Components/PageComponents/Notes/Notes";

const JetBrainsRider = () => {
  const markdownFilePath = "Languages/CFamily/CSharp/Tools/IDEs/Rider";

  return (
    <PageLayout>
      <Header />
      <PageTitle title="C# Tools - JetBrains Rider" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default JetBrainsRider;