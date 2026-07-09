import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents//PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VisualStudio = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Tools/IDEs/VisualStudio';

  return (
    <>
      <PageLayout>
        <PageTitle title="C# IDEs and Extensions - Visual Studio" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VisualStudio;