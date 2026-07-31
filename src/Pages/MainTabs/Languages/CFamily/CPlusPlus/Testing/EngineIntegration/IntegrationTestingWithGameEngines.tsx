import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
