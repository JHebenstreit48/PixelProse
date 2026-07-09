import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UnitTestingInGameEngines = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Testing/EngineIntegration/UnitTestingInGameEngines';

  return (
    <>
      <PageLayout>
        <PageTitle title="Unit Testing in Game Engines" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnitTestingInGameEngines;
