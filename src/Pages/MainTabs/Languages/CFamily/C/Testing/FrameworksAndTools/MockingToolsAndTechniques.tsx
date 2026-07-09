import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
