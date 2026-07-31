import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
