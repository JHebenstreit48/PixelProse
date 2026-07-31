import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const MockingTools = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Testing/FrameworksAndTools/MockingTools';

  return (
    <>
      <PageLayout>
        <PageTitle title="Mocking Tools" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MockingTools;
