import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents//pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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