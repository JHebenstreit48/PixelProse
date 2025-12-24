import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MockingToolsAndTechniques = () => {
  const markdownFilePath = 'Languages/CFamily/C/Testing/FrameworksAndTools/MockingToolsAndTechniques';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Mocking Tools & Techniques" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MockingToolsAndTechniques;
