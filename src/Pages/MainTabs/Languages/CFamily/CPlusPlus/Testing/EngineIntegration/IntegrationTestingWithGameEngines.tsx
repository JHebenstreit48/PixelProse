import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IntegrationTestingWithGameEngines = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Testing/EngineIntegration/IntegrationTestingWithGameEngines';

  return (
    <>
      <PageLayout>
        <PageTitle title="Integration Testing with Game Engines" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntegrationTestingWithGameEngines;
