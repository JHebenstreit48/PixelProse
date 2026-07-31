import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const DebuggingTools = () => {
  const markdownFilePath = 'Languages/CFamily/C/Tools/DevelopmentUtilities/DebuggingTools';

  return (
    <>
      <PageLayout>
        <PageTitle title="Debugging Tools" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DebuggingTools;
