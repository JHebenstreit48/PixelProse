import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const MockingToolsAndTechniques = () => {
  const markdownFilePath = 'Languages/CFamily/C/Testing/FrameworksAndTools/MockingToolsAndTechniques';

  return (
    <>
      <PageLayout>
        <PageTitle title="Mocking Tools & Techniques" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MockingToolsAndTechniques;
