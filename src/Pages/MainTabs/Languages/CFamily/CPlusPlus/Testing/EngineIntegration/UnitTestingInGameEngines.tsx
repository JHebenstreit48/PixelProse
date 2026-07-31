import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
